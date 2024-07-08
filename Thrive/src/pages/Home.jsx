import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../services/api"
import Review from "../components/Reviews"

const Home = () => {
  const [reviews, setReviews] = useState([])
  // let { programId } = useParams()

  const getReviews = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/programs/reviews`)
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
          <Review key={review.id} review={review} />
        ))}
      </ul>
    </div>
  )
}

export default Home
