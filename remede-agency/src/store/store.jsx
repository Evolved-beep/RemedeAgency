import React from "react"
import { configureStore } from '@reduxjs/toolkit'
import loginReducer from "../auth/Authuser"

const store = configureStore({
    reducer:{
        login: loginReducer
    }
})

export default store 