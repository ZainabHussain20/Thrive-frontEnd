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
        <h3> {name}</h3>
      </div>
     
    </div>
  )
}

export default MyProgramCard
