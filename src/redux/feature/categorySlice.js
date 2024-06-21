import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: "top",
    query: "",
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setQuery: (state, action) =>{
      state.query = action.payload;
    }
  },
});


export const {setCategory,setQuery} = categorySlice.actions;
export default categorySlice.reducer;