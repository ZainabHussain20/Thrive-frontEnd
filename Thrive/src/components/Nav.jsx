import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"

const Nav = ({ user, handleLogOut }) => {
  return (
    <header>
      <nav className="nav-links">
        <Link to="/">
          <img src={logo} />
        </Link>
        <Link to="/">Home</Link>
        {user ? (
          <>
            {user.type === "Admin" ? (
              <>
                <Link to="/addProgram">Add Programs</Link>
                <Link to="/Request">Request</Link>
              </>
            ) : (
              <>
                <Link to="/Programs">Programs</Link>
                <Link to="/MyRequest">My Program</Link>
                <Link to="/Profile">Profile</Link>
                <Link to="/chat">Chat</Link>
              </>
            )}
            <Link to="/" onClick={handleLogOut}>
              Sign Out
            </Link>
          </>
        ) : (
          <>
            <Link to="/About">About Us</Link>
            <Link to="/signin">Sign In</Link>
          </>
        )}
      </nav>
    </header>
  )
}

export default Nav
