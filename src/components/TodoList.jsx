"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TaskItem } from "./TaskItem";
import { getAllTodo } from "@/redux/todosAction";

export function TodoList() {
  let { todos } = useSelector((state) => state.todos);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodo());
  }, [dispatch]);

  function maper(todo) {
    return <TaskItem key={todo.id} todo={todo} />;
  }

  return <div className="box mt-3">{todos.map(maper)}</div>;
}
