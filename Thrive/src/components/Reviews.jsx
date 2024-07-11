import React, { useState, useEffect } from "react"
import Client from "../services/api"
import Rating from "react-rating-stars-component" // Import the rating component

const Reviews = () => {
  const initialState = { content: "", rating: 0, program: "" }
  const [formValues, setFormValues] = useState(initialState)
  const [userId, setUserId] = useState("")
  const [programs, setPrograms] = useState([])

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId")
    if (storedUserId) {
      setUserId(storedUserId)
      fetchPrograms(storedUserId) // Fetch programs with stored user ID
    }
  }, [userId]) // Add userId as a dependency

  const fetchPrograms = async (userId) => {
    try {
      const res = await Client.get(`/programs/${userId}/userprograms`)
      setPrograms(res.data) // Set programs directly from response data
    } catch (error) {
      console.error("Failed to fetch programs:", error)
    }
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleRatingChange = (newRating) => {
    setFormValues({ ...formValues, rating: newRating })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await Client.post(`/programs/reviews/${userId}`, formValues)
      setFormValues(initialState)
    } catch (error) {
      console.error("Failed to submit review:", error)
    }
  }

  return (
    <div className="forms">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Review</label>
          <input
            type="text"
            name="content"
            value={formValues.content}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Rating</label>
          <Rating
            name="rating"
            count={5}
            value={formValues.rating}
            onChange={handleRatingChange}
            size={24}
            activeColor="#ffd700"
          />
        </div>
        <div>
          <label>Program</label>
          <select
            name="program"
            value={formValues.program}
            onChange={handleChange}
          >
            <option value="">Select a program</option>
            {programs.map((program) => (
              <option key={program._id} value={program._id}>
                {program.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Reviews
