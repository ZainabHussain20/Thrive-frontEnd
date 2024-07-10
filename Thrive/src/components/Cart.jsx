import React, { useEffect, useState } from "react"
import Client from "../services/api"
import { BASE_URL } from "../services/api"
import axios from "axios"

const Cart = () => {
  const [cart, setCart] = useState({ totalPrice: 0, programs: [] })
  const [userId, setUserId] = useState("")

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId")
    if (storedUserId) setUserId(storedUserId)

    const fetchCart = async () => {
      try {
        const res = await Client.get(`registration/${userId}/cart/`)

        const programs = await Promise.all(
          res.data.program.map(async (programId) => {
            const programRes = await Client.get(`programs/${programId}`)
            return programRes.data
          })
        )

        setCart({
          programs,
          totalPrice: res.data.totalPrice,
        })
      } catch (error) {
        console.error("Error fetching cart:", error)
        setCart(null)
      }
    }

    if (userId) {
      fetchCart()
    }
  }, [userId])

<<<<<<< HEAD
  if (!cart) {
    return (
      <div className="forms">
        <p>No programs found in the cart.</p>
      </div>
    )
=======
  const handlePayNow = () => {
    try {
      const payNow = axios.push(`${BASE_URL}/Payment`, payNow)
    } catch (error) {
      console.error("Error fetching payment details:", error)
    }
  }

  if (!cart || !cart.programs || cart.programs.length === 0) {
    return <p>No programs found in the cart.</p>
>>>>>>> 8bcf8d7 (pull the cart work)
  }

  return (
    <div>
      <h2>Your Cart Details</h2>
      <p>Total Price: ${cart.totalPrice}</p>
      <h3>Programs in Cart:</h3>
      <ul>
        {cart.programs.map((program) => (
          <li key={program._id}>
            {program.name} - ${program.price}
          </li>
        ))}
      </ul>
      <button onClick={handlePayNow}>Pay Now</button>
    </div>
  )
}

export default Cart
