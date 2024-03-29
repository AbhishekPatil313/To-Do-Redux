import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "../todoSlice";
import  "./todo.css"
const Todo = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  const onSubmit = (event) => {
		event.preventDefault();
	};
  return (
    <>
    <h1 className="title">To-Do App</h1>

    <div className="todo-container">

<form onSubmit={onSubmit} className='form-inline mt-3 mb-3 form'>
    <input className='form-control mb-3 px-2' placeholder="Enter todo" type="text" value={text} onChange={handleInputChange} />{" "}
    <button className='btn btn-success mb-4 add-button' onClick={handleAddTodo} type="submit"> Add Todo </button>{" "}

<ul>
  {" "}
  {todos.map((todo) => (
    <li
      key={todo.id}
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
      }}
    >
      {todo.text}{" "}
      <button className='btn btn-warning mb-2' onClick={() => handleToggleComplete(todo.id)}>
        {" "}
        {todo.completed ? "Mark Incomplete" : "Mark Complete"}{" "}
      </button>{" "}
      <button className='btn btn-danger mb-2' onClick={() => handleDeleteTodo(todo.id)}> Delete </button>{" "}
    </li>
  ))}{" "}
</ul>{" "}
</form>
</div>
    </>
    
  );
};

export default Todo;