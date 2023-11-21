import React,{useState,useEffect} from "react";
import axios from "axios";
function WorkingWithArraysJson(){
    const API = "https://kanbas-node-server-app-uhp6.onrender.com/a5/todos";
    const [todo, setTodo] = useState({
      id: 1, title: "Learn NodeJS", due: "2021-09-09",
      description: "Create a NodeJS server with ExpressJS and various RESTful APIs", completed: false,
    });
    const [errorMessage, setErrorMessage] = useState(null);
    const [todos, setTodos] = useState([]);
    const postTodo = async () => {
        try {
          const response = await axios.post(API, todo);
          setTodos([...todos, response.data]);
        } catch (error) {
          console.log(error);
          setErrorMessage(error.response.data.message);
    
        }
      };
      const deleteTodo = async (todo) => {
      try {
        const response = await axios.delete(
          `${API}/${todo.id}`);
        setTodos(todos.filter((t) => t.id !== todo.id));
      } catch (error) {
        console.log(error);
        setErrorMessage(error.response.data.message);
      }
    };  
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
        setTodo(response.data);
      }
      const updateTodo = async () => {
        try{
        const response = await axios.put(
          `${API}/${todo.id}`, todo);
        setTodos(todos.map((t) => (
          t.id === todo.id ? todo : t)));
        setTodo({});
        }
        catch (error) {
            console.log(error);
            setErrorMessage(error.response.data.message);
          }
      };
    
    useEffect(() => {
      fetchTodos();
    }, []);
    return (
      <div>
        <h2>Working with Arrays - Json</h2>
        <input  onChange={(e) => setTodo({
            ...todo, id: e.target.value })}
          value={todo.id} type="text"  className="form-control mb-2" />
        <input
          onChange={(e) => setTodo({
            ...todo, title: e.target.value })}
          value={todo.title} type="text"  className="form-control mb-2"
        />
        <textarea
          onChange={(e) => setTodo({ ...todo,
            description: e.target.value })}
          value={todo.description} type="text"  className="form-control mb-2"
        />
        <input
          onChange={(e) => setTodo({
            ...todo, due: e.target.value })}
          value={todo.due} type="date"  className="form-control mb-2"
        />
        <label>
          <input
            onChange={(e) => setTodo({
              ...todo, completed: e.target.checked })}
            value={todo.completed} type="checkbox"  className="form-check-input mb-2 ml-2"
          />
          Completed
        </label><br/>
        <button onClick={postTodo} className="btn btn-primary mt-2" >
          Post Todo
        </button>
        <button onClick={updateTodo} className="btn btn-primary mt-2">
        Update Todo
      </button>
        <ul className="list-group mt-3">
          {todos.map((todo) => (
            <li key={todo.id} className="list-group-item">
              <input 
                checked={todo.completed}
                type="checkbox" className="form-check-input" readOnly
              />
              {todo.title}
              <p>{todo.description}</p>
              <p>{todo.due}</p>
              <button onClick={() => fetchTodoById(todo.id)} className="btn btn-primary me-2" >
                Edit
              </button>
              <button onClick={() => deleteTodo(todo)}
                     className="btn btn-danger me-2">
                Remove
              </button>
            </li>
          ))}
        </ul>
        {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}
      </div>
    );
  
}
export default WorkingWithArraysJson;