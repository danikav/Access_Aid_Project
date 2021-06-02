import './LocationListItem.css';

const LocationListItem = ({ location }) => {
  const metrics = ['high_light_score', 'low_noise_score', 'adequate_space', 'mobility_access', 'staff_support', 'total_score'];
  const averages = metrics
    .map((metric) => {
      const sum = location.ratings.reduce((acc, rating) => acc + rating[metric], 0);
      return [metric, sum];
    })
    .reduce((acc, [metric, sum]) => {
      return { ...acc, [metric]: Math.round((sum / location.ratings.length) * 10) / 10 };
    }, {});

  return (
    <>
      <div className="location-list-item">
        <img className="location-image" src={location.picture_source} alt="location"></img>
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
        </div>
      </div>
    </>
  );
};
export default LocationListItem;
