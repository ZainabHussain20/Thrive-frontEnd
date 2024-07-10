import React, { useState, useEffect } from "react"
import MyProgramCard from "../components/MyProgramCard"
import Client from "../services/api"
import { useParams } from "react-router-dom"

const MyPrograms = () => {
  const [programs, setPrograms] = useState([])
  let { userId } = useParams()

  useEffect(() => {
    const getPrograms = async () => {
      try {
        const response = await Client.get(`programs/${userId}/userprograms`)
        setPrograms(response.data)
      } catch (err) {
        console.log("Error fetching programs:", err)
      }
    }
    getPrograms()
  }, [userId])

  return (
    <div className="program-content">
      {programs.length > 0 ? (
        programs.map((program) => (
          <MyProgramCard
            key={program._id}
            id={program._id}
            name={program.name}
            img={program.img}
          />
        ))
      ) : (
        <h4>No programs available!</h4>
      )}
    </div>
  )
}

export default MyPrograms
