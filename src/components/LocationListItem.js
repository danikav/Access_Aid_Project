import Rating from 'react-rating';
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
          <p>Rating: <Rating className="rating" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={averages.total_score} fractions={2} readonly /></p>
          <p>{location.description}</p>
          <ul>
            <li>Staff Support: <Rating className="rating" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={averages.staff_support} fractions={2} readonly /></li>            
            <li>Mobility Access: <Rating className="rating" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={averages.mobility_access} fractions={2} readonly /></li>
            <li>Noise Level: <Rating className="rating" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={averages.low_noise_score} fractions={2} readonly /></li>
            <li>Light Level: <Rating className="rating" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={averages.high_light_score} fractions={2} readonly /></li>
            <li>Adequate Space: <Rating className="rating" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={averages.adequate_space} fractions={2} readonly /></li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default LocationListItem;
