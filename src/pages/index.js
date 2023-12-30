import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { TodoList } from "@/components/TodoList";
import { AddTask } from "@/components/AddTask";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchTodo } from "@/redux/todosAction";

export default function Home() {
  let [searchKeyword, setSearchKeyword] = useState("");
  let dispatch = useDispatch();

  function handleInputChange(event) {
    setSearchKeyword(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    dispatch(searchTodo(searchKeyword));
  }

  return (
    <>
      <main className={styles.main}>
        <div className="card">
          <div className="card-header">
            <h6 className="text-center">Add Task</h6>
          </div>
          <div className="card-body">
            <AddTask />
          </div>
        </div>
        <div className="card mt-3">
          <div className="card-header">
            <h6 className="text-center">Todo List</h6>
            <div className="search-box">
              <form className="d-flex" onSubmit={onSubmit} role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search Todos"
                  onChange={handleInputChange}
                  value={searchKeyword}
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="card-body">
            <TodoList />
          </div>
        </div>
      </main>
    </>
  );
}
