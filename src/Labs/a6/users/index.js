import React from "react";
import Signin from "./signin";
import { Route, Routes, Navigate } from "react-router-dom"; // Note: Import from "react-router-dom" instead of "react-router"

function Assignment6() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signin/>} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default Assignment6;
