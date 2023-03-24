import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadingItem } from "../api/localStorage";
import EditProfile from "../component/EditProfile";


const Profile = () => {
    const dispatch = useDispatch()
    let Token = useSelector(state => state.login.token)
    let userName = useSelector(state => state.login.user.firstName)
    let userLastName = useSelector(state => state.login.user.lastName)
    const [name] = useState(userName)
    const [lastname] = useState(userLastName)
    console.log(name)
    console.log(lastname)
    console.log(Token)
    
    return(
        <main className="main bg-dark">
          <div className="header">
            <h1>Welcome back {userName}</h1>
            <EditProfile />
          </div>
          <h2 className="sr-only">Accounts</h2>
          <section className="account">
              <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x8349)</h3>
              <p className="account-amount">$2,082.79</p>
              <p className="account-amount-description">Available Balance</p>
              </div>
              <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
              </div>
          </section>
          <section className="account">
              <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Savings (x6712)</h3>
              <p className="account-amount">$10,928.42</p>
              <p className="account-amount-description">Available Balance</p>
              </div>
              <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
              </div>
          </section>
          <section className="account">
              <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
              <p className="account-amount">$184.30</p>
              <p className="account-amount-description">Current Balance</p>
              </div>
              <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
              </div>
          </section>
      </main>
    )
}

export default Profile