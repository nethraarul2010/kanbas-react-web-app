import React from "react";
const TodoItem = (
    {
        todo = 
        {
            done:true,
            title:"Buy milk",
            status:"Completed"
        }
        
    }) => {
        return (
            <li className="list-group-item">
     <input type="checkbox"
            defaultChecked={todo.done}/>
     &nbsp;
     {todo.title}
     ({todo.status})
   </li>

        );
    }
    export default TodoItem;