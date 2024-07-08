import React from "react"
const profileCard = ({ profile }) => {
  const { userName, cpr, nationality, gender, email, phoneNumber } = profile

  return (
    <div className="profileCard">
      <h2>My Profile</h2>
      <p>
        <strong>userName:</strong>
        {userName}
      </p>

      <p>
        <strong>cpr:</strong>
        {cpr}
      </p>

      <p>
        <strong>nationality:</strong>
        {nationality}
      </p>

      <p>
        <strong>gender:</strong>
        {gender}
      </p>

      <p>
        <strong>email:</strong>
        {email}
      </p>

      <p>
        <strong>phoneNumber:</strong>
        {phoneNumber}
      </p>
    </div>
  )
}

export default profileCard
