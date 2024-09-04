import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  cartItems: [], // Start with an empty array for cart items
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      console.log("action",action.payload)
      if (item) {
        item.quantity++;
        state.cartTotalQuantity++;
        state.cartTotalPrice += action.payload.price;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        state.cartTotalQuantity++;
        state.cartTotalPrice +=action.payload.price;
      }
    },
    remove(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        state.cartTotalQuantity -= item.quantity;
        state.cartTotalPrice -= item.price * item.quantity;
        state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
      }
    },
    clearCart(state) {
      state.cartItems = [];
      state.cartTotalQuantity = 0;
      state.cartTotalPrice = 0;
    },
    increaseQuantity(state, action){
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
        state.cartTotalQuantity++;
        state.cartTotalPrice += action.payload.price;
      }
    },
    decreaseQuantity(state, action){
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity--;
        state.cartTotalQuantity--;
        state.cartTotalPrice -= action.payload.price;
      }
    }
    // updateQuantity(state, action) {
    //   const item = state.cartItems.find((item) => item.id === action.payload.id);
    //   if (item) {
    //     state.cartTotalQuantity += action.payload.quantity - item.quantity;
    //     state.cartTotalPrice += (action.payload.quantity - item.quantity) * item.price;
    //     item.quantity = action.payload.quantity;
    //   }
    // },
  },
});

export const { add, remove, clearCart, increaseQuantity,decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
