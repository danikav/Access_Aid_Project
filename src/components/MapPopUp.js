import { Link } from 'react-router-dom';
import './MapPopUp.css';

const MapPopUp = ({ toggle, location }) => {
  const url = '/location/' + location.id;

  return (
    <>
      <div className="popup-container">
        <div className="location-text">
          <img src={location.picture_source} alt={location.name} className="location-image-cover"></img>

          <Link to={url}>
            <h3>{location.name}</h3>
          </Link>
          <p>{location.description}</p>
          <ul>
            <li>Staff Support: {location.staff_support}/5</li>
            <li>Mobility Access: {location.mobility_access}/5</li>
            <li>Noise Level: {location.low_noise_score}/5</li>
            <li>Light Level: {location.high_light_score}/5</li>
            <li>Adequate Space: {location.adequate_space}/5</li>
          </ul>
        </div>

        <button className="close-button" onClick={toggle}></button>
      </div>
    </>
  );
};

export default MapPopUp;
