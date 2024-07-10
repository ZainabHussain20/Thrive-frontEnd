import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Client from "../services/api"
import marker from "../assets/marker.svg"
import building from "../assets/building.svg"
import road from "../assets/road.svg"
import brand from "../assets/brand.svg"
import daily from "../assets/daily.svg"
import leadership from "../assets/leadership.svg"
import clock from "../assets/clock.svg"

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
          <h2 className="programNameDetail">{programDetails.name}</h2>
          <div>
            <p>{programDetails.description}</p>
          </div>
          <div className="locationMap">
            <iframe
              src={programDetails.location}
              width="600"
              height="200"
              style={{ border: "1px solid gray", borderRadius: "4px" }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
          <button
            onClick={handleRegistration}
            className="programNameDetailButton"
          >
            Register
          </button>
        </div>

        <div className="info2 container">
          <div className="dateFlex">
            <div>
              <img src={daily} className="icon" alt="daily" />
              start: {new Date(programDetails.start).toLocaleDateString()}
            </div>
            <div>
              <img src={daily} className="icon" alt="daily" />
              end : {new Date(programDetails.end).toLocaleDateString()}
            </div>
          </div>
          <br />
          <br />
          <div>
            <img src={clock} className="icon" alt="daily" />
            {programDetails.time}
          </div>
          <br />
          <div>
            <img src={daily} className="icon" alt="daily" />
            {programDetails.period}
          </div>
          <br />
          <div>
            <img src={brand} className="icon" alt="brand" />
            {programDetails.price} BHD
          </div>
          <br />
          <div>
            <img src={leadership} className="icon" alt="leadership" />
            {programDetails.gender}
          </div>
          <br />

          <div className="Location">
            <div>
              <div className="LocationAdress">
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
