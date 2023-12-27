import React from "react";
import { Link } from "react-router-dom";

const NavBarLogin = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/Login">
              Admin Login
            </Link>
            </li>
          
        </ul>
        
      </div>
    </nav>
  );
};

export default NavBarLogin;