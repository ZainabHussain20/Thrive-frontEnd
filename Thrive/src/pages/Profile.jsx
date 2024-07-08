import React, { useState } from "react"
import ProfileCard from "../components/ProfileCard"

const Profile = () => {
  const userProfile = {
    name: "",
    birthDate: "",
    nationality: "",
    gender: "",
    email: "",
    phoneNumber: "",
  }

  const [profile, setProfile] = useState(userProfile)
  const [editMode, setEditMode] = useState(false)

  const handleEdit = () => {
    setEditMode(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setEditMode(false)
    console.log("Updated profile:", profile)
  }

  return (
    <div className="profilepage">
      <h1>My Profile</h1>
      {!editMode ? (
        <>
          <ProfileCard profile={profile} />
          <button onClick={handleEdit}>Edit Profile</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
            />
          </label>
          <label>
            BirthDate:
            <input
              type="date"
              name="birthDate"
              value={profile.birthDate}
              onChange={handleChange}
            />
          </label>
          <label>
            Nationality:
            <input
              type="text"
              name="nationality"
              value={profile.nationality}
              onChange={handleChange}
            />
          </label>
          <label>
            Gender:
            <input
              type="text"
              name="gender"
              value={profile.gender}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={profile.phoneNumber}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  )
}

export default Profile
