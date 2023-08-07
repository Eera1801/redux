import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addUser:(state,action)=>{
            const newUser = {
                firstname:action.payload.user.firstName,
                lastname: action.payload.user.lastName,
                email: action.payload.user.Email,
                password: action.payload.user.password
            }
            state.push(newUser)
        },
        deleteUser:(state)=>{
            return state.filter((item)=> item.email == '')
        }
    }
})

export const {addUser,deleteUser} = userSlice.actions;

export default userSlice.reducer