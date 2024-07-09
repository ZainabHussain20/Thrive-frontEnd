import React, { useState, useEffect } from "react"
import ProfileCard from "../components/ProfileCard"
import { Link } from "react-router-dom"
import Client from "../services/api"
// import { useParams } from "react-router-dom"

const Profile = () => {
  const [profile, setProfile] = useState({})
  const [userId, setUserId] = useState("")

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId")
    if (storedUserId) setUserId(storedUserId)

    const getprofileDetails = async () => {
      try {
        const response = await Client.get(`/profile/${userId}`)
        setProfile(response.data)
      } catch (error) {
        console.error("Error fetching profile details:", error)
      }
    }

    if (userId) {
      getprofileDetails()
    }
  }, [userId])

  return profile ? (
    <div className="program-content">
      <h2>Name : {profile.userName}</h2>
      <div>
        <h3>FirstName : {profile.firstName}</h3>
      </div>
      <div>
        <h3>LastName: {profile.lastName}</h3>
        <div>
          <h3>Limit: {profile.gender}</h3>
        </div>
        <div>
          <h3>BirthDate: {profile.birthDate}</h3>
        </div>
        <div>
          <h3>CPR: {profile.cpr}</h3>
        </div>
        <div>
          <h3>Email: {profile.email}</h3>
        </div>
        <div>
          <h3>Gender: {profile.gender}</h3>
        </div>
        <div>
          <h3>Phone Number: {profile.phoneNumber}</h3>
        </div>
      </div>
      <Link to={`/Profile/${userId}/edit`}>Edit profile</Link>
    </div>
  ) : null
}

export default Profile
