import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice.js';
import productReducer from './productSlice.js';




const store = configureStore({
    reducer: {
        // Define your slice reducers here
        cart: cartReducer,
        product: productReducer    
    }
})

export default store;