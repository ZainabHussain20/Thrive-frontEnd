import { Route, Routes } from "react-router"
import Nav from "./components/Nav"
import About from "./pages/About"
import Register from "./pages/Register"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <div>
        <Nav />
        <main>
          <Routes>
            <Route path="/about" element={<About />} />

            <Route path="/" element={<Home />} />

            <Route path="/signin" element={<SignIn setUser={setUser} />} />

            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
