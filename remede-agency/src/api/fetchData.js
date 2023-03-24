import { loadingItem, stockItem } from "./localStorage";

const URL = "http://localhost:3001/api/v1"

export const getToken = async (value) => {
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: value.email,
            password: value.password
        })
    };
    console.log(value)
    const response = await fetch(`${URL}/user/login`, requestOptions)
    const data = await response.json()
    return data.body.token
}


export const getUserData = async (token) => {
    console.log(token)
        const options = {
            method: "POST",
            headers: {'Content-Type':'application/json',
            "Authorization":`Bearer ${token}`
        }
        }
        console.log(options)
        const response = await fetch(`${URL}/user/profile`, options)
        const data = await response.json()
        const userTest = {
            firstname: data.body.firstName,
            lastname : data.body.lastName
        }
        return userTest
}

export const editValueUser = async (token, value) => {
    const options = {
        method: 'PUT',
        headers: {"Content-Type" : 'application/json',
        "Authorization" : `Bearer ${token}`
    }
        /* body: JSON.stringify({
            firstName: 
            lastName: 
        }) */
    }
    const response = await fetch(`${URL}/user/profile`, options)
    const data = await response.json()
    console.log(data)
    return data
}
