import './LocationListItem.css';

const LocationListItem = ({ location }) => {
  return (
    <>
      <div className="business">
        <img className="business-image" src={location.picture_source} alt="business"></img>
        <div className="business-info">
          <h2>{location.name}</h2>
          <p>Rating: &#9733;&#9733;&#9733;&#9733;&#9734;</p>
          <p>{location.description}</p>
          <ul>
            <li>Staff Support: {location.staff_support}/5</li>
            <li>Mobility Access: {location.mobility_access}/5</li>
            <li>Noise Level: {location.low_noise_score}/5</li>
            <li>Light Level: {location.high_light_score}/5</li>
            <li>Adequate Space: {location.adequate_space}/5</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default LocationListItem;
