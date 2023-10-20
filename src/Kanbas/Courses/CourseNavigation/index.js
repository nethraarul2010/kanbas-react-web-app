import { Link, useParams, useLocation } from "react-router-dom";
import React from "react";
import "./style.css";
function CourseNavigation() {
  const links = ["Home", "Modules","Piazza","Zoom Meetings", "Assignments", "Grades","Quizzes","People","Panopto Videos","Discussions","Announcements","Pages","Files","Rubrics","Outcomes","Collaborations","Syllabus","Settings",];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="list-group account-navigation" style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item account-navigaton ${pathname.includes(link) && "active"}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default CourseNavigation;