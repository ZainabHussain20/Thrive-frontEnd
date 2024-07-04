import { Route, Routes } from "react-router"
import Nav from "./components/Nav"
import About from "./pages/About"

function App() {
  return (
    <>
      <div>
        <Nav />
        <main>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
