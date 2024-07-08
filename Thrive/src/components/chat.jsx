import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const response = await axios.post('http://localhost:3001/chat/chatbot', { message: input });
    const botResponse = response.data.response;

    setMessages([...messages, { text: input, sender: 'user' }, { text: botResponse.text, sender: 'bot', buttons: botResponse.buttons }]);
    setInput('');
  };

  const handleButtonClick = async (buttonText) => {
    const response = await axios.post('http://localhost:3001/chat/chatbot', { message: buttonText });
    const botResponse = response.data.response;

    setMessages([...messages, { text: buttonText, sender: 'user' }, { text: botResponse.text, sender: 'bot', buttons: botResponse.buttons }]);
  };

  return (
    <div>
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <p>{message.text}</p>
            {message.buttons && message.buttons.map((button, idx) => (
              <button key={idx} onClick={() => handleButtonClick(button)}>{button}</button>
            ))}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
