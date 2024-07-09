import React from "react"
const profileCard = ({ profile }) => {
  const { userName, birthDate, nationality, gender, email, phoneNumber } =
    profile

  return (
    <div className="profileCard">
      <h2>My Profile</h2>
      <p>userName: {userName}</p>

      <p>birthDate: {birthDate}</p>

      <p>nationality: {nationality}</p>

      <p>gender: {gender}</p>

      <p>email: {email}</p>

      <p>phoneNumber: {phoneNumber}</p>
    </div>
  )
}

export default profileCard
