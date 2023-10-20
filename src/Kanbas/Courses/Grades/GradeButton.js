import React from "react";
import {FaFilter,FaReact} from "react-icons/fa";

function GradeButton() {
  return (
    <div>
        <div className="align-items-center mr-3">
      <div className="col float-end mr-2 pt-4">
        <button className="btn bg-light border-secondary me-3">
          Import
        </button>
        <button className="btn bg-light dropdown-toggle border-secondary me-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Export
        </button>
        <button class="btn bg-light border-secondary">
        <FaReact/>
        </button>
      </div>
      <div className="mt-2">
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="labelSubmission">Student Names</label>
              <input type="text" className="form-control" placeholder=" 🔍 Search Students" />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="labelSubmission">Assignment Names</label>
              <input type="text" className="form-control" placeholder="🔍 Search Assignments" />
            </div>
          </div>
        </div>
        </div>
        <div className="row">
          <div className="col mt-4 mb-3">
            <button className="btn bg-light border-secondary">
              <FaFilter className="me-2"/>
              Apply filters
            </button>
          </div>
        </div>
      </div>
      </div>
  );
}

export default GradeButton;
