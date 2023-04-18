import { createSlice } from '@reduxjs/toolkit';

const formReducer = createSlice({
  name: 'form',
  initialState: {
    cards: [],
  },
  reducers: {
    add(state, action) {
      state.cards.push(action.payload);
    },
  },
});

export default formReducer.reducer;
export const { add } = formReducer.actions;
