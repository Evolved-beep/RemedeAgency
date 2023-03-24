import React, { useEffect } from "react";
import "../assets/css/Navbar.css"
import Logo from "../assets/img/argentBankLogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faRightToBracket, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { addToken } from "../auth/Authuser";
import { useSelector } from "react-redux";
import { getUserData } from "../api/fetchData";


const Navbar = () => {

    const selector = useSelector(state => state.login.token)
    const userName = useSelector(state => state.login.user.firstName)
    const userCircle = <FontAwesomeIcon icon={faUserCircle} />
    const loginIcon = <FontAwesomeIcon icon={faRightToBracket}/>
    const logoutIcon = <FontAwesomeIcon icon={faRightFromBracket} />
    console.log(selector)
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
      {!selector ? (
        <div className="container_nav">
          <Link to='/sign-in'><i class="fa-light fa-right-to-bracket">{loginIcon}</i></Link>
        </div>
      ): (
        <div className="container_nav">
          <div className="user_container">
            <Link to="/profile"><i class="fa fa-user-circle">{userCircle}</i>
            <p>{userName}</p>
            </Link>
          </div>
          <div className="logout_container">
            <i class="fa-regular fa-right-from-bracket">{logoutIcon}</i>
            <p>Logout</p>
          </div>
        </div>
      )}

        </div>
      </nav>
    )
}

export default Navbar