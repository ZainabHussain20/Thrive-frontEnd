import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/chatbot', {
        message: message
      });
      setResponse(response.data.intent);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here"
      />
      <button onClick={sendMessage}>Send</button>
      <div>
        {response && (
          <p>Bot Response: {response}</p>
        )}
      </div>
    </div>
  )
}

export default Chat;
