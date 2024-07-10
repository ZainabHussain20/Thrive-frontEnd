import { useState } from "react"
import { SignInUser } from "../services/Auth"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const SignIn = ({ setUser }) => {
  let navigate = useNavigate()

  const initialState = { userName: "", password: "" }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues(initialState)
    setUser(payload)
    alert("Welcome!")
    navigate("/")
  }

  return (
    <div className="forms">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="userName" className="register">
            Username
          </label>
          <input
            onChange={handleChange}
            name="userName"
            type="text"
            placeholder="please enter your username"
            value={formValues.userName}
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
            placeholder=" please enter your password"
            value={formValues.password}
            required
            className="inputFeild"
          />
        </div>
        <button
          disabled={!formValues.userName || !formValues.password}
          className="Button"
        >
          SignIn
        </button>
      </form>
      <div className="signin-newaccount-container">
        <div>
          <Link to="/updatePassword">
            <div className="font">Forget your password?</div>
          </Link>
          <hr />
          <div className="font">Don't have an accout?</div>
          <Link to="/register">
            <br />
            <div className="color"> Register Now!</div>
          </Link>
        </div>
        <div className="image-container">
          <img
            src="https://images.rawpixel.com/image_png_social_portrait/cHJpdmF0ZS9zdGF0aWMvaW1hZ2VzL3dlYnNpdGUvMjAyMy0wOS9tb3Rhcm83X21pbmltYWxpc3RfaWxsdXN0cmF0aW9uX29mX2NoaWxkX3JlYWRpbmdfaXNvbGF0ZWRfb25fd2hfNzM1MWUxODEtYWI3ZC00MWVlLTlkMjYtODNjNzNjNTliMzlkLnBuZw.png"
            class="corner-image"
            alt="Corner Image"
          ></img>
        </div>
      </div>
    </div>
  )
}

export default SignIn
