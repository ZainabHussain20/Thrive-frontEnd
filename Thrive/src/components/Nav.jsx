import React from "react"
import { Link } from "react-router-dom"

const Nav = ({ user, handleLogOut }) => {
  return (
    <header>
      <div className="header">
        {/* <Link to="/home">
          <img
            className="logo"
            src=""
            alt="Logo"
          />
        </Link> */}
      </div>
      <nav className="nav-links">
        <Link to="/About" className="nav-link">
          About Us
        </Link>

        <Link to="/" className="nav-link" onClick={handleLogOut}>
          Sign Out
        </Link>

        <Link to="/register" className="nav-link">
          Register
        </Link>
        <Link to="/signin" className="nav-link">
          Sign In
        </Link>
      </nav>
    </header>
  )
}

export default Nav
