import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignment.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <h5>Assignment Name</h5>
      <input value={assignment.title}
             className="form-control mb-2" />
     <h5>Points</h5>
<input
  type="text"
  className="form-control mb-2"
  id="assignmentPoints"
  value={assignment.points}
/>

<h5>Group</h5>
<select
  className="form-control mb-2"
  id="assignmentGroup"
  value={assignment.group}
>
  <option value="ASSIGNMENTS">ASSIGNMENTS</option>
</select>

<h5>Display Grade as</h5>
<select
  className="form-control mb-2"
  id="assignmentGrade"
  value={assignment.grade}
>
  <option value="Percentage">Percentage</option>
</select>

<h5>Submission Type</h5>
<select
  className="form-control mb-2"
  id="assignmentSubmissionType"
  value={assignment.submissionType}
>
  <option value="Online">Online</option>
</select>

<h5>Online Entry Options</h5>
<div className="form-check mb-2">
  <input
    type="checkbox"
    className="form-check-input"
    id="assignmentOnlineEntry1"
    checked={assignment.onlineEntry.includes("Text Entry")}

  />
  <label className="form-check-label" htmlFor="assignmentOnlineEntry1">Text Entry</label>
</div>
<div className="form-check mb-2">
  <input
    type="checkbox"
    className="form-check-input"
    id="assignmentOnlineEntry2"
    checked={assignment.onlineEntry.includes("Website URL")}
  
  />
  <label className="form-check-label" htmlFor="assignmentOnlineEntry2">Website URL</label>
</div>
<div className="form-check mb-2">
  <input
    type="checkbox"
    className="form-check-input"
    id="assignmentOnlineEntry3"
    checked={assignment.onlineEntry.includes("Media Recordings")}

  />
  <label className="form-check-label" htmlFor="assignmentOnlineEntry3">Media Recordings</label>
</div>
<div className="form-check mb-2">
  <input
    type="checkbox"
    className="form-check-input"
    id="assignmentOnlineEntry4"
    checked={assignment.onlineEntry.includes("Student Annotation")}

  />
  <label className="form-check-label" htmlFor="assignmentOnlineEntry4">Student Annotation</label>
</div>
<div className="form-check mb-2">
  <input
    type="checkbox"
    className="form-check-input"
    id="assignmentOnlineEntry5"
    checked={assignment.onlineEntry.includes("File Uploads")}
  />
  <label className="form-check-label" htmlFor="assignmentOnlineEntry5">File Uploads</label>
</div>

<h5>Submission Attempts</h5>
<select
  className="form-control mb-2"
  id="submissionAttempts"
  value={assignment.submissionAttempts}
>
  <option value="Unlimited">Unlimited</option>
</select>

<h5>Plagiarism Review</h5>
<select
  className="form-control mb-2"
  id="plagiarismReview"
  value={assignment.plagiarismReview}

>
  <option value="None">None</option>
</select>

<h5>Group Assignments</h5>
<div className="form-check mb-2">
  <input
    type="checkbox"
    className="form-check-input"
    id="groupAssignments"
    checked={assignment.groupAssignments}

  />
  <label className="form-check-label" htmlFor="groupAssignments">This is a group assignment</label>
</div>

<h5>Peer Reviews</h5>
<div className="form-check mb-2">
  <input
    type="checkbox"
    className="form-check-input"
    id="peerReviews"
    checked={assignment.peerReviews}

  />
  <label className="form-check-label" htmlFor="peerReviews">Requires Peer Reviews</label>
</div>

<h5>Assign To</h5>
<input
  className="form-control mb-2"
  id="assignmentAssignTo"
  value={assignment.assignTo}

/>

<h5>Due</h5>
<input
  type="date"
  className="form-control mb-2"
  id="due"
  value={assignment.due}

/>

<h5>Available From</h5>
<input
  type="date"
  className="form-control mb-2"
  id="availableFrom"
  value={assignment.availableFrom}

/>

<h5>Until</h5>
<input
  type="date"
  className="form-control mb-2"
  id="until"
  value={assignment.until}

/>

      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger me-2 mb-3">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2 mb-3">
        Save
      </button>
    </div>
  );
}


export default AssignmentEditor;