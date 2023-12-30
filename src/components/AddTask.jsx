"use client";
import { addNewTodo } from "@/redux/todosAction";
import { useState } from "react";
import { useDispatch } from "react-redux";

export function AddTask() {
  let dispatch = useDispatch();
  let [task, setTask] = useState("");

  function addTask(event) {
    event.preventDefault();
    if (task != "") dispatch(addNewTodo(task));
  }

  return (
    <div className="box">
      <form onSubmit={addTask}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="What is your today task?"
          />
          <input className="btn btn-primary" type="submit" value="Add Task" />
        </div>
      </form>
    </div>
  );
}
