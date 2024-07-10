import React, { useState } from "react"
import Client from "../services/api"

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("")
  const [expirationDate, setExpirationDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [nameOnCard, setNameOnCard] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await Client.post(`/registration/receipt`)
      console.log(response.data)
    } catch (error) {
      console.error("Error submitting payment:", error)
    }
  }

  return (
    <div className="forms">
      Card Detail:
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="card-number"
          placeholder="Enter card number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
        <input
          type="text"
          id="expiration-date"
          placeholder="MM/YY"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
          required
        />

        <input
          type="text"
          id="cvv"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        />

        <input
          type="text"
          id="name-on-card"
          placeholder="Enter name on card"
          value={nameOnCard}
          onChange={(e) => setNameOnCard(e.target.value)}
          required
        />
        <button onClick={handleSubmit}>Pay</button>
      </form>
    </div>
  )
}

export default Payment
