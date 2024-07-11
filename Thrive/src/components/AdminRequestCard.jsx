import React from "react"
import { Link } from "react-router-dom"

const AdminRequestCard = ({ id, userName, programName }) => {
  return (
    <div className="AdminCardRe" id={id}>
      <Link to={`/registration/${id}`}>
        <h4>User: {userName}</h4>
        <h4>Program: {programName}</h4>
      </Link>
    </div>
  )
}

export default AdminRequestCard





