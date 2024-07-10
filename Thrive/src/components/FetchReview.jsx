const FetchReview = ({ id, content, rating, program }) => {
  return (
    <div className="reviewCard" id={id}>
      <div className="reviewUserInfo">
        <div>{rating}</div>
        <div>program :{program}</div>
      </div>
      <div className="reviewContent">{content}</div>
    </div>
  )
}

export default FetchReview
