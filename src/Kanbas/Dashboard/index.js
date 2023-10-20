import { Link } from "react-router-dom";
import db from "../Database";
import React from "react";
import "./style.css"
import Card from "react-bootstrap/Card";
import * as Icon from 'react-bootstrap-icons';
import { CardBody, CardTitle, CardText } from "react-bootstrap";

function Dashboard() {
  const courses = db.courses;
  const noOfCourses = courses.length;


  return (
    <div>
      <h1 class="heading">Dashboard</h1>
      <hr/>
      <h3 class="heading">Published Courses ({noOfCourses})</h3>
      <div class="courses">
        {courses && courses.map((course) => (
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
                <Icon.PencilSquare className="font-color"/>
              </Link>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
