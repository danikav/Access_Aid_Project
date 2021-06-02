import Rating from 'react-rating';
import './Reviews.css';

const ReviewListItem = ({ name, comment, totalScore, staffSupport, mobilityAccess, lowNoiseScore, highLightScore, adequateSpaceScore, date }) => {
  const firstLetter = name.substring(0, 1)
  const displayIconColour = '#' + Math.floor(Math.random()*16777215).toString(16);
  
  return (
    <div className="review-item">
      <h4 className="review-title">
        <div className="review-display-icon" style={{backgroundColor:displayIconColour}}><div className="review-display-letter">{firstLetter}</div></div>
        <span className="review-name">{name}</span> <Rating className="rating" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>} initialRating={totalScore} fractions={2} readonly />
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
