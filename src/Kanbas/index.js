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
import db from "./Database"
import { useState } from 'react';
import store from './store';
import { Provider } from 'react-redux';

function Kanbas() {
    //const courses = db.courses;
  const [courses,setCourses] = useState(db.courses)
  const [course, setCourse] = useState({
    name: "New Course",      number: "CS.6785.9870",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });

  const addNewCourse = () => {
    setCourses([...courses,
              { ...course,
                _id: new Date().getTime() }]);
  };

  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = ()=>{
    setCourses(courses.map((c)=>{
      if(c._id==course._id){
        return course;
      }
      else{
        return c;
      }
    }))
  }

    return(
      <Provider store={store}>
       <div>
         <Nav/>
         <KanbasNavigation/>
       <div>
         <Routes>
         <Route path="/" element={
            <Dashboard
            courses={courses}
            course={course}
            setCourse={setCourse}
            addNewCourse={addNewCourse}
            deleteCourse={deleteCourse}
            updateCourse={updateCourse}/>
            }/>
            <Route path="/Dashboard" element={
            <Dashboard
            courses={courses}
            course={course}
            setCourse={setCourse}
            addNewCourse={addNewCourse}
            deleteCourse={deleteCourse}
            updateCourse={updateCourse}/>
            }/>
            <Route path="Courses/:courseId/*" element={<Courses courses={courses}/>}/>

         </Routes>
       </div>
       </div>
       </Provider>
    );
 }
 export default Kanbas
 
 