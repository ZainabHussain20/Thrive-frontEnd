import { Route, Routes } from "react-router"
import "./App.css"
import Nav from "./components/Nav"
import About from "./pages/About"
import Register from "./pages/Register"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import Program from "./pages/Program"
import ProgramDetail from "./pages/ProgramDetail"
import Profile from "./pages/Profile"
import UpdatePassword from "./pages/UpdatePassword"
import ProfileCard from "./components/ProfileCard"
import Reviews from "./components/Reviews"
import AdminPrograms from "./pages/AdminPrograms"
import AddProgram from "./components/AddProgram"
import MyRequest from "./pages/MyRequest"
import AdminRequest from "./pages/AdminRequest"
import AcceptRequest from "./pages/AcceptRequest"
import MyPrograms from "./pages/MyPrograms"
import Cart from "./components/Cart"
import Chatbot from "./components/chat"
import Payment from "./components/Payment"
import { CheckSession } from "./services/Auth"
import { useEffect, useState } from "react"

function App() {
  const [user, setUser] = useState()

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
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
            <Route path="/" element={<Home user={user} />} />
            <Route path="/Signin" element={<SignIn setUser={setUser} />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Programs" element={<Program />} />
            <Route
              path="/adminPrograms"
              element={<AdminPrograms user={user} />}
            />
            <Route path="/addProgram" element={<AddProgram />} />
            <Route path="/updatePassword" element={<UpdatePassword />} />
            <Route path="/reviews/:userId" element={<Reviews />} />
            <Route path="/registration/:userId/cart/" element={<Cart />} />
            <Route
              path="/program/:programId"
              element={<ProgramDetail user={user} />}
            />
            <Route path="/Profile/:userId" element={<Profile />} />
            <Route path="/MyRequest/:userId" element={<MyRequest />} />
            <Route path="/Profile/:userId/edit" element={<ProfileCard />} />
            <Route path="/registration" element={<AdminRequest />} />
            <Route
              path="/registration/:registrationId"
              element={<AcceptRequest />}
            />
            <Route path="/programs/:userId" element={<MyPrograms />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/chat" element={<Chatbot />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
