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
      .addCase(
        addNewTodo.pending ||
          updateTodo.pending ||
          deleteTodo.pending ||
          getAllTodo.pending,
        (state) => {
          state.loading = true;
        }
      )
      .addCase(
        addNewTodo.rejected ||
          updateTodo.rejected ||
          deleteTodo.rejected ||
          getAllTodo.rejected,
        (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        }
      )
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos.push(action.payload);
        state.error = null;
      })
      .addCase(getAllTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
        state.error = null;
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
        state.error = null;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = state.todos.filter(
          (todo) => todo.id != action.payload.id
        );
        state.error = null;
      })
      .addCase(searchTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
        state.error = null;
      });
  },
});

export default Slice.reducer;
