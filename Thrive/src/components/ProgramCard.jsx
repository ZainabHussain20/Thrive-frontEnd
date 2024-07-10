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
        <div className="programName">
          <div> {name}</div>
          <div>
            {isAdmin && (
              <>
                <button onClick={handleDelete} className="AdminButton">
                  Delete
                </button>
                <button onClick={() => onEdit(id)} className="AdminButton">
                  Edit
                </button>
              </>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProgramCard
