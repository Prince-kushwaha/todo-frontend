import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
let baseUrl = "http://localhost:3001/api/todo";

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async (todoData) => {
    let response = await axios.post(baseUrl, { task: todoData });
    return await response.data;
  }
);

export const getAllTodo = createAsyncThunk("todos/getAllTodo", async () => {
  let resp = await axios.get(baseUrl);
  return resp.data;
});

export const updateTodo = createAsyncThunk("todos/updateTodo", async (todo) => {
  let resp = await axios.patch(baseUrl, todo);
  return resp.data;
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  let url = `${baseUrl}/${id}`;
  let resp = await axios.delete(url);
  return resp.data;
});

export const searchTodo = createAsyncThunk(
  "todos/searchTodo",
  async (querystr) => {
    let url = `${baseUrl}/${querystr}`;
    let resp = await axios.get(url);
    return resp.data;
  }
);
