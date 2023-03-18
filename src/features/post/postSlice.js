import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    posts: [],
};

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async (_, { rejectWithValue, dispatch }) => {
        const result = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        dispatch(setPosts(result.data));
    }
);

export const removePostById = createAsyncThunk(
    "posts/removePostById",
    async (id, { rejectWithValue, dispatch }) => {
        await axios.delete(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        dispatch(removePost(id));
    }
);

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        removePost: (state, action) => {
            state.posts = state.posts.filter(post => post.id !== action.payload)
        }
    },
    extraReducers: {
        [getPosts.fulfilled]: () => console.log('fullfiled'),
        [getPosts.rejected]: () => console.log('rejected'),
        [getPosts.pending]: () => console.log('pending'),
    }
});

export const { setPosts, removePost } = postSlice.actions;
export default postSlice.reducer;
