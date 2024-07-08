import ProgramCard from '../components/ProgramCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../services/api'

const Programs = () => {
  const [programs, setPrograms] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getPrograms = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/programs`)

        setPrograms(res.data)
      } catch (err) {
        console.log('Error fetching programs:', err)
      }
    }
    getPrograms()
  }, [])

  return (
    <div className="mainCard">
      {programs.length > 0 ? (
        programs.map((program) => (
          <ProgramCard key={program._id} id={program._id} name={program.name} />
        ))
      ) : (
        <h4>No programs available!</h4>
      )}
    </div>
  )
}

export default Programs
