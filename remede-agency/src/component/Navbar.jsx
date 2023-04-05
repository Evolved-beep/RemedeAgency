import React, { useEffect } from "react";
import "../assets/css/Navbar.css"
import Logo from "../assets/img/argentBankLogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket,faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { loggoutUser } from "../auth/Authuser";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
    const isLogged = useSelector(state => state.login.isLoggin)
    const userName = useSelector(state => state.login.user.firstName)
    const userCircle = <FontAwesomeIcon icon={faUserCircle} />
    const logoutIcon = <FontAwesomeIcon icon={faRightFromBracket} />
    const dispatch = useDispatch()
    console.log(isLogged)
    const handleLogout = () => {
      dispatch(loggoutUser())
    }
    return(
        <nav class="main-nav">
        <Link to="/">
          <img
            class="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
        </Link>
          <h1 class="sr-only">Argent Bank</h1>
        <div>
      {!isLogged ? (
        <div className="container_nav">
          <Link to='/sign-in'><p>Sign in</p></Link>
        </div>
      ): (
        <div className="container_nav">
          <div className="user_container">
            <Link to="/profile"><i class="fa fa-user-circle">{userCircle}</i>
            <p>{userName}</p>
            </Link>
          </div>
          <div className="logout_container" onClick={handleLogout}>
            <Link to="/">
              <i class="fa-regular fa-right-from-bracket">{logoutIcon}</i>
              <p>Logout</p>
            </Link>
          </div>
        </div>
      )}

        </div>
      </nav>
    )
}

export default Navbar