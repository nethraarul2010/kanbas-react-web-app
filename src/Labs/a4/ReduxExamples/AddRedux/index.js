import { UseSelector,useDispatch, useSelector } from "react-redux";
import { add } from "./addReducer";
import { useState } from "react";
import React from "react";
function AddRedux(){
const [a,setA] = useState(12);
const [b,setB] = useState(5);
const {sum} = useSelector((state)=>state.addReducer);
const dispatch=useDispatch();
return(
    <div>
        <h2>Add redux</h2>
        <h2>{a}+{b}={sum}</h2>
        <input 
        type="number"
        value={a}
        onChange={(e)=>setA(parseInt(e.target.value))}
        className="form-control"/>
           <input
        type="number"
        value={b}
        onChange={(e) => setB(parseInt(e.target.value))}
        className="form-control"
      />
      <button
        onClick={() => dispatch(add({ a, b }))}
        className="btn btn-primary"
      >
        Add Redux
      </button>
    </div>
)
}
export default AddRedux;