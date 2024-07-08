import axios from "axios"
import { useEffect, useState } from "react"

const Home = () => {
  const [reviews, setReviews] = useState([])

  const getReviews = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/home/${programId}/reviews/`)
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
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.text}</p>
            <p>Rating: {review.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
