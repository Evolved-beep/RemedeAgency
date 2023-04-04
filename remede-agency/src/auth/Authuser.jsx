import {createSlice} from '@reduxjs/toolkit'

const initialState = {
            user: {},
            token: null,
            isLoggin: false
}

 const userSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        addToken : (state,action) => {
            state.token = action.payload
        },
        userValue : (state,action) => {
            const {firstname, lastname} = action.payload
            state.user.firstName = firstname;
            state.user.lastName = lastname;
        },
        loggoutUser: (state, action) => {
            state.user = action.payload;
            state.user = {};
            state.token = null;
            state.isLoggin = false;
        },

        loggedin: (state) => {
            state.isLoggin = true
        },
        loggedout: (state) => {
            state.isLoggin = false
        }
    }
})

export const {addToken, userValue, loggedin, loggedout, loggoutUser} = userSlice.actions
 export default userSlice.reducer