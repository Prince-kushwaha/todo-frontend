"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";
import { getAllTodo } from "@/redux/todosAction";

function TodoList() {
  let { todos } = useSelector((state) => state.todoReducer);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodo());
  }, [dispatch]);

  function maper(todo) {
    return <TodoItem key={todo.id} todo={todo} />;
  }

  return <div className="box mt-3">{todos.map(maper)}</div>;
}

export default React.memo(TodoList);
