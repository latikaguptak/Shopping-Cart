import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice(
  {
    name: 'cart',
    initialState:[],

    reducers: { // reducers is the pure function which will only chane the value inside the function instead of all changes.
      add(state, action) {
///redux::
          // return[...state, action.payload]; in normal redux librery we use this method but in redux toolkit createSlice methord provide the same things

        state.push(action.payload);
      },
      remove (state, action) {
        state = state.filter((item)=>item.id !== action.payload)
      },
   
      },
    },  
  )
  

export const{add, remove } = cartSlice.actions;
export default cartSlice.reducer;