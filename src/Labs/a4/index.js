import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from './PassingDataOnEvent';
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariable from "./BooleanStateVariable";
import StringStateVariable from "./StringStateVariable";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ReduxExamples from "./ReduxExamples";
const Assignment4 = () => {
  function sayHello() {
    alert("Hello");
  }

 return(
   <>
     <h1>Assignment 4</h1>
     <Add a={1} b={2}/>
     <ClickEvent/>
     <PassingDataOnEvent/>
     <PassingFunctions theFunction={sayHello} />
     <EventObject/>
     <Counter/>
     <BooleanStateVariable/>
     <StringStateVariable/>
     <DateStateVariable/>
     <ObjectStateVariable/>
     <ReduxExamples/>
   </>
 );
};
export default Assignment4;