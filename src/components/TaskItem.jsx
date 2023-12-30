"use client";
import { deleteTodo } from "@/redux/todosAction";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TodoUpdate } from "./TodoUpdate";

export function TaskItem({ todo }) {
  let dispatch = useDispatch();
  let [isEditable, setIsEditable] = useState(false);

  function changeEditableStatus() {
    setIsEditable(!isEditable);
  }

  function deleteTask() {
    dispatch(deleteTodo(todo.id));
  }

  if (isEditable) {
    return (
      <TodoUpdate
        key={todo.id}
        changeEditableStatus={changeEditableStatus}
        todo={todo}
      />
    );
  } else {
    return (
      <div className="d-flex mt-1">
        <div className="description flex-grow-1">
          <p className="form-control">{todo.task}</p>
        </div>
        <div className="action d-inline">
          <button
            className="btn btn-primary me-1 ms-1"
            onClick={changeEditableStatus}
          >
            Edit
          </button>
          <button className="btn btn-primary" onClick={deleteTask}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}
