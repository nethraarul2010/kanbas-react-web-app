import * as client from "./client";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/project/account");
  };
  return (
    <div>
      <h1>Signin</h1>
      <input className="form-control w-50" placeholder="Enter a username" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      <input className="form-control w-50" type="password" placeholder="Enter a password" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      <button className="btn btn-primary" conClick={signin}> Signin </button>
    </div>
  );
}
export default Signin;