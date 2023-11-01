import React, { useState } from "react";
import ChildStateComponent from "./ChildStateComponent";
function ParentStateComponent(){
    const [counter,setCounter]=useState(456);
    return(
        <div>
        <ChildStateComponent>
            counter={counter}
            setCounter={setCounter}
        </ChildStateComponent>
        </div>
    )
}
export default ParentStateComponent;