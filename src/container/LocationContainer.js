import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm'

function LocationContainer() {
  const { id } = useParams();
  const url = 'http://localhost:8080/api/locations/' + id;
  const [location, setLocation] = useState({});

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setLocation(data));
  }, [url]);

  return (
    <>
      <div className="location">
        <img className="location-image" src={location.picture_source} alt="location"></img>
        <div className="location-info">
          <h2>{location.name}</h2>
          <p>Rating: &#9733;&#9733;&#9733;&#9733;&#9734;</p>
          <p>{location.description}</p>
          <ul>
            <li>Star rating here.</li>
            <li>Star rating here.</li>
            <li>Star rating here.</li>
            <li>Star rating here.</li>
            <li>Star rating here.</li>
          </ul>
        </div>
      </div>
      <ReviewForm />
      
    </>
  );
}

export default LocationContainer;
