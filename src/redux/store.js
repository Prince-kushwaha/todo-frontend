"use client";
import todoReducer from "./slice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
