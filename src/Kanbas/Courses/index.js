import db from "../../Kanbas/Database";
import { BrowserRouter, Navigate, Route, Routes, useParams,Outlet } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import React from "react";
import Modules from "./Modules";
import {List} from 'react-bootstrap-icons';
import Assignments from "./Assignments";
import "./style.css";
import Home from "./Home";
import { FaBars} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import axios from "axios";
import { useState,useEffect } from "react";
function Courses() {
  const { courseId } = useParams();
  const URL = "http://localhost:4000/api/courses";
  const { pathname } = useLocation();
  const lastItem = pathname.substring(pathname.lastIndexOf('/') + 1);
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);
  return (
    <div>
    <nav className="wd-breadcrumb-custom" >
    <ol className="breadcrumb">
    <li><button className="menu-icon"><FaBars/></button></li>
    <li className="breadcrumb-item">{course.name}</li>
    <li className="breadcrumb-item active" aria-current="page">{lastItem}</li>
    </ol> 
    <span className="wd-courseNav-spanText">202310_2_Fall_2022 Semester</span>                       
    </nav>
      <CourseNavigation/>
      <div>
        <div className="overflow-y-scroll position-fixed bottom-0 end-0 mt-5 "
          style={{
            left: "320px",
            top: "50px",
            
          }}
        >
        <Routes>
        <Route path="/" element={<Navigate to="Home" />}/>
            <Route path="Home" element={<Home/>}/>
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId"
                   element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<Grades/>} />
        </Routes>
      </div>
      </div>
    <Outlet/>
    </div>
  );
}
export default Courses;