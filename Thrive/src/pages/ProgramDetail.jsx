import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Client from "../services/api"

const ProgramDetails = () => {
  const [programDetails, setProgramDetails] = useState({})
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

  return programDetails ? (
    <div className="program-content">
      <h2>name : {programDetails.name}</h2>
      <div>
        <p>description : {programDetails.description}</p>
      </div>
      <div>
        <h3>Limit: {programDetails.limit}</h3>
      </div>
    </div>
  ) : null
}

export default ProgramDetails
