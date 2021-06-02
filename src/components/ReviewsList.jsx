import ReviewListItem from './ReviewListItem';

const ReviewsList = ({ reviews }) => {
  if (!reviews) {
    return <h1>loading...</h1>;
  }

  const reviewNode = reviews.map((review) => {
    return (
      <ReviewListItem
        key={review.id}
        name={review.user.name}
        comment={review.user_reviews}
        totalScore={review.total_score}
        staffSupport={review.staff_support}
        mobilityAccess={review.mobility_access}
        lowNoiseScore={review.low_noise_score}
        highLightScore={review.high_light_score}
        adequateSpaceScore={review.adequate_space}
      />
    );
  });

  return <>{reviewNode}</>;
};

export default ReviewsList;
