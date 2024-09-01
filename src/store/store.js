import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice.js';


const store = configureStore({
    reducer: {
        // Define your slice reducers here
        cart: cartReducer
    
    }
})

export default store;