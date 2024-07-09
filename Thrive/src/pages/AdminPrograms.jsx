import ProgramCard from '../components/ProgramCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../services/api'

const AdminPrograms = ({ user }) => {
  const [programs, setPrograms] = useState([])

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

  const handleDeleteProgram = async (programId) => {
    try {
      await axios.delete(`${BASE_URL}/programs/delete/${programId}`)
      setPrograms(programs.filter((program) => program._id !== programId))
    } catch (err) {
      console.log('Error deleting program:', err)
    }
  }

  const handleEditProgram = (programId) => {
    console.log('Edit program with ID:', programId)
  }

  const isAdmin = user && user.type === 'Admin'

  return (
    <div className="child-content">
      {programs.length > 0 ? (
        programs.map((program) => (
          <ProgramCard
            key={program._id}
            id={program._id}
            name={program.name}
            onDelete={handleDeleteProgram}
            onEdit={handleEditProgram}
            isAdmin={isAdmin}
          />
        ))
      ) : (
        <h4>No programs available!</h4>
      )}
    </div>
  )
}

export default AdminPrograms
