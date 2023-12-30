import { updateTodo } from "@/redux/todosAction";
import { useState } from "react";
import { useDispatch } from "react-redux";

export function TodoUpdate({ todo, changeEditableStatus }) {
  let [task, SetTask] = useState(todo.task);
  let dispatch = useDispatch();

  function update() {
    let newTodo = { ...todo, task };
    changeEditableStatus();
    dispatch(updateTodo(newTodo));
  }

  return (
    <div className="d-flex mt-1">
      <div className="description flex-grow-1">
        <input
          className="form-control"
          value={task}
          onChange={(e) => SetTask(e.target.value)}
        />
      </div>
      <div className="action d-inline">
        <button className="btn btn-primary me-1 ms-1" onClick={update}>
          Update
        </button>
        <button className="btn btn-primary" onClick={changeEditableStatus}>
          Cancel
        </button>
      </div>
    </div>
  );
}
