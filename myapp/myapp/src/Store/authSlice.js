import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: true,
    userData: true,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    
    
});



export default authSlice.reducer;