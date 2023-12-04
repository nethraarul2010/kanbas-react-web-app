import React from "react";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
function Navbar() {
    const { pathname } = useLocation();
    return (
      <nav className="nav nav-tabs mt-2">
          <li>
            <Link to="/project/home"  className={`nav-link ${pathname.includes("home") ? "active" : ""}`}>Home</Link>
          </li>
          <li>
            <Link to="/project/signin"  className={`nav-link ${pathname.includes("signin") ? "active" : ""}`}>Sign In</Link>
          </li>
          <li>
            <Link to="/project/signup"  className={`nav-link ${pathname.includes("signup") ? "active" : ""}`}>Sign Up</Link>
          </li>
        <li>
        <Link  to="/project/account"  className={`nav-link ${pathname.includes("account") ? "active" : ""}`}>Account</Link>  
        </li>
      </nav>
    );
  }
  export default Navbar;
  