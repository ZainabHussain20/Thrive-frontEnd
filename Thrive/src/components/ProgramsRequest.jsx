import React from "react"

const ProgramRequest = ({ request }) => {
  return (
    <div className="request-item">
      <p>Program ID: {request.programId}</p>
      <p>Status: {request.status}</p>
      <h2>My Requests</h2>
      {userRequests.map((request, index) => (
        <ProgramRequest key={index} request={request} />
      ))}
    </div>
  )
}

export default ProgramRequest
