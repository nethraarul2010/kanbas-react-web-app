import React from "react";
import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithArraysJson from "./WorkingWithArrayJson";
function Assignment5() {

    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href="https://kanbas-node-server-app-uhp6.onrender.com"
             className="list-group-item">
            Welcome
          </a>
        </div>
        <EncodingParametersInURLs/>
        <WorkingWithObjects/>
        <WorkingWithArrays/>
        <WorkingWithArraysJson/>
      </div>
    );
  }
  export default Assignment5;
