import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './LogIn.css'

function LogIn() {
  const domain = ""
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/auth/login/`, {
        username,
        password,
      });

      if (response.status === 200) {
        // Successful login
        const token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("isAuthenticated", true);
        console.log("LOGGED IN SUCCESSFULLY");
        navigate("/search");

      } else {
        setError(response.data.message || "Authentication failed");
        localStorage.setItem("isAuthenticated", false);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <>
      <div className="login-body">
        <div className="login-container">
          <h1>Log in</h1>

          <form onSubmit={handleSubmit}>
            <div className="login-form">
              <input
                type="text"
                name="username"
                placeholder="Emai"
                className="inputClass"
                id="usernameInput"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <i className="bx bxs-user-circle"></i>
            </div>

            <div className="login-form">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="inputClass"
                id="userpassInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
              <i className="bx bxs-lock-alt"></i>
            </div>

            {error && <div className="error-message">{error}</div>}

            <button className="btn" type="submit">
              Login
            </button>

            <div className="register-link">
              Don't have an account? <Link to="/sign_up">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LogIn;
