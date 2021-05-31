import './PopUp.css';

const Popup = ({ toggle, location }) => {
  return (
    <div className="popup-container">
      <button className="close-button" onClick={toggle}></button>
      <div className="business-text">
        <h1>{location.name}</h1>
        <p>{location.description}</p>
        <ul>
          <li>Staff Support: {location.staff_support}/5</li>
          <li>Mobility Access: {location.mobility_access}/5</li>
          <li>Noise Level: {location.low_noise_score}/5</li>
          <li>Light Level: {location.high_light_score}/5</li>
          <li>Adequate Space: {location.adequate_space}/5</li>
        </ul>
      </div>
      <img src={location.picture_source} alt={location.name} className="business-image-cover"></img>
    </div>
  );
};

export default Popup;
