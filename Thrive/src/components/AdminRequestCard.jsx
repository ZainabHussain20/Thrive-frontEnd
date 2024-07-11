import React from "react"
import { Link } from "react-router-dom"

const AdminRequestCard = ({ id,  userName, programName }) => {
  return (
    <Link to={`/registration/${id}`}>
      <div className="admin-request-card" id={id}>
      <p>User: {userName} - program: {programName}</p>
      </div>
    </Link>
  )
}

export default AdminRequestCard
