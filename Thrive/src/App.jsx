import { Route, Routes } from 'react-router'
import Nav from './components/Nav'

import About from "./pages/About"
import Register from "./pages/Register"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import ProgramDetail from "./pages/ProgramDetail"
import UpdatePassword from "./pages/UpdatePassword"
import { CheckSession } from "./services/Auth"
import { useEffect, useState } from "react"

function App() {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <>
      <div>
        <Nav user={user} handleLogOut={handleLogOut} />

        <main>
          <Routes>
            <Route path="/about" element={<About />} />

            <Route path="/" element={<Home />} />

            <Route path="/Signin" element={<SignIn setUser={setUser} />} />

            <Route path="/Register" element={<Register />} />
            <Route path="/Programs" element={<Programs />} />
            <Route path="/updatePassword" element={<UpdatePassword />} />

            <Route path="/program/:ProgramId" element={<ProgramDetail />} />

            <Route path="/chat" element={<Chat />} /> 

          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
