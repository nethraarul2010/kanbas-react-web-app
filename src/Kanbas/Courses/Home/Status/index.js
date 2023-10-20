import React from "react";
import "./style.css"
import {FaFileImport,FaHome,FaBookmark,FaBullhorn,FaFileContract,FaRegComments,FaCalendar,FaListOl} from "react-icons/fa";
function Status(){
return(
    <div>
    <div>
<h5 className="mt-2">Course status</h5>
<button class="btn btn-block bg-light text-left mt-3 align-items-center">
    <FaFileImport className="me-2 todo-text"/>
    <span>Import Existing Content</span>
</button>
<button class="btn btn-block bg-light text-left mt-3 mb-2 align-items-center">
    <FaFileImport className="me-2 todo-text"/>
    <span>Import From Commons</span>
</button>
<button class="btn btn-block bg-light text-left mb-2 align-items-center">
    <FaHome className="me-2 todo-text"/>
    <span>Import From Commons</span>
</button>
<button class="btn btn-block bg-light text-left mb-2">
    <FaBookmark className="me-2 todo-text"/>
   <span>View course stream</span>
</button>
<button class="btn btn-block bg-light text-left mb-2">
    <FaBullhorn className="me-2 todo-text"/>
    <span>New Announcement</span>
</button>
<button class="btn btn-block bg-light text-left mb-2">
    <FaFileContract className="me-2 todo-text"/>
    <span>New analytics</span>
</button>
<button class="btn btn-block bg-light text-left">
    <FaRegComments className="me-2 todo-text"/>
    <span>View Course Notification</span>
</button>
<div className="status-width mt-3">
<span>To do</span>
<FaListOl  class="float-end todo-text"/>
<hr/>
<div>
<i class="fa-solid fa-flag mr-3 todo-text"></i>
 <span class="todo-text">A1 - ENV + HTML</span>
 <i class="fa-solid fa-xmark todo-text ml-5"></i>
<div class="ml-4 sm-text">100 points. Sep 16 2023</div>
</div><br/>
<div className="mb-1 pr-4">
    <span class="md-text">View Calendar</span>
    <FaCalendar class="float-end todo-text"/>
<hr/>
<div class="align-items-center">
    <span class="todo-text">Lecture</span><br/>
    <span class="sm-text">CS 4156.Fall 2023.678496</span><br/>
    <span class="sm-text">Sept 12 at 11:45am</span><br/>
</div>
<div class="mt-3">
    <span class="todo-text">Lecture</span><br/>
    <span class="sm-text">CS 4156.Fall 2023.678496</span><br/>
    <span class="sm-text">Sept 15 at 11:45am</span><br/>
    </div>
    </div>
</div>
</div>
</div>
)
}
export default Status;
