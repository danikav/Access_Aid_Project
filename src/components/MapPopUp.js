import { Link } from 'react-router-dom';
import './MapPopUp.css';

const MapPopUp = ({ toggle, location }) => {
  const url = '/location/' + location.id;
  
  let staff_support = 0
  let mobility_access = 0
  let low_noise_score = 0
  let high_light_score = 0
  let adequate_space = 0
  location.ratings.forEach(rating => {
    staff_support += rating.staff_support
    mobility_access += rating.mobility_access
    low_noise_score += rating.low_noise_score
    high_light_score += rating.high_light_score
    adequate_space += rating.adequate_space
  });
  staff_support = staff_support/location.ratings.length
  mobility_access = mobility_access/location.ratings.length
  low_noise_score = low_noise_score/location.ratings.length
  high_light_score = high_light_score/location.ratings.length
  adequate_space = adequate_space/location.ratings.length

  return (
    <>
      <div className="popup-container">
        <div className="location-text">
          <img src={location.picture_source} alt={location.name} className="location-image-cover"></img>

          <Link to={url} className="location-link">
            <h3>{location.name}</h3>
          </Link>
          <p>{location.description}</p>
          <ul>
            <li>Staff Support: {staff_support}/5</li>
            <li>Mobility Access: {mobility_access}/5</li>
            <li>Noise Level: {low_noise_score}/5</li>
            <li>Light Level: {high_light_score}/5</li>
            <li>Adequate Space: {adequate_space}/5</li>
          </ul>
        </div>

        <button className="close-button" onClick={toggle}></button>
      </div>
    </>
  );
};

export default MapPopUp;
