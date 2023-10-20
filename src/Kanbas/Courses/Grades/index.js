import React from "react";
import db from "../../Database";
import { useParams } from "react-router-dom";
import GradeButton from "./GradeButton";
import "./style.css"
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignment.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

  return (
    <div>
    <div className="grades-width">
    <h4>Grades</h4>
    <GradeButton/>
    <div>
      <div className="table-responsive">
        <table className="table table-striped text-center table-responsive">
          <thead>
            <tr>
              <th>Student Name</th>
              {assignments.map((assignment) => (
                <th key={assignment._id}>{assignment.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);

              return (
                <tr key={user._id}>
                  <td>{user.firstName} {user.lastName}</td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
                    );

                    return (
                      <td key={assignment._id}>
                        {grade ? grade.grade : ""}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Grades;
