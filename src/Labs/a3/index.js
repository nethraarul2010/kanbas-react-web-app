import React from 'react';
import JavaScript from './javaScript';
import 'bootstrap/dist/css/bootstrap.min.css';
import Classes from "./Classes";
import Styles from './Styles';
import ConditionalOutput from './ConditionalOutput';
import TodoItem from './ToDos/TodoItem';
import TodoList from './ToDos/ToDoList';
function Assignment3() {
    return (
      <div>
        <h1>Assignment 3</h1>
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
  
  