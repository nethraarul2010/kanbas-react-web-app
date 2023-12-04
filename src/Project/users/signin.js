import * as client from "./client";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const signin = async () => {
    await client.signin(credentials);
    navigate("/project/account", { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Sign-in</h1>
      <div className="border p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <input
          className="form-control mb-3"
          placeholder="Enter a username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Enter a password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <div class="text-center">
        <button className="btn btn-primary btn-block" onClick={signin}>
          Signin
        </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
