import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../assets/css/Profile.css'
import { editValueUser } from '../api/fetchData'
import { userValue } from "../auth/Authuser";
import { loadingItem } from "../api/localStorage";

const EditProfile = () => {
        const userName = useSelector(state => state.login.user.firstName)
        const userLastName = useSelector(state => state.login.user.lastName)
        const [name,setName] = useState(userName)
        const [lastname, setLastName] = useState(userLastName)
        const dispatch = useDispatch()
        const getUserValue = {name, lastname}

        const handleSubmit = async (e) => {
            e.preventDefault()
            const data = await editValueUser(getUserValue)
            loadingItem('token')
            dispatch(userValue(data))     
        }
    return(
        <main className="main bg-dark">
            <section className="edit_profile">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Edit Profile</h1>
                <form id="form">
                    <div className="input-wrapper">
                        <label htmlFor="username">First Name</label><input type="text" onChange={e => setName(e.target.value)} placeholder={name} name="firstName"
                            id="firstName"></input>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Last Name</label><input type="text" onChange={e => setLastName(e.target.value)} placeholder={lastname} name="lastName"
                            id="lastName"></input>
                    </div>
                    <button type="submit" className="sign-in-button" onSubmit={handleSubmit}>Save</button>
                </form>
            </section>
        </main>
    )
}

export default EditProfile