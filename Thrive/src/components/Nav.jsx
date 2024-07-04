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
        <Link to="/Program" className="nav-link">
          Programs
        </Link>
        <Link to="/MyRequest" className="nav-link">
          My Request
        </Link>
        <Link to="/Profile" className="nav-link">
          Profile
        </Link>
        <Link to="/AddPrograms" className="nav-link">
          Add Programs
        </Link>
        <Link to="/Request" className="nav-link">
          Request
        </Link>
      </nav>
    </header>
  )
}

export default Nav
