import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import FetchReview from "../components/FetchReview"
import Client from "../services/api"

const Home = ({ user }) => {
  const [reviews, setReviews] = useState([])
  const userId = localStorage.getItem("userId")

  const getReviews = async () => {
    try {
      const res = await Client.get("/programs/reviews")
      setReviews(res.data)
    } catch (error) {
      console.error("Failed to fetch reviews:", error)
    }
  }

  useEffect(() => {
    getReviews()
  }, [])

  // console.log(`user ${JSON.stringify(user)}`)
  return (
    <div className="homepage">
      <div className="scrollable-container">
        <div className="child-content">
          {reviews.map((review) => (
            <FetchReview
              key={review._id}
              id={review._id}
              content={review.content}
              program={review.program}
              rating={review.rating}
              user={review.user}
            />
          ))}
        </div>
      </div>
      {user && user.type !== "Admin" && (
        <Link to={`/reviews/${userId}`} className="nav-links">
          ADD REVIEW
        </Link>
      )}
    </div>
  )
}

export default Home
