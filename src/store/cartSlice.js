import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const saveCartToLocalStorage = (cartItems, cartTotalQuantity, cartTotalPrice) => {
  localStorage.setItem("cart", JSON.stringify({
    cartItems,
    cartTotalQuantity,
    cartTotalPrice
  }));
};

const getCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalPrice: 0
  };
};


const initialState = getCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
        state.cartTotalQuantity++;
        state.cartTotalPrice += action.payload.price;
        toast.success(`${item.title} increased in cart`, { position: "top-left" });
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        state.cartTotalQuantity++;
        state.cartTotalPrice += action.payload.price;
        toast.success(`${action.payload?.title} added`, { position: "top-left" });
      }
      // Save to localStorage
      saveCartToLocalStorage(state.cartItems, state.cartTotalQuantity, state.cartTotalPrice);
    },
    remove(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        state.cartTotalQuantity -= item.quantity;
        state.cartTotalPrice -= item.price * item.quantity;
        state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
        toast.error(`${item.title} removed from cart`, { position: "top-left" });
      }
      // Save to localStorage
      saveCartToLocalStorage(state.cartItems, state.cartTotalQuantity, state.cartTotalPrice);
    },
    clearCart(state) {
      state.cartItems = [];
      state.cartTotalQuantity = 0;
      state.cartTotalPrice = 0;
      toast.info("Cart cleared");
      // Save to localStorage
      saveCartToLocalStorage(state.cartItems, state.cartTotalQuantity, state.cartTotalPrice);
    },
    increaseQuantity(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
        state.cartTotalQuantity++;
        state.cartTotalPrice += action.payload.price;
        toast.success(`${item?.title} increased`, { position: "top-left" });
      }
      // Save to localStorage
      saveCartToLocalStorage(state.cartItems, state.cartTotalQuantity, state.cartTotalPrice);
    },
    decreaseQuantity(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity--;
        state.cartTotalQuantity--;
        state.cartTotalPrice -= action.payload.price;
        if (item.quantity > 0) {
          toast.error(`${item?.title} decreased`, { position: "top-left" });
        }
      }
      // Save to localStorage
      saveCartToLocalStorage(state.cartItems, state.cartTotalQuantity, state.cartTotalPrice);
    },
  },
});


// const initialState = {
//   cartItems: [], // Start with an empty array for cart items
//   cartTotalQuantity: 0,
//   cartTotalPrice: 0,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     add(state, action) {
//       const item = state.cartItems.find(
//         (item) => item.id === action.payload.id
//       );
//       console.log("action", action.payload);
//       if (item) {
        
//         item.quantity++;
//         state.cartTotalQuantity++;
//         state.cartTotalPrice += action.payload.price;
//         toast.success(`${item.title} increased in cart`,{position: "top-left"});
//       } else {
        
//         state.cartItems.push({ ...action.payload, quantity: 1 });
//         state.cartTotalQuantity++;
//         state.cartTotalPrice += action.payload.price;
//         toast.success(`${action.payload?.title} added`,{position: "top-left"})
        
//       }
//     },
//     remove(state, action) {
//       const item = state.cartItems.find(
//         (item) => item.id === action.payload.id
//       );
//       if (item) {
//         state.cartTotalQuantity -= item.quantity;
//         state.cartTotalPrice -= item.price * item.quantity;
//         state.cartItems = state.cartItems.filter(
//           (item) => item.id !== action.payload.id
//         );
//         toast.error(`${item.title} removed from cart`,{position: "top-left"});
//       }
//     },
//     clearCart(state) {
//       state.cartItems = [];
//       state.cartTotalQuantity = 0;
//       state.cartTotalPrice = 0;
//       toast.info("Cart cleared");
//     },
//     increaseQuantity(state, action) {
//       const item = state.cartItems.find(
//         (item) => item.id === action.payload.id
//       );
//       if (item) {
//         item.quantity++;
//         state.cartTotalQuantity++;
//         state.cartTotalPrice += action.payload.price;

//         toast.success(`${item?.title} increased`,{position:"top-left"});
//       }
//     },
//     decreaseQuantity(state, action) {
//       const item = state.cartItems.find(
//         (item) => item.id === action.payload.id
//       );
//       if (item) {
//         item.quantity--;
//         state.cartTotalQuantity--;
//         state.cartTotalPrice -= action.payload.price;
//         if (item.quantity > 0) {
//           toast.error(`${item?.title} decreased`,{position:"top-left"});
//         }
//       }
//     },
//     // updateQuantity(state, action) {
//     //   const item = state.cartItems.find((item) => item.id === action.payload.id);
//     //   if (item) {
//     //     state.cartTotalQuantity += action.payload.quantity - item.quantity;
//     //     state.cartTotalPrice += (action.payload.quantity - item.quantity) * item.price;
//     //     item.quantity = action.payload.quantity;
//     //   }
//     // },
//   },
// });

export const { add, remove, clearCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
