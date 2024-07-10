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

  const handlePayNow = async () => {
    try {
      const paymentDetails = {
        totalPrice: cart.totalPrice,
        programs: cart.programs.map((program) => program._id),
      }
      const res = await axios.post(`${BASE_URL}/payment`, paymentDetails)

      console.log("Payment successful:", res.data)

      window.location.href = "/payment/success"
    } catch (error) {
      console.error("Error making payment:", error)
    }
  }

  if (!cart || !cart.programs || cart.programs.length === 0) {
    return <p>No programs found in the cart.</p>
  }

  return (
    <div>
      <h2 className="cart-containe">Your Cart Details</h2>
      <h3 className="cartprogram">Programs in Cart:</h3>
      <ul className="cartprogram">
        {cart.programs.map((program) => (
          <li key={program._id}>
            {program.name} - ${program.price}
          </li>
        ))}
      </ul>
      <p className="totalprice">Total Price: ${cart.totalPrice}</p>
      <button onClick={handlePayNow}>Pay Now</button>
    </div>
  )
}

export default Cart
