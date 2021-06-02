const ReviewListItem = ({name, comment, totalScore, staffSupport, mobilityAccess, lowNoiseScore, highLightScore, adequateSpaceScore}) => {
  return(
    <>
    <h4>{name}</h4>
    <h5>{totalScore}/5</h5>
    <p>{comment}</p>
    <div>Staff Support: {staffSupport}/5 || Mobility Access: {mobilityAccess}/5 || Low Noise Score: {lowNoiseScore}/5 || High Light Score: {highLightScore} || Adequate Space Score: {adequateSpaceScore}/5</div>
    </>
  )
}

export default ReviewListItem