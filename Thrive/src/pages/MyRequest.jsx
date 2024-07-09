import React from 'react'
import ProgramRequest from '../components/ProgramsRequest'

const MyRequests = () => {
  const userRequests = []

  return (
    <div>
      <h1>My Requests</h1>
      <ProgramRequest userRequests={userRequests} />
    </div>
  )
}

export default MyRequests
