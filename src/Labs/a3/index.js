import React from 'react';
import JavaScript from './javaScript';
import 'bootstrap/dist/css/bootstrap.min.css';
import Classes from "./Classes";
import Styles from './Styles';
import ConditionalOutput from './ConditionalOutput';
import TodoItem from './ToDos/TodoItem';
import TodoList from './ToDos/ToDoList';
import { useSelector } from "react-redux";
function Assignment3() {
  const { todos } = useSelector((state) => state.todosReducer);
    return (
      <div>
        <h1>Assignment 3</h1>
        <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
        <JavaScript/>
        <Classes/>
        <Styles/>
        <ConditionalOutput/>
        <TodoItem/>
        <TodoList/>
      </div>
    );
  }
  export default Assignment3;
  
  