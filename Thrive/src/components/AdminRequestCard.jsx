import React from "react"
import { Link } from "react-router-dom"

const AdminRequestCard = ({ id, user }) => {
  return (
    <Link to={`/registration/${id}`}>
      <div className="admin-request-card" id={id}>
        Program Registration
      </div>
    </Link>
  )
}

export default AdminRequestCard
