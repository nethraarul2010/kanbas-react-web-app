import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import KanbasNavigation from './KanbasNavigation';
import Nav from '../Nav';
import Dashboard from './Dashboard';
import { Route,Routes,Navigate } from 'react-router-dom';
import Courses from './Courses';
import CourseNavigation from './Courses/CourseNavigation';
import './style.css';
function Kanbas() {
    return(
       <div>
         <Nav/>
         <KanbasNavigation/>
       <div>
         <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/Dashboard" element={<Dashboard/>}/>
            <Route path="Courses/:courseId/*" element={<Courses/>}/>

         </Routes>
       </div>
       </div>
    );
 }
 export default Kanbas
 
 