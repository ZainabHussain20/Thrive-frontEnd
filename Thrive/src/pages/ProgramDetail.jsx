import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

const programDetails = () => {
  const { programId } = useParams()
  const [program, setProgram] = useState(null)

  useEffect(() => {
    const programsDetails = async () => {
      try {
        const response = await axios.get(`/programs/${programId}`)
        setProgram(response.data)
      } catch (error) {
        console.error("Error fetching program details:", error)
      }
    }

    programsDetails()
  }, [programId])

  if (!program) {
    return <div>Loading ...</div>
  }
  return (
    <div className="programsDetails">
      <h2>{program.name}</h2>
      <p>
        <strong>Start:</strong> {new Date(program.start).toLocaleDateString()}
      </p>
      <p>
        <strong>End:</strong> {new Date(program.end).toLocaleDateString()}
      </p>
      <p>
        <strong>Time:</strong> {program.time.join(", ")}
      </p>
      <p>
        <strong>Period:</strong> {program.period.join(", ")}
      </p>
      {program.description && (
        <p>
          <strong>Description:</strong> {program.description}
        </p>
      )}
      {program.limit && (
        <p>
          <strong>Limit:</strong> {program.limit}
        </p>
      )}
      {program.gender && (
        <p>
          <strong>Gender:</strong> {program.gender}
        </p>
      )}
      {program.price && (
        <p>
          <strong>Price:</strong> ${program.price}
        </p>
      )}
      {program.location && (
        <p>
          <strong>Location:</strong> {program.location}
        </p>
      )}
      {program.block && (
        <p>
          <strong>Block:</strong> {program.block}
        </p>
      )}
      {program.building && (
        <p>
          <strong>Building:</strong> {program.building}
        </p>
      )}
      {program.line && (
        <p>
          <strong>Line:</strong> {program.line}
        </p>
      )}
    </div>
  )
}
export default programDetails
