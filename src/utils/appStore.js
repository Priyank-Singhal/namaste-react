import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    // act as single reducer for the whole app
    reducer: {
        cart: cartReducer
    }
});

export default appStore