import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm';
import ReviewsList from '../components/ReviewsList';
import Request from '../services/RequestService';

import './LocationContainer.css';

function LocationContainer({users}) {
  const { id } = useParams();
  const url = 'http://localhost:8080/api/locations/' + id;
  const [location, setLocation] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [locationLoaded, setLocationLoaded] = useState(false);
  const [averages, setAverages] = useState(null);

  const addReview = (submittedReview) => {
    const nowFromEpoch = Date.now()
    const newDate = new Date()
    newDate.setUTCSeconds(nowFromEpoch)
    submittedReview.date = newDate;
    const updatedReviews = [...reviews, submittedReview];
    setReviews(updatedReviews);
    return submittedReview
  }

  const fetchLocation = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setLocation(data));
  }

  const handlePost = (review) => {
    const datedReview = addReview(review)
    const request = new Request();
    request.post(`http://localhost:8080/api/ratings`, datedReview)
    .then(() => fetchLocation())
  }

  useEffect(() => {
    fetchLocation()
  }, [url]);

  useEffect(() => {
    if (location && averages) {
      setReviews(location.ratings);
      setLocationLoaded(true);
    }
  }, [location, averages]);

  useEffect(() => {
    if (location) {
      const metrics = ['high_light_score', 'low_noise_score', 'adequate_space', 'mobility_access', 'staff_support', 'total_score'];

      const averages = metrics
        .map((metric) => {
          const sum = location.ratings.reduce((acc, rating) => acc + rating[metric], 0);
          return [metric, sum];
        })
        .reduce((acc, [metric, sum]) => {
          return { ...acc, [metric]: Math.round((sum / location.ratings.length) * 10) /10 };
        }, {});

      setAverages(averages);
    }
  }, [location]);

  if (!locationLoaded || !averages) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="location-container">
        <img className="location-container-image" src={location.picture_source} alt="location"></img>
        <div className="location-info">
          <h2>{location.name}</h2>
          <p>Rating: {averages.total_score}/5</p>
          <p>{location.description}</p>
          <ul>
            <li>Staff Support: {averages.staff_support}/5</li>
            <li>Mobility Access: {averages.mobility_access}/5</li>
            <li>Noise Level: {averages.low_noise_score}/5</li>
            <li>Light Level: {averages.high_light_score}/5</li>
            <li>Adequate Space: {averages.adequate_space}/5</li>
          </ul>
          {/* <p>{reviews[0]}</p> */}
        </div>
      </div>
      <div className="reviews-scroll-box">
        <ReviewsList reviews={reviews} />
      </div>
      <ReviewForm users={users} selectedLocation={location} onFormSubmit={(submittedReview) => handlePost(submittedReview)}/>
      
    </>
  );
}

export default LocationContainer;
