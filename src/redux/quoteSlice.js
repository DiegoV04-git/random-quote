import { createSlice } from "@reduxjs/toolkit";


const quoteSlice = createSlice({
  name: "quotes",  
  initialState: {
    quote: "",
    author: "",
  },
  reducers: {
    setQuote: (state, action) => {
      state.quote = action.payload.quote;
      state.author = action.payload.author;
    },
  },
});

export const { setQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
