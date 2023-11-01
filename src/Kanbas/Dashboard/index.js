import { Link } from "react-router-dom";
import db from "../Database";
import React from "react";
import { useState } from "react";
import "./style.css"
import Card from "react-bootstrap/Card";
import * as Icon from 'react-bootstrap-icons';
import { CardBody, CardTitle, CardText } from "react-bootstrap";

function Dashboard(
  {courses,course,setCourse,addNewCourse,deleteCourse,updateCourse}
){
 
 const noOfCourses = courses.length;

  return (
    <div>
      <h1 class="heading">Dashboard</h1>
      <hr/>
      <h3 class="heading">Published Courses</h3>
      <h5>Course</h5>
      <div className="courses w-50 mb-2">
      <input value={course.name} className="form-control" placeholder="Enter a course name"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control" placeholder="Enter a course number"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      </div>
      <button className="btn btn-danger courses mb-2 mt-2" onClick={addNewCourse}>Add new course</button>
      <button className="btn btn-danger courses mb-2 mt-2" onClick={updateCourse}>Update course</button>
      <div class="courses">
        {courses.map((course) => (
          <Card key={course._id} className="course-card">
             <Card.Img src="/NU.png"/>
            <CardBody class="course-body">
              <Link to={`/Kanbas/Courses/${course._id}`} class="decoration">
                <CardTitle>{course.name}</CardTitle>
                <CardText>
                  {course.number}<br />
                  Start-date: {course.startDate}<br />
                  End-date: {course.endDate}
                </CardText>
                <Icon.PencilSquare className="font-color me-2" onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}/>
                <button className="btn btn-danger float-end" onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
                Delete</button>
              </Link>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
