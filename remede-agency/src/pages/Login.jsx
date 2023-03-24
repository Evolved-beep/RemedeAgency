import React from "react";
import Form from "../component/Form";
import "../assets/css/Login.css"

const Login = ({setToken}) => {
    return(
        <main className="main bg-dark">
            <Form setToken={setToken} />
        </main>
    )
}

export default Login