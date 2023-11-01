import { useState } from "react"
import React from "react"
function StringStateVariable(){
    let [firstName,setFirstName]=useState("Nethra");
    return(
    <div>
    <h2>String State Variable</h2>
    <p>{firstName}</p>
    <input className="form-control" value={firstName}
    onChange={(e)=>setFirstName(e.target.value)}/>
    </div>
    );
};
export default StringStateVariable;