import React, { useState } from "react"
import Client from "../services/api"

const AddProgram = () => {
  const initialState = {
    name: "",
    start: "",
    end: "",
    time: "",
    period: [],
    description: "",
    price: 0,
    location: "",
    block: "",
    building: "",
    img: "",
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    const { name, value, type, options } = e.target

    if (type === "select-multiple") {
      const selectedOptions = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value)
      setFormValues({ ...formValues, [name]: selectedOptions })
    } else {
      setFormValues({ ...formValues, [name]: value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await Client.post("/programs/addProgram", formValues)
      alert("Program added successfully!")
      setFormValues(initialState)
    } catch (error) {
      console.error("Failed to add program:", error)
      alert("Failed to add program. Please try again.")
    }
  }

  return (
    <div className="forms">
      <h2>Add a New Program</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Start Date</label>
          <input
            type="date"
            name="start"
            value={formValues.start}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>End Date</label>
          <input
            type="date"
            name="end"
            value={formValues.end}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={formValues.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formValues.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Block</label>
          <input
            type="text"
            name="block"
            value={formValues.block}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Building</label>
          <input
            type="text"
            name="building"
            value={formValues.building}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>img</label>
          <input
            type="text"
            name="img"
            value={formValues.img}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Time</label>
          <select
            name="time"
            value={formValues.time}
            onChange={handleChange}
            required
          >
            <option value="">Select time</option>
            <option value="08:00 - 16:00">08:00 - 16:00</option>
            <option value="09:00 - 17:00">09:00 - 17:00</option>
            <option value="10:00 - 18:00">10:00 - 18:00</option>
          </select>
        </div>
        <div>
          <label>Period</label>
          <select
            name="period"
            value={formValues.period}
            onChange={handleChange}
            multiple
            required
          >
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </select>
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={formValues.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Program</button>
      </form>
    </div>
  )
}

export default AddProgram
