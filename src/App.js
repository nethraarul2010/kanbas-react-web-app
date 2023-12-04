import logo from './logo.svg';
import React, { Component }  from 'react';
import Labs from './Labs';
import Kanbas from './Kanbas';
import { HashRouter } from 'react-router-dom';
import {Routes, Route, Navigate} from "react-router";
import Hello from './Hello';
import Project from './Project/users';


function App() {
  return (
    <HashRouter>
      <div>
      <Routes>
      <Route path="/"         element={<Navigate to="/Labs"/>}/>
      <Route path="/Kanbas/*" element={<Kanbas/>}/>
      <Route path="/Labs/*"element={<Labs/>}/>
      <Route path="/Hello/*" element={<Hello/>}/>
      <Route path="/Project/*" element={<Project/>}/>
      </Routes>
      </div>
    </HashRouter>
  );
}
export default App;
