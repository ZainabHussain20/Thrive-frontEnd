import React, { useState, useEffect } from "react"
import MyProgramCard from "../components/MyProgramCard"
import axios from "axios"
import { BASE_URL } from "../services/api"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

const MyPrograms = () => {
  const [programs, setPrograms] = useState([])
  let { userId } = useParams()

  useEffect(() => {
    const getPrograms = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/registration/${userId}`)
        setPrograms(res.data)
      } catch (err) {
        console.log("Error fetching programs:", err)
      }
    }
    getPrograms()
  }, [])

  return (
    <div className="program-content">
      {programs.length > 0 ? (
        programs.map((program) => (
          <MyProgramCard
            key={program._id}
            id={program._id}
            name={program.name}
          />
        ))
      ) : (
        <h4>No programs available!</h4>
      )}
    </div>
  )
}

export default MyPrograms
