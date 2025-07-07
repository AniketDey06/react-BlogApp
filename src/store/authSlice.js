import { createSlice } from "@reduxjs/toolkit";

const initialSate = {
    staus: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.staus = true
            state.userData = action.payload.userData;
        },
        logout: (state, action) => {
            state.staus = false;
            state.userData = null;
        }
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;