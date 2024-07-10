import { Link } from "react-router-dom"

const ProgramCard = ({ id, name, onDelete, onEdit, isAdmin, img }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this program?")) {
      onDelete(id)
    }
  }

  return (
    <div className="card">
      <Link to={`/program/${id}`}>
        <div className="cardImg">
          <img src={img} className="cardImg" />
        </div>
        <div className="programName">{name}</div>
      </Link>
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
