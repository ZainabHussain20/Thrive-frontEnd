import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { RegisterUser } from "../services/Auth"

const Register = () => {
  let navigate = useNavigate()

  const { type } = useParams()

  const initValues = {
    userName: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    cpr: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    phoneNumber: "",
    type: "user",
  }

  const [formValues, setFormValues] = useState(initValues)
  const [password, setPassword] = useState("")
  const [matchPassword, setMatchPassword] = useState("")
  const [validPass, setValidPass] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
    if (name === "password") {
      setPassword(value)
    } else if (name === "confirmPassword") {
      setMatchPassword(value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== matchPassword) {
      setValidPass(false)
      return
    }
    setValidPass(true)
    await RegisterUser({
      userName: formValues.userName,
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      birthDate: formValues.birthDate,
      cpr: formValues.cpr,
      email: formValues.email,
      password: formValues.password,
      gender: formValues.gender,
      phoneNumber: formValues.phoneNumber,
      type: type,
    })
    setFormValues(initValues)
    navigate("/signin")
  }

  return (
    <div className="forms">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            name="userName"
            type="text"
            placeholder="UserName"
            value={formValues.userName}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            name="firstName"
            type="text"
            placeholder="First Name"
            value={formValues.firstName}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={formValues.lastName}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            name="birthDate"
            type="date"
            placeholder="Birth Date"
            value={formValues.birthDate}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            name="cpr"
            type="text"
            placeholder="CPR"
            value={formValues.cpr}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="example@example.com"
            value={formValues.email}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formValues.confirmPassword}
            required
          />
        </div>

        <div className="input-wrapper">
          <input
            onChange={handleChange}
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formValues.phoneNumber}
            required
          />
        </div>
        <div className="input-wrapper">
          <select
            name="gender"
            value={formValues.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={
            !formValues.userName ||
            !formValues.firstName ||
            !formValues.lastName ||
            !formValues.birthDate ||
            !formValues.cpr ||
            !formValues.email ||
            !formValues.password ||
            !formValues.confirmPassword ||
            !formValues.gender ||
            !formValues.phoneNumber ||
            formValues.password !== formValues.confirmPassword
          }
        >
          Signup
        </button>
      </form>
    </div>
  )
}

export default Register
