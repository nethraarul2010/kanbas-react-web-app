import React,{useState,useEffect} from "react";
import axios from "axios";
function WorkingWithArrays(){
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: true,
      });
      const [todos, setTodos] = useState([]);
      const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
      };
      const fetchTodoById = async(id)=>{
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
      }
      const removeTodo = async(todo)=>{
        const response = await axios.get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
      }
      const createTodo = async()=>{
        const response = await axios.get(`${API}/create`);
        setTodos(response.data)
      }
      const updateTitle = async () => {
        const response = await axios.get(
          `${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
      };
    
      useEffect(() => {
        fetchTodos();
      }, []);
    
    const API = "https://kanbas-node-server-app-uhp6.onrender.com/a5/todos";
    return(
        <div>
            <h3>Working with Arrays</h3>
            <a href={API} className="btn btn-primary me-2">
                Get todos
            </a>
            <h4>Retrieving an Item from an Array by ID</h4>
            <h5>Add an id number that is existing to get the elements through get todos</h5>
      <input
        className="form-control"
        value={todo.id}
        onChange={(e) => setTodo({ ...todo,
          id: e.target.value })}/>
      <a href={`${API}/${todo.id}`}
         className="btn btn-primary me-2">
        Get Todo by ID
      </a>
      <h3>Filtering Array Items</h3>
      <a href={`${API}/?completed=true`}
     className="btn btn-primary me-2" >
    Get Completed Todos
  </a>
  <h4>Creating new items in a Array</h4>
  <a href={`${API}/create`}
  className="btn btn-primary me-2">
    Create todo
  </a>
  <h5>Add the todo id here to update title,description and completed todo </h5>
  <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value })}
        className="form-control mb-2"
        type="number"
      />
      <h3>Deleting from an Array</h3>
      <a href={`${API}/${todo.id}/delete`}
         className="btn btn-primary me-2">
        Delete Todo with ID = {todo.id}
      </a>
      <input
        value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })}
        className="form-control mb-2"
        type="text"
      />
      <h3>Updating an Item in an Array</h3>
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary me-2" >
        Update Title to {todo.title}
      </a>
      <input
        value={todo.description}
        onChange={(e) => setTodo({
          ...todo, description: e.target.value })}
        className="form-control mb-2"
        type="text"
      />
      <h4>Updating Description in an Array</h4>
       <a
        href={`${API}/${todo.id}/description/${todo.description}`}
        className="btn btn-primary me-2" >
        Update Description
      </a>
      <label>
      <input
        value={todo.completed}
        onChange={(e) => setTodo({
          ...todo, completed: e.target.value })}
        type="checkbox"
      />
      Completed
      </label>
      <h4>Updating Completed in an Array</h4>
       <a
        href={`${API}/${todo.id}/completed/${todo.completed}`}
        className="btn btn-primary me-2 mb-2" >
        Update Completed
      </a>
      <h4>Todos modification</h4>
     <input value={todo.title}
        onChange={(e) => setTodo({ ...todo,
          title: e.target.value })} className="form-control mb-2" />
      <button onClick={createTodo}
              className="btn btn-primary mb-2 me-2 w-50">
        Create Todo
      </button>
      <button onClick={updateTitle}
              className="btn btn-success me-2 w-50">
        Update Title
      </button>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id}
              className="list-group-item">
                  <button
          onClick={() => fetchTodoById(todo.id)}
          className="btn btn-warning ml-2 me-2 float-end" >
          Edit
        </button>
                <button onClick={()=>removeTodo(todo)}
                className="btn btn-danger float-end">
                  Remove
                </button>
            {todo.title}
          </li>
        ))}
      </ul>
</div>
    )
}
export default WorkingWithArrays;