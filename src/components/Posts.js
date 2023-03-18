import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPosts } from "../features/post/postSlice";
import PostItem from "./PostItem";

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.post.posts);
    return (
        <div>
            <button
                onClick={() => dispatch(getPosts())}
                type="submit"
                className="bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm"
            >
                Get posts
            </button>
            {posts?.map((post) => (
                <PostItem key={post.title} id={post.id} title={post.title} />
            ))}
        </div>
    );
};

export default Posts;
