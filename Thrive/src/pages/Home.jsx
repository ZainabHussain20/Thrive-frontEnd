import axios from "axios"
import { useEffect, useState } from "react"
import FetchReview from "../components/FetchReview"
import Client from "../services/api"

const Home = () => {
  const [reviews, setReviews] = useState([])

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
      <h1>Latest Reviews</h1>
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
  )
}

export default Home
