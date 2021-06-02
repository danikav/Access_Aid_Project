import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import './MapPopUp.css';

const MapPopUp = ({ toggle, location }) => {
  const url = '/location/' + location.id;

  let totalScore = 0;
  location.ratings.forEach((rating) => {
    totalScore += rating.total_score;
  });
  totalScore = totalScore / location.ratings.length;

  return (
    <>
      <div className="popup-container">
        <div className="location-text">
          <img src={location.picture_source} alt={location.name} className="location-image-cover"></img>

          <Link to={url} className="location-link">
            <h3>{location.name}</h3>
          </Link>
          <Rating className="rating" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={totalScore} fractions={2} readonly />
          <p>{location.description}</p>
        </div>

        <button className="close-button" onClick={toggle}></button>
      </div>
    </>
  );
};

export default MapPopUp;
