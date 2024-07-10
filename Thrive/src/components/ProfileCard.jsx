import "../App.css"
import { useState, useEffect } from "react"
import Client from "../services/api"
import { useParams, useNavigate } from "react-router-dom"

const ProfileCard = () => {
  const { userId } = useParams()
  let navigate = useNavigate()
  const initialState = {
    userName: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    cpr: "",
    email: "",
    gender: "",
    phoneNumber: "",
  }

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await Client.get(`/profile/${userId}`)
        const user = response.data
        const formattedBirthDate = user.birthDate
          ? new Date(user.birthDate).toISOString().split("T")[0]
          : ""
        setFormValues({
          userName: user.userName,
          firstName: user.firstName,
          lastName: user.lastName,
          birthDate: formattedBirthDate,
          cpr: user.cpr,
          email: user.email,
          gender: user.gender,
          phoneNumber: user.phoneNumber,
        })
      } catch (error) {
        console.error("Error fetching user details:", error)
      }
    }
    fetchUserDetails()
  }, [userId])
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const updatedUser = { ...formValues }
      await Client.put(`/profile/${userId}/edit`, updatedUser)
      setFormValues(initialState)
    } catch (error) {
      console.error("Error updating user:", error)
    }
  }

  return (
    <div className="forms">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="userName" className="label">
            User Name
          </label>
          <input
            // onChange={handleChange}
            name="userName"
            type="text"
            placeholder="User Name"
            value={formValues.userName}
            required
            className="inputField"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstName" className="label">
            First Name
          </label>
          <input
            onChange={handleChange}
            name="firstName"
            type="text"
            placeholder="First Name"
            value={formValues.firstName}
            className="inputField"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastName" className="label">
            Last Name
          </label>
          <input
            onChange={handleChange}
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={formValues.lastName}
            className="inputField"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="birthDate" className="label">
            Birth Date
          </label>
          <input
            readOnly
            name="birthDate"
            type="date"
            placeholder="Birth Date"
            value={formValues.birthDate}
            className="inputField"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="cpr" className="label">
            CPR
          </label>
          <input
            readOnly
            name="cpr"
            type="text"
            placeholder="CPR"
            value={formValues.cpr}
            required
            className="inputField"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email"
            value={formValues.email}
            className="inputField"
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="phoneNumber" className="label">
            Phone Number
          </label>
          <input
            onChange={handleChange}
            name="phoneNumber"
            type="tel"
            placeholder="Phone Number"
            value={formValues.phoneNumber}
            className="inputField"
          />
        </div>
        <button className="authButton">Save Profile</button>
      </form>
    </div>
  )
}

export default ProfileCard
