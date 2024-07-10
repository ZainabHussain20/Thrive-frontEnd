import React, { useState } from "react"
import axios from "axios"
import { motion, AnimatePresence } from "framer-motion"
import Lottie from "lottie-react"
import animationData from "../assets/Animation - 1720515153102.json"
import "../Chatbot.css"

const Chatbot = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")

  const sendMessage = async () => {
    const response = await axios.post("http://localhost:3001/chat/chatbot", {
      message: input,
    })
    const botResponse = response.data.response

    setMessages([
      ...messages,
      { text: input, sender: "user" },
      { text: botResponse.text, sender: "bot", buttons: botResponse.buttons },
    ])
    setInput("")
  }

  const handleButtonClick = async (buttonText) => {
    const response = await axios.post("http://localhost:3001/chat/chatbot", {
      message: buttonText,
    })
    const botResponse = response.data.response

    setMessages([
      ...messages,
      { text: buttonText, sender: "user" },
      { text: botResponse.text, sender: "bot", buttons: botResponse.buttons },
    ])
  }
  return (
    <div className="chatbot-container">
      <Lottie
        animationData={animationData}
        style={{ width: 300, height: 300 }}
      />

      <div className="chat-window">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={index}
              className={`message ${message.sender}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <p>{message.text}</p>
              {message.buttons &&
                message.buttons.map((button, idx) => (
                  <button key={idx} onClick={() => handleButtonClick(button)}>
                    {button}
                  </button>
                ))}
            </motion.div>
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
    </div>
  )
}

export default Chatbot
