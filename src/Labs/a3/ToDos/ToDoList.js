import TodoItem from "./TodoItem";
import React from "react";
import todos from "./ToDos.json";
const TodoList = () => {
 return(
   <>
     <h3>Todo List</h3>
     <ul className="list-group">
       {
         todos.map(todo => {
           return(<TodoItem todo={todo}/>);
         })
       }
     </ul>
   </>
 );
}
export default TodoList;