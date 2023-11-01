import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import ModuleList from "../Modules/ModulesList";
import {
  FaBars,
  FaRegCheckCircle,
  FaPlus,
  FaList,
  FaCheckCircle,
  FaEllipsisV,
} from "react-icons/fa";
import Status from "./Status";

function Home() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <div>
      <div className="row">
        <div className="col-9"> {/* Adjust the column width as needed */}
        <ModuleList/>
        </div>
        <div className="col"> 
          <Status />
        </div>
      </div>
    </div>
  );
}

export default Home;
