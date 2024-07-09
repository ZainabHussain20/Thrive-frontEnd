import { Link } from 'react-router-dom'

const ProgramCard = ({ id, name, onDelete, onEdit, isAdmin }) => {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this program?')) {
      onDelete(id)
    }
  }

  return (
    <div className="card">
      <h3>{name}</h3>
      <Link to={`/program/${id}`}>Course Details</Link>
      {isAdmin && (
        <>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={() => onEdit(id)}>Edit</button>
        </>
      )}
    </div>
  )
}

export default ProgramCard
