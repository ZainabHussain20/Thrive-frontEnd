import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import FetchReview from "../components/FetchReview"
import Client from "../services/api"

const Home = () => {
  const [reviews, setReviews] = useState([])
  const userId = localStorage.getItem("userId")

  const getReviews = async () => {
    try {
      const res = await Client.get(`programs/reviews`)
      setReviews(res.data)
    } catch (error) {
      console.error("Failed to fetch reviews:", error)
    }
  }

  useEffect(() => {
    getReviews()
  }, [])

  return (
    <div className="homepage">
      <div className="AddReveiw">
        <Link to={`/reviews/${userId}`}>+</Link>
      </div>
      <div className="scrollable-container">
        <div className="reviewForm">
          {reviews.map((review) => (
            <FetchReview
              key={review._id}
              id={review._id}
              content={review.content}
              program={review.program}
              rating={review.rating}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
