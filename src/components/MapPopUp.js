import { Link } from 'react-router-dom';
import './MapPopUp.css';

const MapPopUp = ({ toggle, location }) => {
  const url = '/location/' + location.id;

  let total_score = 0;
  location.ratings.forEach((rating) => {
    total_score += rating.total_score;
  });
  total_score = total_score / location.ratings.length;

  return (
    <>
      <div className="popup-container">
        <div className="location-text">
          <img src={location.picture_source} alt={location.name} className="location-image-cover"></img>

          <Link to={url} className="location-link">
            <h3>{location.name}</h3>
          </Link>
          <p>Total Rating: {total_score}/5</p>
          <p>{location.description}</p>
        </div>

        <button className="close-button" onClick={toggle}></button>
      </div>
    </>
  );
};

export default MapPopUp;
