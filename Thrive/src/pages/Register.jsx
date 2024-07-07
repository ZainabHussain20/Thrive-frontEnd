import { useState } from "react"
import { RegisterUser } from "../services/Auth"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

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
    type: "",
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
    <div className="signin">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="userName" className="register">
            Username
          </label>
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
          <label htmlFor="firstName" className="register">
            First Name
          </label>
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
          <label htmlFor="lastName" className="register">
            Last Name
          </label>
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
          <label htmlFor="birthDate" className="register">
            BirthDate
          </label>
          <input
            onChange={handleChange}
            name="birthDate"
            type="date"
            placeholder="date"
            value={formValues.birthDate}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="cpr" className="regisre">
            cpr
          </label>
          <input
            onChange={handleChange}
            name="cpr"
            type="text"
            placeholder="cpr"
            value={formValues.cpr}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email" className="register">
            Email
          </label>
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
          <label htmlFor="password" className="register">
            Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="password"
            value={formValues.password}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="confirmPassword" className="register">
            Confirm Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            placeholder="confirmPassword"
            value={formValues.confirmPassword}
            required
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="gender" className="register">
            Gender
          </label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="input-wrapper">
          <label htmlFor="phoneNumber" className="register">
            phone Number
          </label>
          <input
            onChange={handleChange}
            type="tel"
            name="phoneNumber"
            placeholder="phoneNumber"
            value={formValues.confirmPassword}
            required
          />
        </div>

        <button
          type="submit"
          disabled={
            !formValues.username ||
            !formValues.firstName ||
            !formValues.lastName ||
            !formValues.email ||
            !formValues.password ||
            !formValues.confirmPassword ||
            formValues.password !== formValues.confirmPassword
          }
          className="Button"
        >
          Signup
        </button>
      </form>
    </div>
  )
}

export default Register
