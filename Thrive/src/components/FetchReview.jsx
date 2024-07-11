import Rating from "react-rating-stars-component"

const FetchReview = ({ id, content, rating, program, user }) => {
  return (
    <div className="reviewCard" id={id}>
      <div className="reviewUserInfo">
        <div>user: {user.firstName}</div>
        <div>
          <Rating
            value={rating}
            count={5}
            size={24}
            activeColor="#ffd700"
            edit={false}
          />
        </div>
      </div>
      <div className="reviewContent">{content}</div>
    </div>
  )
}

export default FetchReview
