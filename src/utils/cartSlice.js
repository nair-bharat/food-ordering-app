import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.total += Math.round((action.payload.price / 100) * 100 / 100);
    },
    removeItem: (state, action) => {
        
        if (state.items.length > 0 && state.total > 0) {
            state.items.splice(action.payload, 1);
            state.total -= Math.round((action.payload.price / 100) * 100 / 100);
        }
        
    }
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
