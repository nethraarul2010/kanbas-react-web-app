import React, { useState, useEffect } from "react";
import { BsTrash3Fill, BsPlusCircleFill, BsFillCheckCircleFill, BsPencil } from "react-icons/bs";
import * as client from "./client";
import { Link } from "react-router-dom";

function UserTable() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ username: "", password: "", role: "USER" });

  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.error(err);
    }
  };

  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.error(err);
    }
  };

  const selectUser = async (user) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.error(err);
    }
  };

  const updateUser = async () => {
    try {
      await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.error(err);
    }
  };

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">User List</h1>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Password</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <input
                className="form-control"
                value={user.username}
                placeholder="Username"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </td>
            <td>
              <input
                className="form-control"
                value={user.firstName}
                placeholder="First name"
                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              />
            </td>
            <td>
              <input
                className="form-control"
                value={user.lastName}
                placeholder="Last name"
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            </td>
            <td>
              <input
                className="form-control"
                value={user.password}
                type="password"
                placeholder="Password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </td>
            <td>
              <select
                className="form-control"
                value={user.role}
                onChange={(e) => setUser({ ...user, role: e.target.value })}
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td className="text-nowrap">
              <BsPlusCircleFill onClick={createUser} className="text-success fs-4 me-2 cursor-pointer" />
              <BsFillCheckCircleFill onClick={updateUser} className="text-success fs-4 cursor-pointer" />
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <Link to={`/project/account/${user._id}`}>{user.username}</Link>
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td className="text-nowrap">
                <button className="btn btn-warning me-2">
                  <BsPencil onClick={() => selectUser(user)} />
                </button>
                <button className="btn btn-danger" onClick={() => deleteUser(user)}>
                  <BsTrash3Fill />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;

/* import React, { useState, useEffect } from "react"
import { BsTrash3Fill, BsPlusCircleFill,BsFillCheckCircleFill,BsPencil } from "react-icons/bs"
import * as client from "./client";
import { Link } from "react-router-dom";
function UserTable() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ username: "", password: "", role: "USER" });
  const deleteUser = async (user) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };

  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.log(err);
    }
  };
  const selectUser = async (user) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => { fetchUsers(); }, []);
  return (
    <div>
      <h1>User List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          <tr>
            <td>
              <input className="form-control" value={user.username} placeholder="Username" onChange={(e) => setUser({ ...user, username: e.target.value })}/>
            </td>
            <td>
              <input  className="form-control" value={user.firstName} placeholder="First name" onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
            </td>
            <td>
              <input className="form-control" value={user.lastName} placeholder="Last name" onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
            </td>
            <td>
            <input className="form-control" value={user.password} placeholder="Password" onChange={(e) => setUser({ ...user, password: e.target.value })}/>
            </td>
            <td>
              <select className="form-control" value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td className="text-nowrap">
            <BsPlusCircleFill onClick={createUser}
      className="text-success fs-1 text me-2" />
    <BsFillCheckCircleFill onClick={updateUser}
      className="me-2 text-success fs-1 text" />
  </td>
          </tr>

        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
            <Link to={`/project/account/${user._id}`}>
              <td>{user.username}</td>
              </Link>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td className="text-nowrap">
    <button className="btn btn-warning me-2">
      <BsPencil onClick={() => selectUser(user)} />
    </button>

    <button className="btn btn-danger me-2" onClick={() => deleteUser(user)}>
                  <BsTrash3Fill />
                </button>

  </td>
            </tr>))}
        
        </tbody>
      </table>
    </div>
  );
}
export default UserTable;

 */