import { createSlice } from '@reduxjs/toolkit';

const formReducer = createSlice({
  name: 'form',
  initialState: {
    cards: [],
    id: 0,
  },
  reducers: {
    add(state, action) {
      const card = action.payload;
      card.id = state.id;
      state.cards.push(card);
      state.id++;
    },
  },
});

export default formReducer.reducer;
export const { add } = formReducer.actions;
