import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaPlus, FaList, FaCheckCircle, FaEllipsisV, FaEdit } from 'react-icons/fa';
import "./style.css";
import AssignmentEditor from "./AssignmentEditor";
import { useNavigate } from 'react-router-dom';

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignment;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const navigate = useNavigate();
 const OpenEditor = (id) =>{
  navigate(`/Kanbas/Courses/RS101/Assignments/${id}`);
 }

  return (
    <div>
      <h2>Assignments for course {courseId}</h2>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <input type="text" className="form-control w-25 p-2" placeholder="Search assignment" />
          </div>
          <div className="col md-6 float-end ml-auto">
            <button className="btn bg-light border-secondary me-2">
              <FaPlus className="me-2" />
              Group
            </button>
            <button className="btn btn-danger" onClick={()=>OpenEditor("A401")}>
              <FaPlus className="me-2" />
              Assignment
            </button>
          </div>
        </div>
      </div>
      <div className="list-group assignment-list-group mt-4">
      <div class="list-group-item list-group-item-secondary list-group-item-secondary d-flex justify-content-between align-items-center">
        <div>
        ASSIGNMENTS
        </div>
        <div>
        <button class="btn bg-light border-secondary rounded-pill me-2">
        40% of total
       </button>
      <FaPlus className="mb-1 me-2" /> 
      <FaEllipsisV className="mb-1" /> 
      </div>
      </div>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div className="d-flex w-100 justify-content-between align-items-center">
              <div className="me-5">
                <FaList className="me-5" /> 
                <FaEdit className="font-color-g" />
              </div>
              <div className="me-3 flex-grow-1">
                <h5>{assignment.title}</h5>
                <p><span className="todo-text me-2">Module</span>| Due: {assignment.due} | {assignment.points}</p>
              </div>
              <div className="ml-3">
                <FaCheckCircle className="me-2 mb-1 font-color-g" /> 
                <FaPlus className="me-2 mb-1" /> 
                <FaEllipsisV className="mb-1" /> 
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Assignments;
