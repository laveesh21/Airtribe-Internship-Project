import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  const [isAuthenticated, setAuthentication] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthentication(true);
    } else {
      setAuthentication(false);
    }
  }, [isAuthenticated]);

  return (
    <div className="super-nav">
      <div className="nav">
        <div className="logo">
          <h1 className="apex">Air</h1>
          <h1 className="devs">Tribe</h1>
        </div>
        <div className="nav-content">
          <ul>
            <li>
              <Link to="/search">Search Leads</Link>
            </li>
            <li>
              <Link to="/create">Add Course</Link>
            </li>
            <li>
              <Link to="/courses">Update Course</Link>
            </li>
            <li>
              <Link to="/register">Register Course</Link>
            </li>
          </ul>
        </div>
        <div className="side-tools">
          {isAuthenticated ? (
            <div className="userIcon">
                <h1>Welcome</h1>
            </div>
          ) : (
            <div className="log-button">
              <Link to="/login">
                <button className="button-login">Log in</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default NavBar;
