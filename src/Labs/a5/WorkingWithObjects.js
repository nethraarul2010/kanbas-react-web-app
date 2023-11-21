import React,{useState} from "react";
function WorkingWithObjects(){
    const [assignment,setAssignment]=useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
    });
    const handleChange=()=>{
        setAssignment({...assignment,completed:(!assignment.completed)})
    }
    const URL = "https://kanbas-node-server-app-uhp6.onrender.com/a5/assignment"
    return(
        <div>
            <h3>Working with objects</h3>
            <h4>Retreiving Objects</h4>
            <a href={URL}
         className="btn btn-primary me-2">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a
        href={`${URL}/title`}
        className="btn btn-primary me-2">
        Get Title
      </a>
      <h4>Modifying properties</h4>
      <a
        href={`${URL}/title/${assignment.title}`}
        className="btn btn-primary me-2">
        Get Updated Title
      </a>
      <input onChange={(e)=>setAssignment({...assignment,title:e.target.value})}
       value={assignment.title}
       className="form-control mb-2 w-75"
       type="text"/>
       <h5>Modifying score and completed</h5>
       <a
        href={`${URL}/score/${assignment.score}`}
        className="btn btn-primary me-2">
        Get Updated Score
      </a>
      <input onChange={(e)=>setAssignment({...assignment,score:e.target.value})}
       value={assignment.score}
       className="form-control mb-2 w-75"
       type="number"/>
         <a
        href={`${URL}/completed/${assignment.completed}`}
        className="btn btn-primary me-2">
        Get Updated Completion
        </a>
      <label>
      <input 
      type="checkbox"
      onChange={handleChange}
      checked={assignment.completed}
       value={assignment.completed}
       />Completed
        </label>
        </div>
    
        
    );
}
export default WorkingWithObjects;