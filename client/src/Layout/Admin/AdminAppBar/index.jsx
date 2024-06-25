import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const AdminAppBar = () => {
  return (
    <>
      <nav className="nav">
        <div className="logo">
          <Link>
            <h1>Admin Panel</h1>
          </Link>
        </div>
        <ul>
          <li>
            <Link to="add-songs">
              <i class="fa-solid fa-music"></i>
              <span>Songs</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <i class="fa-solid fa-user"></i>
              <span>Users</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default AdminAppBar;
