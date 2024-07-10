import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"

const Nav = ({ user, handleLogOut }) => {
  const userId = localStorage.getItem("userId")

  return (
    <header>
      <nav className="nav-links">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Link to="/">Home</Link>
        {user ? (
          <>
            {user.type === "Admin" ? (
              <>
                <Link to="/addProgram">Add Programs</Link>
                <Link to="/adminPrograms">Programs</Link>
                <Link to="/registration">Request</Link>
              </>
            ) : (
              <>
                <Link to="/Programs">Programs</Link>
                <Link to={`/programs/${userId}`}>My Program</Link>
                <Link to="/Profile">Profile</Link>

                <Link to="/chat">Chat</Link>
              </>
            )}
            <Link to="/" onClick={handleLogOut}>
              Sign Out
            </Link>{" "}
            {userId && <Link to={`/registration/${userId}/cart`}>Cart</Link>}
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
