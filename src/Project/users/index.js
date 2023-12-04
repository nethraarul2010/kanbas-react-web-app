import React from "react";
import Signin from "./signin";
import Account from "./account";
import { Route, Routes, Navigate } from "react-router-dom"; // Note: Import from "react-router-dom" instead of "react-router"
import UserTable from "./table";
import Signup from "./signup";
import Navbar from "./ProjectNav";
import { Nav } from "react-bootstrap";
import Home from "./home";
function Project() {
  return (
    <div>
              <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/signin" element={<Signin />} />
        <Route path="/account" element={<Account />} />
        <Route path="/admin/users" element={<UserTable />}/>
        <Route path="/account/:id" element={<Account />} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default Project;
