import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/post/postSlice";
import todoSLice from "../features/todo/todoSLice";
import userSlice from "../features/user/userSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        todo: todoSLice,
        post: postSlice,
    },
})