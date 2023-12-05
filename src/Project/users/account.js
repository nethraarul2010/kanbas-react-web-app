import * as client from "./client";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Account() {
const { id } = useParams();
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
  };

  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };
  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };

  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, []);

  return (
    <div className="container mt-5 w-50">
     <h1 className="text-center">Account</h1>
      {account && (
        <div>
            <input className="form-control mb-2" placeholder="Username" value={account.username}
            onChange={(e) => setAccount({ ...account,
              username: e.target.value })}/> 
          <input className="form-control mb-2" type="password" placeholder="Password"value={account.password}
            onChange={(e) => setAccount({ ...account,
              password: e.target.value })}/>
          <input className="form-control mb-2" placeholder="First name" value={account.firstName}
            onChange={(e) => setAccount({ ...account,
              firstName: e.target.value })}/>
          <input className="form-control mb-2" placeholder="Last name" value={account.lastName}
            onChange={(e) => setAccount({ ...account,
              lastName: e.target.value })}/>
          {/* <input className="form-control mb-2" placeholder="DOB" value={account.dob}
            onChange={(e) => setAccount({ ...account,
              dob: e.target.value })}/> */}
          <input className="form-control mb-2" placeholder="Email" value={account.email}
            onChange={(e) => setAccount({ ...account,
              email: e.target.value })}/>
          <select className="form-control mb-2" onChange={(e) => setAccount({ ...account,
              role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <div className="mt-4 text-center">
          <button className="btn btn-primary me-2" onClick={save}>
     Save
  </button>
  <button className="btn btn-danger me-2" onClick={signout}>
    Signout
  </button>
  <Link to="/project/admin/users" className="btn btn-warning ">
    Users
  </Link>
  </div>
        </div>
      )}
    </div>
  );
}
export default Account;