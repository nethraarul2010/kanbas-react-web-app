import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./style.css";
import {
  FaBars,
  FaRegCheckCircle,
  FaPlus,
  FaList,
  FaCheckCircle,
  FaEllipsisV
} from "react-icons/fa";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
        <div>
          <button className="btn btn-light border-secondary me-2">Collapse All</button>
          <button className="btn btn-light border-secondary me-2">View Progress</button>
          <div className="btn-group">
            <button className="btn btn-light border-secondary dropdown-toggle me-2" type="button" id="dropdownProgressButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <FaRegCheckCircle className="mr-2 font-color-g" />
              <span style={{ paddingLeft: '5px' }}>Publish All</span>
            </button>
          </div>
          <button className="btn btn-danger">
            <FaPlus />
            <span style={{ paddingLeft: '5px' }}>Module</span>
          </button>
        </div>
      </div>
      <ul className="list-group assignment-list-group">
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item list-group-item-secondary list-group-item-modules">
              <div className="d-flex w-100 justify-content-between align-items-center">
                <div>
                  <FaList className="me-3" /> {/* Add margin here */}
                </div>
                <div className="flex-grow-1 pt-3">
                  <p>{module.name}</p>
                </div>
                <div className="ml-3">
                  <FaCheckCircle className="me-2 mb-1 font-color-g" /> {/* Add margin here */}
                  <FaPlus className="me-2 mb-1" /> {/* Add margin here */}
                  <FaEllipsisV className="mb-1" /> {/* Add margin here */}
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ModuleList;
