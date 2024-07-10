import "../App.css"
import { useState, useEffect } from "react"
import Client from "../services/api"
import { useParams } from "react-router-dom"

const AcceptRequest = () => {
  const { registrationId } = useParams()
  const initialState = {
    program: "",
    user: "",
    state: "",
  }

  const [formValues, setFormValues] = useState(initialState)

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await Client.get(
          `/registration/${registrationId}/show`
        )
        const user = response.data

        setFormValues({
          program: user.program,
          user: user.user,
          state: user.state,
        })
      } catch (error) {
        console.error("Error fetching user details:", error)
      }
    }
    fetchUserDetails()
  }, [registrationId])

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const updatedUser = { ...formValues }
      await Client.put(`/registration/${registrationId}`, updatedUser)
      setFormValues(initialState)
    } catch (error) {
      console.error("Error updating user:", error)
    }
  }

  return (
    <div className="forms">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="user" className="label">
            User Name
          </label>
          <input
            name="user"
            type="text"
            placeholder="User Name"
            value={formValues.user}
            readOnly
            className="inputField"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="program" className="label">
            Program
          </label>
          <input
            name="program"
            type="text"
            placeholder="Program"
            value={formValues.program}
            readOnly
            className="inputField"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="state" className="label">
            State
          </label>
          <input
            name="state"
            type="text"
            placeholder="State"
            value={formValues.state}
            onChange={handleChange}
            className="inputField"
          />
        </div>
        <button className="authButton">Save Profile</button>
      </form>
    </div>
  )
}

export default AcceptRequest
