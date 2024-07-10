import { useState, useEffect } from "react"
import Client from "../services/api"

const EditProgramForm = ({ programId, onClose, onUpdate }) => {
  const [program, setProgram] = useState({
    description: "",
    price: "",
  })

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const res = await Client.get(`/programs/${programId}`)
        setProgram(res.data)
      } catch (err) {
        console.log("Error fetching program:", err)
      }
    }
    fetchProgram()
  }, [programId])

  const handleChange = (e) => {
    const { name, value } = e.target
    setProgram((prevProgram) => ({
      ...prevProgram,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await Client.put(`/programs/update/${programId}`, program)
      onUpdate(res.data)
      onClose()
    } catch (err) {
      console.log("Error updating program:", err)
    }
  }

  return (
    <div className="forms">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={program.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={program.price}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  )
}

export default EditProgramForm
