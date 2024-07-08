import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import ProgramsDetail from "../components/ProgramsDetail"
import Client from "../services/api"

const ProgramsDetail = () => {
  let navigate = useNavigate()

  const [programsDetail, setProgramsDetail] = useState({})

  const getProgramDetails = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/places/${placeId}`)
      setPlaceDetails(response.data)
    } catch (e) {
      console.error("Failed to fetch place details:", e)
    }
  }
}
