import { Link } from "react-router-dom"

const MyProgramCard = ({ id, name, onDelete, onEdit, isAdmin }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this program?")) {
      onDelete(id)
    }
  }

  return (
    <div className="card">
      <h3>{name}</h3>
    </div>
  )
}

export default MyProgramCard
