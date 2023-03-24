import React, {useEffect, useState} from "react";
import '../assets/css/Login.css'
import {getToken, getUserData} from '../api/fetchData'
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { loadingItem, stockItem } from "../api/localStorage";
import {addToken, userValue} from '../auth/Authuser'



const Form = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loadToken = loadingItem('token')
    const inputValue = {email, password} 

    const handleSubmit = async (e) => {
      e.preventDefault()
      const token = await getToken(inputValue)
      stockItem('token', token)
      dispatch(addToken(token))
      const userData = await getUserData(token)
      dispatch(userValue(userData))
      {token ? navigate("/profile") : navigate("sign-in")}
    }
    return(
      <section class="sign-in-content">
        <i class="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div class="input-wrapper">
            <label for="username">Username</label><input type="text" onChange={e => setEmail(e.target.value)} name="email" id="username"  />
          </div>
          <div class="input-wrapper">
            <label for="password">Password</label><input type="password" onChange={e => setPassword(e.target.value)} name="password" id="password"/>
          </div>
          <div class="input-remember">
            <input type="checkbox" id="remember-me" /><label for="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" onClick={handleSubmit}> Sign in </button>
        </form>
      </section>
    )
}

export default Form