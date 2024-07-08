import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { updatePassword } from "../services/Auth"

const UpdatePassword = () => {
  let navigate = useNavigate()

  const initialState = { userName: "", newPassword: "", confirmPassword: "" }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      userName: formValues.userName,
      newPassword: formValues.newPassword,
    }
    await updatePassword(payload)
    setFormValues(initialState)
    navigate("/Signin")
  }

  return (
    <div className="signin">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="userName" className="label">
            Username
          </label>
          <input
            onChange={handleChange}
            name="userName"
            type="text"
            placeholder="Username"
            value={formValues.userName}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="newPassword" className="label">
            New Password
          </label>
          <input
            onChange={handleChange}
            name="newPassword"
            type="password"
            placeholder="New Password"
            value={formValues.newPassword}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="confirmPassword" className="label">
            Confirm Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formValues.confirmPassword}
            required
          />
        </div>
        <button
          disabled={
            !formValues.userName ||
            !formValues.newPassword ||
            !formValues.confirmPassword ||
            formValues.newPassword !== formValues.confirmPassword
          }
          className="authButton"
        >
          Update Password
        </button>
      </form>
    </div>
  )
}

export default UpdatePassword
