import { Link } from "react-router-dom"

const MyProgramCard = ({ id, name, onDelete, onEdit, isAdmin, img }) => {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this program?")) {
      onDelete(id)
    }
  }

  return (
    <div className="card">
     
        <div className="cardImg" id={id}>
          <img src={img} className="cardImg" />
        </div>
        <div className="programName">{name}</div>
     =
    </div>
  )
}

export default MyProgramCard
