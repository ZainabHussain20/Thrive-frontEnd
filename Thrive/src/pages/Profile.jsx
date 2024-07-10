import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Client from "../services/api"
import leadership from "../assets/leadership.svg"
import {
  FaUser,
  FaBirthdayCake,
  FaEnvelope,
  FaPhone,
  FaIdCard,
} from "react-icons/fa"

const Profile = () => {
  const [profile, setProfile] = useState({})
  const [userId, setUserId] = useState("")

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId")
    if (storedUserId) setUserId(storedUserId)

    const getProfileDetails = async () => {
      try {
        const response = await Client.get(`/profile/${userId}`)
        setProfile(response.data)
      } catch (error) {
        console.error("Error fetching profile details:", error)
      }
    }

    if (userId) {
      getProfileDetails()
    }
  }, [userId])

  return profile ? (
    <div className="profile-container">
      <h2>Profile Details</h2>
      <div className="profile-info">
        <div className="profile-item">
          <FaUser /> <span className="profile-detail">{profile.userName}</span>
        </div>
        <div className="profile-item">
          <FaUser /> <span className="profile-detail">{profile.firstName}</span>
        </div>
        <div className="profile-item">
          <FaUser /> <span className="profile-detail">{profile.lastName}</span>
        </div>
        <div className="profile-item">
          <img src={leadership} />
          <span className="profile-detail">{profile.gender}</span>
        </div>
        <div className="profile-item">
          <FaBirthdayCake />
          <span className="profile-detail">
            {new Date(profile.birthDate).toLocaleDateString()}
          </span>
        </div>
        <div className="profile-item">
          <FaIdCard /> <span className="profile-detail">{profile.cpr}</span>
        </div>
        <div className="profile-item">
          <FaEnvelope /> <span className="profile-detail">{profile.email}</span>
        </div>
        <div className="profile-item">
          <FaPhone />
          <span className="profile-detail">{profile.phoneNumber}</span>
        </div>
      </div>
      <Link to={`/Profile/${userId}/edit`} className="edit-profile-link">
        Edit Profile
      </Link>
    </div>
  ) : null
}

export default Profile
