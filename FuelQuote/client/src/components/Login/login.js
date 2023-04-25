import React from "react";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
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
      console.log(response);
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      if (error.response.status === 400) {
        alert("Invalid username or password");
      }
    }
  };

  return (
    <div className="form">
      <label htmlFor="Username">
        Username
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
        Password
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
