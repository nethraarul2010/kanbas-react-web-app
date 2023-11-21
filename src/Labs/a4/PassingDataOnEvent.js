import React from "react";
function PassingDataOnEvent(){
    const add=(a,b)=>{
        alert(`${a}+${b}=${a+b}`)
    };
    return(
    <div>  
       <h2>Passing Data on Event</h2>
       <button className="btn btn-primary" onClick={()=>add(2,3)}> Pass 2 and 3 to add()</button>
    </div>
    );
}
export default PassingDataOnEvent