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
      state.total += Math.round(((action.payload.price / 100) * 100) / 100);
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items.splice(index, 1);
        state.total -= Math.round(((action.payload.price / 100) * 100) / 100);
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
