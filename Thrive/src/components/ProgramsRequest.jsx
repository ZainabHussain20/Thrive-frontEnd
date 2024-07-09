import React from "react"

const ProgramRequest = ({ request }) => {
  return (
    <div className="request-item">
      <p>Program ID: {request.programId}</p>
      <p>Status: {request.status}</p>
    </div>
  )
}

const ProgramRequests = ({ userRequests }) => {
  return (
    <div className="requests-container">
      {userRequests.map((request, index) => (
        <ProgramRequest key={index} request={request} />
      ))}
    </div>
  )
}

export default ProgramRequests
