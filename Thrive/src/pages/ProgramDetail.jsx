import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Client from "../services/api"
import axios from "axios"
import { BASE_URL } from "../services/api"
import gender from "../assets/gender.svg"
import marker from "../assets/marker.svg"
import building from "../assets/building.svg"
import road from "../assets/road.svg"
import brand from "../assets/brand.svg"
import daily from "../assets/daily.svg"
import leadership from "../assets/leadership.svg"

const ProgramDetails = () => {
  const [programDetails, setProgramDetails] = useState({})
  const [userRequests, setUserRequests] = useState([])
  const [requests, setRequests] = useState([])
  const [status, setStatus] = useState([])

  let { programId } = useParams()

  useEffect(() => {
    const getProgramDetails = async () => {
      try {
        const response = await Client.get(`/programs/${programId}`)
        setProgramDetails(response.data)
      } catch (error) {
        console.error("Error fetching program details:", error)
      }
    }

    if (programId) {
      getProgramDetails()
    }
  }, [programId])

  const handleRegistration = async () => {
    try {
      const newRequest = {
        programId: programId,
        status: "pending",
      }

      setUserRequests([...userRequests, newRequest])

      const userId = localStorage.getItem("userId")
      const newProgram = await axios.post(
        `${BASE_URL}/registration/${userId}/${programId}`,
        newRequest
      )
      setRequests((prevRequests) => [...prevRequests, newProgram])
      setStatus({
        status: "pending",
      })
    } catch (error) {
      console.error("Error registering for program:", error)
    }
  }

  if (!programDetails) {
    return null
  }

  return (
    <div>
      <div className="programDetails">
        <div className="info1 ">
          <h2>{programDetails.name}</h2>
          <div>
            <p>{programDetails.description}</p>
          </div>
          <button onClick={handleRegistration}>Register</button>
        </div>

        <div className="info2 container">
          <div>
            <img src={daily} className="icon" />
            {new Date(programDetails.start).toLocaleDateString()}
            <img src={daily} className="icon" />
            {new Date(programDetails.end).toLocaleDateString()}
          </div>

          <div>
            <div>
              <img src={daily} className="icon" />
              {programDetails.period}
            </div>
          </div>
          <div>
            <img src={brand} className="icon" />
            {programDetails.price}
          </div>
          <div>
            <div>
              <img src={leadership} className="icon" />
              {programDetails.gender}
            </div>
          </div>
          <div className="Location">
            <div>
              <div>
                <img src={marker} />
              </div>
              <div> {programDetails.location}</div>
            </div>
            <div>
              <div className="Loc">
                <img src={road} />
              </div>
              <div> {programDetails.block}</div>
            </div>
            <div>
              <div>
                <img src={building} />
              </div>
              <div>{programDetails.building}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramDetails
