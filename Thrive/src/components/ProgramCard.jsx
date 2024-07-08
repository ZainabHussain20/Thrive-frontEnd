import { Link } from 'react-router-dom'

const ProgramCard = ({ id, name }) => {
  return (
    <Link to={`/programs/${id}`}>
      <div>
        <h3>{name}</h3>
        <p>Course Details</p>
      </div>
    </Link>
  )
}

export default ProgramCard
