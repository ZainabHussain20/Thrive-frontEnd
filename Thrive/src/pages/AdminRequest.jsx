import { useState, useEffect } from "react"
import Client from "../services/api"
import AdminRequestCard from "../components/AdminRequestCard"

const AdminRequest = () => {
  const [registrations, setRegistration] = useState([])

  useEffect(() => {
    const getRegistration = async () => {
      try {
        const res = await Client.get(`/registration/allRegistration`)
        setRegistration(res.data)
      } catch (err) {
        console.log("Error fetching registrations:", err)
      }
    }
    getRegistration()
  }, [])

  return (
    <div className="forms">
      {registrations.length > 0 ? (
        registrations.map((registration) => (
          <AdminRequestCard
            key={registration._id}
            id={registration._id}
            user={registration.user}
          />
        ))
      ) : (
        <h4>No registration available!</h4>
      )}
    </div>
  )
}

export default AdminRequest
