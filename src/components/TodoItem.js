import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toogleCompleted } from "../features/todo/todoSLice";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch()

    const toggleTodoHandler = () => {
        dispatch(toogleCompleted(todo.id))
    }
    const deleteTodoHandler = () => {
        dispatch(deleteTodo(todo.id))
    }
    return (
        <div className="flex justify-between items-center my-2">
            <button onClick={toggleTodoHandler} className="text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400">
                Complete
            </button>
            <div
                className={`text-sm ${
                    todo.completed
                        ? "line-through font-medium text-lime-400"
                        : ""
                }`}
            >
                {todo.text}
            </div>
            <button onClick={deleteTodoHandler} className="text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer">
                Delete
            </button>
        </div>
    );
};

export default TodoItem;
