import { useState, useEffect } from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm';
import ReviewsList from '../components/ReviewsList';
import { Map, Marker } from 'pigeon-maps';

import './LocationContainer.css';

function LocationContainer() {
  const { id } = useParams();
  const url = 'http://localhost:8080/api/locations/' + id;
  const [location, setLocation] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [locationLoaded, setLocationLoaded] = useState(false);
  const [averages, setAverages] = useState(null);
  const [coordinates, setCoordinates] = useState('');

  const addReview = (submittedReview) => {
    submittedReview.id = Date.now();
    const updatedReviews = [...reviews, submittedReview];
    setReviews(updatedReviews);
  };

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setLocation(data));
  }, [url]);

  useEffect(() => {
    if (location && averages) {
      setReviews(location.ratings);
      setLocationLoaded(true);
    }
  }, [location, averages]);

  useEffect(() => {
    if (location) {
      setCoordinates([location.longitude, location.latitude])

      const metrics = ['high_light_score', 'low_noise_score', 'adequate_space', 'mobility_access', 'staff_support', 'total_score'];

      const averages = metrics
        .map((metric) => {
          const sum = location.ratings.reduce((acc, rating) => acc + rating[metric], 0);
          return [metric, sum];
        })
        .reduce((acc, [metric, sum]) => {
          return { ...acc, [metric]: Math.round((sum / location.ratings.length) * 10) / 10 };
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
          <h2>
            {location.name} <Rating className="rating" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={averages.total_score} fractions={2} readonly />
          </h2>
          <p>{location.description}</p>
          <h4>Review Categories:</h4>
          <div className="location-review-categories">
            <div>
              <div>
                Staff Support
                <div>
                  <Rating className="rating" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={averages.staff_support} fractions={2} readonly />
                </div>
              </div>
              <div>
                High Light
                <div>
                  <Rating className="rating" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={averages.high_light_score} fractions={2} readonly />
                </div>
              </div>
              <div>
                Low Noise
                <div>
                  <Rating className="rating" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={averages.low_noise_score} fractions={2} readonly />
                </div>
              </div>
            </div>
            <div>
              <div>
                Mobility Access
                <div>
                  <Rating className="rating" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={averages.mobility_access} fractions={2} readonly />
                </div>
              </div>

              <div>
                Adequate Space
                <div>
                  <Rating className="rating" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={averages.adequate_space} fractions={2} readonly />
                </div>
              </div>
            </div>
          </div>

          {/* <p>{reviews[0]}</p> */}
        </div>
      </div>
      <div className="location-map-container">
        <Map className="map" defaultCenter={coordinates} defaultZoom={15}>
          <Marker width={45} anchor={coordinates} key={location.id} color="#3717A0"></Marker>
        </Map>
      </div>

      <h3>User Reviews:</h3>
      <div className="reviews-scroll-box">
        <ReviewsList reviews={reviews} />
      </div>
      <ReviewForm onFormSubmit={(review) => addReview(review)} />
    </>
  );
}

export default LocationContainer;
