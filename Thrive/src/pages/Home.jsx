import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FetchReview from "../components/FetchReview";
import Client from "../services/api";
import Lottie from "lottie-react" 
import animationData from "../assets/Animation.json"
import Chatbot from "../components/chat"


const Home = () => {
  const [reviews, setReviews] = useState([]);
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [showChat, setShowChat] = useState(false);



  const getReviews = async () => {
    try {
      const res = await Client.get(`programs/reviews`);
      setReviews(res.data);
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
    }
  };

  useEffect(() => {
    getReviews();
  }, [])

  const handleLottieClick = () => {
    setShowChat(true)
  }

  return (
    <div className="home">
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

      <div onClick={handleLottieClick} style={{ cursor: "pointer", position: "fixed", bottom: 20, right: 20 }}>
        <Lottie
          animationData={animationData}
          style={{ width: 100, height: 100 }}
        />
      </div>

      {showChat && <Chatbot />}

    </div>
  )
}

export default Home;
