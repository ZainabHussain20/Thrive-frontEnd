import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
import { motion, AnimatePresence } from "framer-motion"
import Lottie from "lottie-react"
import animationData from "../assets/Animation.json"
import StarRating from "./StarRating"
import "../Chatbot.css"

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showRating, setShowRating] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    // Scroll chat to bottom on messages change
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    const response = await axios.post("http://localhost:3001/chat/chatbot", {
      message: input,
    });
    const botResponse = response.data.response;

    setMessages([
      ...messages,
      { text: input, sender: "user" },
      { text: botResponse.text, sender: "bot", buttons: botResponse.buttons },
    ]);

    if (botResponse.text === "Please take a moment to review your chat experience.") {
      setShowRating(true);
    }

    setInput("");
  };

  const handleButtonClick = async (buttonText) => {
    if (buttonText === "End Conversation") {
      window.alert("Please take a moment to review your chat experience.");
      setShowRating(true);
    }

    const response = await axios.post("http://localhost:3001/chat/chatbot", {
      message: buttonText,
    });
    const botResponse = response.data.response;

    setMessages([
      ...messages,
      { text: buttonText, sender: "user" },
      { text: botResponse.text, sender: "bot", buttons: botResponse.buttons },
    ]);

    if (botResponse.text === "Please take a moment to review your chat experience.") {
      setShowRating(true);
    }
  };

  const handleRatingSubmit = (selectedRating) => {
    
    // console.log("User rated:", selectedRating);

    // Reset states
    setShowRating(false);
    setMessages([
      ...messages,
      { text: `User rated the chat experience with ${selectedRating} stars.`, sender: "user" }
    ]);
  };

  return (
    <div>
    
    
    <div className="chatbot-container">
     

      <div className="chat-window" ref={chatRef}>
        <AnimatePresence>
          {messages.map((message, index) => (
            <div className={`message ${message.sender}`} key={index}>
              <p dangerouslySetInnerHTML={{ __html: message.text }}></p>
              {message.buttons &&
                message.buttons.map((button, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleButtonClick(button)}
                  >
                    {button}
                  </button>
                ))}
            </div>
          ))}
        </AnimatePresence>
      </div>

      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>

      {/* Star rating component */}
      {showRating && (
        <div className="star-rating-container">
          <StarRating onRatingSubmit={handleRatingSubmit} />
        </div>
      )}
    </div>
    </div>
  )
}

export default Chatbot;
