import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/project/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  
  return (
    <div className="container mt-5">
      <h1 className="text-center">Signup</h1>
      <div className="border p-4 mx-auto" style={{ maxWidth: "400px" }}>
      {error && <div>{error}</div>}
      <input className="form-control mb-3" placeholder="Username"
        value={credentials.username}
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value })} />
      <input className="form-control mb-3" placeholder="Password" type="password"
        value={credentials.password}
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value })} />
           <div class="text-center">
      <button className="btn btn-primary" onClick={signup}>
        Signup
      </button>
      </div>
      </div>
    </div>
  );
}
export default Signup;