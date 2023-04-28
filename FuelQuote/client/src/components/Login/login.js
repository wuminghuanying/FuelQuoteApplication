import React from "react";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext.js";
import "./login.css";

const Login = () => {

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    Username: "",
    Password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5500/api/login", credentials);
      localStorage.setItem("user", JSON.stringify(response.data));

      if (response.status === 200) {
        const user = JSON.parse(localStorage.getItem("user"));

        const response = axios.get("http://localhost:5500/api/getCPMById/" + user.cpm_id)
          .then((response) => {
            localStorage.setItem("cpm", JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log("error", error);
          });

        alert("Login Successful. Press OK to continue.");
        navigate("/");
      }
      else {
        alert("Our server indicates that you have not set up your profile yet. Press OK to continue.");
        navigate("/cpm");
      }
    } catch (err) {
      if (err.response.status === 400) {
        alert("Invalid username or password. Please try again.");
      }
    }
  };

  return (
    <div className="form">
      <label htmlFor="Username">
        Username:
        <input
          type="text"
          placeholder="Username"
          id="Username"
          className="rInput"
          maxLength="50"
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <br />

      <label htmlFor="Password">
        Password:
        <input
          type="password"
          placeholder="Password"
          id="Password"
          className="rInput"
          maxLength="100"
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <br />

      <button className="Login" onClick={handleLogin}>Login</button>
      <br />
      <br />Don't have an account?
      <button
        className="Register"
        onClick={() => {
          window.location.href = "/register";
        }}
      >
        Register
      </button>
    </div>
  );
};

export default Login;
