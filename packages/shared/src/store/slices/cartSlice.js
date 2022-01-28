import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_ITEM: (state, { payload: { item } }) => {
      const indexOfItem = state.items.findIndex(({ id }) => id === item.id);
      const itemInCart = indexOfItem > -1
     
      if(itemInCart) {
        const data = {...item, quantity: state.items[indexOfItem].quantity + 1}
        
        return ({ ...state, items: [...state.items.filter(({ id }) => item.id !== id), data]})
      }

      return ({ ...state, items: [...state.items, {...item, quantity: 1 }]})
    },
    REMOVE_ITEM: (state, { payload: { id } }) => ({
      ...state,
      items: state.items.filter((item) => item.id !== id),
    }),
  },
});

const { actions, reducer } = cartSlice;

export const { ADD_ITEM, REMOVE_ITEM } = actions;

export default reducer;
