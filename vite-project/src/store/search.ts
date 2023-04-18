import { createSlice } from '@reduxjs/toolkit';

const searchReducer = createSlice({
  name: 'search',
  initialState: {
    value: '',
    modalContent: null,
    error: null,
    nodes: [],
    isPending: true,
  },
  reducers: {
    setSearchValue(state, action) {
      state.value = action.payload;
    },
    openModal(state, action) {
      state.modalContent = action.payload;
    },
    closeModal(state) {
      state.modalContent = null;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    removeError(state) {
      state.error = null;
    },
    setNodes(state, action) {
      state.nodes = action.payload;
    },
    removeNodes(state) {
      state.nodes = [];
    },
    setPending(state) {
      state.isPending = true;
    },
    setResolved(state) {
      state.isPending = false;
    },
  },
});

export default searchReducer.reducer;
export const {
  setSearchValue,
  openModal,
  closeModal,
  setError,
  removeError,
  setNodes,
  removeNodes,
  setPending,
  setResolved,
} = searchReducer.actions;
