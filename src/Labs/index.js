import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Assignment3 from './a3';
import HelloWorld from './a3/helloWorld';
import Kanbas from '../Kanbas';
import {Link} from "react-router-dom";
import Assignment4 from './a4';
import { Route,Routes,Navigate } from 'react-router-dom';
import Nav from "../../src/Nav";
import { Provider } from 'react-redux';
import store from "./store";
import Assignment5 from './a5';

function Labs() {
    return(
      <div>
   <Provider store={store}>
      <Nav/>
     <Routes>
       <Route path="/"
        element={<Navigate
                  to="a3"/>}/>
       <Route path="a3"
        element={<Assignment3/>}/>
       <Route path="a4"
        element={<Assignment4/>}/>
        <Route path="a5"
        element={<Assignment5/>}/>
     </Routes>
     </Provider>
   </div>


    );
 }
 export default Labs;
 
 