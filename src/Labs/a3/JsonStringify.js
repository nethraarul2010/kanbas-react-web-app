import React from "react";
function JsonStringfy(){
    const squares = [1, 4, 16, 25, 36];
     return(
        <>
    <h3>JSON Stringify</h3>
    squares = { JSON.stringify(squares) } <br />
    </>
     )
}
export default JsonStringfy;