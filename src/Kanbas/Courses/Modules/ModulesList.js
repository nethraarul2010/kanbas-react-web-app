import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./style.css";
import { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import {
  FaRegCheckCircle,
  FaPlus,
  FaCheckCircle,
  FaTimesCircle,
  FaEdit
} from "react-icons/fa";
import { findModulesForCourse,createModule } from "./client";
import * as client from "./client"
function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };


  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

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
      <ul className="list-group assignment-list-group w-100">
      <li className="w-50">
        <input className="form-control mb-2" value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>

        <textarea className="form-control mb-2" value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
        }/>

        
        <button className="btn btn-danger me-2 mb-2"  onClick={handleAddModule}>Add</button>
        <button className="btn btn-secondary mb-2"   onClick={handleUpdateModule}>Update</button>
      </li>
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item list-border-green">
              <div className="d-flex justify-content-between align-items-center">
                <div className="flex-grow-1 pt-3">
                  <h5>{module.name}</h5>
                  <p>{module.description}</p>
                  <p>{module._id}</p>
                </div>
                <div className="ml-3">
                  <FaCheckCircle className="me-2 mb-1 font-color-g" /> 
                  <FaPlus className="me-2 mb-1"/> 
                  <FaEdit className="me-2 mb-1"  onClick={() => dispatch(setModule(module))}/>

                  <FaTimesCircle className="mb-1" onClick={() => handleDeleteModule(module._id)}
/>

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
