import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { discussionsCardsInfo, Post } from "../../extra";

const initialState = { 
  posts: discussionsCardsInfo,
 };

const postsSlice = createSlice({
  name: "cards",
  initialState: initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
  },
});

export default postsSlice.reducer;
export const { actions } = postsSlice;
