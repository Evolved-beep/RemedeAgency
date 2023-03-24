import {createSlice} from '@reduxjs/toolkit'

const initialState = {
            user: {},
            token: null
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
    }
})

export const {addToken, userValue} = userSlice.actions
 export default userSlice.reducer