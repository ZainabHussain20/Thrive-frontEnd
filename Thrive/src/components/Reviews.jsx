import { useState, useEffect } from "react"
import Client from "../services/api"

const Reviews = () => {
  const initialState = { content: "", rating: 0, program: "" }
  const [formValues, setFormValues] = useState(initialState)
  const [userId, setUserId] = useState("")
  const [programs, setPrograms] = useState([])

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId")
    if (storedUserId) setUserId(storedUserId)

    const fetchPrograms = async () => {
      try {
        const res = await Client.get("/programs")
        setPrograms(res.data)
      } catch (error) {
        console.error("Failed to fetch programs:", error)
      }
    }

    fetchPrograms()
  }, [])

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleRatingChange = (e) => {
    setFormValues({ ...formValues, rating: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.post(`/programs/reviews/${userId}`, formValues)
    setFormValues(initialState)
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
          <input
            type="number"
            name="rating"
            value={formValues.rating}
            onChange={handleRatingChange}
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
