import ProgramCard from "../components/ProgramCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../services/api";
import { Link } from 'react-router-dom';

const Programs = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const getPrograms = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/programs`);
        setPrograms(res.data);
      } catch (err) {
        console.log("Error fetching programs:", err);
      }
    };
    getPrograms();
  }, []);

  return (
    <div className="program-content">
      {programs.length > 0 ? (
        programs.map((program) => (
          <ProgramCard
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
  );
};

export default Programs;
