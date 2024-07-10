import { Link } from "react-router-dom"

const MyProgramCard = ({ id, name }) => {

  return (
    <div className="card">
          <Link to={`/registration/${id}`}>

      <h3>{name}</h3>
      </Link>
    </div>
  )
}

export default MyProgramCard
