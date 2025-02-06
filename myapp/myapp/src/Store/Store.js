import { configureStore } from "@reduxjs/toolkit";  // Use import to keep it consistent
import authSlice from "./authSlice";  // Import authSlice properly

const store = configureStore({
    reducer: {
        auth: authSlice,
    },
});

export default store;
