import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function FunctionParenthesisAndParameters(){
    const square = a => a * a;
    const plusOne = a => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);
    
return(
    <>
    <h1>Parenthesis and Parameters</h1>
    twoSquared = {twoSquared}<br/>
    square(2) = {square(2)}<br/>
    threePlusOne = {threePlusOne}<br/>
    plusOne(3) = {plusOne(3)}<br/>
    </>
)
};
export default FunctionParenthesisAndParameters;
