"use client";
import { createSlice } from "@reduxjs/toolkit";
import {
  addNewTodo,
  updateTodo,
  deleteTodo,
  getAllTodo,
  searchTodo,
} from "./todosAction";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const Slice = createSlice({
  name: "todos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos.push(action.payload);
        state.error = null;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = state.todos.filter(
          (todo) => todo.id != action.payload.id
        );
        state.error = null;
      })
      .addCase(getAllTodo.fulfilled, fulfilled)
      .addCase(updateTodo.fulfilled, fulfilled)
      .addCase(searchTodo.fulfilled, fulfilled)
      .addCase(addNewTodo.pending, pending)
      .addCase(updateTodo.pending, pending)
      .addCase(deleteTodo.pending, pending)
      .addCase(searchTodo.pending, pending)
      .addCase(getAllTodo.pending, pending)
      .addCase(addNewTodo.rejected, rejected)
      .addCase(deleteTodo.rejected, rejected)
      .addCase(updateTodo.rejected, rejected)
      .addCase(searchTodo.rejected, rejected)
      .addCase(getAllTodo.rejected, rejected);
  },
});

function pending(state) {
  state.loading = true;
}

function rejected(state, action) {
  state.loading = false;
  state.error = action.error.message;
}

function fulfilled(state, action) {
  state.loading = false;
  state.todos = action.payload;
  state.error = null;
}

export default Slice.reducer;
