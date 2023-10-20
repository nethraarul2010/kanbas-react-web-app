import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Assignment3 from './a3';
import HelloWorld from './a3/helloWorld';
import Kanbas from '../Kanbas';
import {Link} from "react-router-dom";
import Nav from '../Nav';

function Labs() {
    return(
       <div>
        <Nav/>
        <Assignment3/>
       </div>
    );
 }
 export default Labs;
 
 