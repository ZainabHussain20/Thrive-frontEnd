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
  const [conflict, setConflict] = useState(false)
  const [formValues, setFormValues] = useState(initialState)

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await Client.get(
          `/registration/${registrationId}/show`
        )
        const data = response.data
        setFormValues({
          programName: data.program.name,
          program: data.program._id,

          // program: data.program._id,
          user: data.user._id,
          userName: data.user.firstName + " " + data.user.lastName,
          // user: data.user._id ,
          state: data.state,
        })
        console.log(data)
        const conflictProgram = data.user.userprogram.some((program) => {
          for (let index = 0; index < data.program.period.length; index++) {
            const element = data.program.period[index]
            if (program.period.includes(element)) {
              return true
            }
          }
        })
        setConflict(conflictProgram)
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
            value={formValues.userName}
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
            value={formValues.programName}
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
        <div className="input-wrapper">
          <label htmlFor="conflict" className="label">
            Conflict
          </label>
          <label htmlFor="conflict" className="label">
            {conflict ? "conflict" : "No conflict"}
          </label>
        </div>
        <button>Save State</button>
      </form>
    </div>
  )
}

export default AcceptRequest
