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
      <h2>Name : {programDetails.name}</h2>
      <div>
        <p>Description : {programDetails.description}</p>
      </div>
      <div>
        <h3>Start: {programDetails.start}</h3>
      </div>
      <div>
        <h3>End: {programDetails.end}</h3>
      </div>
      <div>
        <h3>Period: {programDetails.period}</h3>
      </div>
      <div>
        <h3>Price: {programDetails.price}</h3>
      </div>
      <div>
        <h3>Gender: {programDetails.gender}</h3>
      </div>
      <div>
        <h3>Location: {programDetails.location}</h3>
      </div>
      <div>
        <h3>Block: {programDetails.block}</h3>
      </div>
      <div>
        <h3>Bulding: {programDetails.bulding}</h3>
      </div>
      <div>
        <h3>Line: {programDetails.line}</h3>
      </div>
    </div>
  ) : null
}

export default ProgramDetails
