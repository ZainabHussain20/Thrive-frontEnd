import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import FetchReview from "../components/FetchReview"
import Client from "../services/api"
import Lottie from "lottie-react"
import animationData from "../assets/Animation.json"
import Chatbot from "../components/chat"

const Home = ({ user }) => {
  const [reviews, setReviews] = useState([])
  const userId = localStorage.getItem("userId")
  const navigate = useNavigate()

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

  const handleLottieClick = () => {
    navigate("/chat")
  }

  return (
    <div className="home">
      <div>
        <Chatbot />
      </div>
      <div className="scrollable-container">
        {user && user.type !== "Admin" && (
          <div className="AddReveiw">
            <Link to={`/reviews/${userId}`}>+</Link>
          </div>
        )}
        <div className="reviewForm">
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
      {/* <div onClick={handleLottieClick} style={{ cursor: "pointer" }}>
          <Lottie
            animationData={animationData}
            style={{ width: 300, height: 300 }}
          />
        </div> */}
    </div>
  )
}

export default Home
