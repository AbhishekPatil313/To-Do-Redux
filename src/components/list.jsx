import React from 'react'
import  "./todo.css"
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "../todoSlice";
const List = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleToggleComplete = (id) => {
        dispatch(toggleComplete(id));
      };
    
      const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
      };
  return (
    <div>
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
    </div>
  )
}

export default List;