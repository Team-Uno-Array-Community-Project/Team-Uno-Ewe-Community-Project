import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        admin: null
    },

    reducers: {
        loginAdmin: (state, action) => {
            //login the admin after getting token from server
            console.log(action.payload);
            state.admin = action.payload;
        },
        logoutAdmin: (state) => {
            //removes token from local storage and resets state
            state.admin ={};
            localStorage.removeItem('token')
        }
    }
});
export const { loginAdmin, logoutAdmin } = adminSlice.actions;
export const setAdmin = (state) => state.auth.admin;
export default adminSlice.reducer;
