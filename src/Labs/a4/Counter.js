import { useState } from "react";
import React from "react";
function Counter(){
    let [count,setCount] = useState(7);
    console.log(count);
    return(
        <div>
        <h2>Counter: {count}</h2>
        <button 
        onClick={()=>{setCount(count+1)}}>
            Up
        </button>
        <button 
        onClick={()=>{setCount(count-1)}}>
        Down
        </button>
        </div>
    );
};
export default Counter