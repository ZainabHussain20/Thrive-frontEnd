import React from "react"
import ProgramRequests from "./ProgramRequests"

const MyRequests = () => {
  const userRequests = []

  return (
    <div>
      <h1>My Requests</h1>
      <ProgramRequests userRequests={userRequests} />
    </div>
  )
}

export default MyRequests
