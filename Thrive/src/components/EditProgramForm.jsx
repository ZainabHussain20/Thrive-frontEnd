import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../services/api'

const EditProgramForm = ({ programId, onClose, onUpdate }) => {
  const [program, setProgram] = useState({
    description: '',
    gender: '',
    price: ''
  })

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/programs/${programId}`)
        setProgram(res.data)
      } catch (err) {
        console.log('Error fetching program:', err)
      }
    }
    fetchProgram()
  }, [programId])

  const handleChange = (e) => {
    const { name, value } = e.target
    setProgram((prevProgram) => ({
      ...prevProgram,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.put(
        `${BASE_URL}/programs/update/${programId}`,
        program
      )
      onUpdate(res.data)
      onClose()
    } catch (err) {
      console.log('Error updating program:', err)
    }
  }

  return (
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
        <label>Gender:</label>
        <input
          type="text"
          name="gender"
          value={program.gender}
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
  )
}

export default EditProgramForm
