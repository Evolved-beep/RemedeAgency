import React from "react";
import "../assets/css/Navbar.css"
import Logo from "../assets/img/argentBankLogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Navbar = () => {

    const userCircle = <FontAwesomeIcon icon={faUserCircle} />

    return(
        <nav class="main-nav">
        <a class="main-nav-logo">
          <img
            class="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 class="sr-only">Argent Bank</h1>
        </a>
        <div>
         <Link to='/sign-in'><i class="fa fa-user-circle"></i>Sign In</Link>
        </div>
      </nav>
    )
}

export default Navbar