import React from "react"
import { useState, useEffect } from "react"
import Client from "../services/api"

const profileCard = ({ profile }) => {
  const { userName, birthDate, nationality, gender, email, phoneNumber } =
    profile

  const [profils, setProfils] = useState()
  useEffect(() => {
    fetch("/:userId").then((response) => {
      setProfils(response.json())
    })
  }, [])
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
