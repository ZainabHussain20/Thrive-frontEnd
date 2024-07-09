import ProgramCard from '../components/ProgramCard'
// import EditProgramForm from '../components/EditProgramForm'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../services/api'

const AdminPrograms = ({ user }) => {
  const [programs, setPrograms] = useState([])
  const [editingProgram, setEditingProgram] = useState(null)

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
    setEditingProgram(programId)
  }

  const handleCloseEditForm = () => {
    setEditingProgram(null)
  }

  const handleUpdateProgram = (updatedProgram) => {
    setPrograms((prevPrograms) =>
      prevPrograms.map((program) =>
        program._id === updatedProgram._id ? updatedProgram : program
      )
    )
  }

  const isAdmin = user && user.type === 'Admin'

  return (
    <div className="child-content">
      {editingProgram ? (
        <EditProgramForm
          programId={editingProgram}
          onClose={handleCloseEditForm}
          onUpdate={handleUpdateProgram}
        />
      ) : programs.length > 0 ? (
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
