import Rating from 'react-rating';
import './Reviews.css';

const ReviewListItem = ({ name, comment, totalScore, staffSupport, mobilityAccess, lowNoiseScore, highLightScore, adequateSpaceScore, date }) => {
  const firstLetter = name.substring(0, 1)
  
  return (
    <div className="review-item">
      <h4 className="review-title">
        <div className="display-icon">{firstLetter}</div>
        {name} <Rating className="rating" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={totalScore} fractions={2} readonly />
        <span className="review-date"> {date}</span>
      </h4>
      <p>"{comment}"</p>
      <div>
        Staff Support
        <div>
          <Rating className="rating" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={staffSupport} fractions={2} readonly />
        </div>
      </div>
      <div>
        Mobility Access
        <div>
          <Rating className="rating" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={mobilityAccess} fractions={2} readonly />
        </div>
      </div>
      <div>
        Low Noise
        <div>
          <Rating className="rating" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={lowNoiseScore} fractions={2} readonly />
        </div>
      </div>
      <div>
        High Light
        <div>
          <Rating className="rating" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={highLightScore} fractions={2} readonly />
        </div>
      </div>
      <div>
        Adequate Space
        <div>
          <Rating className="rating" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={adequateSpaceScore} fractions={2} readonly />
        </div>
      </div>
    </div>
  );
};

export default ReviewListItem;
