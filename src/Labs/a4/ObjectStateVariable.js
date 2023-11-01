import React from "react";
import { useState } from "react";
function ObjectStateVariable(){
    let [person,setPerson]=useState({name:"Nethra",age:24})
    return(
        <div>
        <h2>Object state variable</h2>
        <pre>{JSON.stringify(person,null,2)}</pre>
        <input 
        value={person.name} 
        onChange={(e)=>{setPerson({...person, name:e.target.value})}}
        />
         <input 
        value={person.age} 
        onChange={(e)=>{setPerson({...person, age: parseInt(e.target.value)})}}
        />
        </div>
    );
};
export default ObjectStateVariable;