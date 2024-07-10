import React, { useEffect, useState } from "react"
import Client from "../services/api"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const Cart = () => {
  const { userId } = useParams()
  const [cart, setCart] = useState({ totalPrice: 0, programs: [] })
  let navigate = useNavigate()

  useEffect(() => {
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

  const handleDelete = async (programId) => {
    try {
      await Client.delete(`registration/${userId}/cart/${programId}`)
      setCart((prevCart) => ({
        ...prevCart,
        programs: prevCart.programs.filter(
          (program) => program._id !== programId
        ),
        totalPrice:
          prevCart.totalPrice -
          prevCart.programs.find((program) => program._id === programId).price,
      }))
      navigate(`/registration/${userId}/cart`)
    } catch (error) {
      console.error("Error deleting program from cart:", error)
    }
  }

  return (
    <div className="cart">
      <h2 className="cart-container">Your Cart Details</h2>
      {cart.programs.map((program) => (
        <div className="cartCard">
          <div key={program._id} className="cartFlex">
            <div className="cartProgramName">{program.name}</div>
            <div>
              <div className="cartProgramPrice">{program.price} BHD</div>
              <button
                onClick={() => handleDelete(program._id)}
                className="cartProgramDelete"
              >
                X
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="paymentCart">
        <h3>Total Price: {cart.totalPrice} BHD</h3>
        <Link to={`/payment`}>
          <button className="paymentButton">Pay</button>
        </Link>
      </div>
    </div>
  )
}

export default Cart
