import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.svg"

const Nav = ({ user, handleLogOut }) => {
  return (
    <header>
      <nav>
        <div className="nav-links">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
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
                  <Link to={`/programs/${user.id}`}>My Program</Link>
                  <Link to={`/MyRequest/${user.id}`}>My Request</Link>
                  <Link to={`/Profile/${user.id}`}>Profile</Link>
                  {user.id && (
                    <Link to={`/registration/${user.id}/cart`}>Cart</Link>
                  )}
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
        </div>
      </nav>
    </header>
  )
}

export default Nav
