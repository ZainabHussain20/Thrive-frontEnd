import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom" // Import useNavigate
import Client from "../services/api"
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
  const { programId } = useParams()
  const navigate = useNavigate()

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

      const newProgram = await Client.post(
        `/registration/${userId}/${programId}`,
        newRequest
      )
      setRequests((prevRequests) => [...prevRequests, newProgram])
      setStatus({
        status: "pending",
      })

      navigate(`/MyRequest/${userId}`)
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
            <img src={daily} className="icon" alt="daily" />
            {new Date(programDetails.start).toLocaleDateString()}
            <img src={daily} className="icon" alt="daily" />
            {new Date(programDetails.end).toLocaleDateString()}
          </div>

          <div>
            <div>
              <img src={daily} className="icon" alt="daily" />
              {programDetails.period}
            </div>
          </div>
          <div>
            <img src={brand} className="icon" alt="brand" />
            {programDetails.price}
          </div>
          <div>
            <div>
              <img src={leadership} className="icon" alt="leadership" />
              {programDetails.gender}
            </div>
          </div>
          <div className="Location">
            <div>
              <div>
                <img src={marker} alt="marker" />
              </div>
              <div> {programDetails.location}</div>
            </div>
            <div>
              <div className="Loc">
                <img src={road} alt="road" />
              </div>
              <div> {programDetails.block}</div>
            </div>
            <div>
              <div>
                <img src={building} alt="building" />
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
