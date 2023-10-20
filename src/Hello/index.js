import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import Nav from '../Nav';
function Hello() {
    return(
       <div>
            <Nav/>
            <h1>Hello world!</h1>
       </div>
    );
 }
 export default Hello