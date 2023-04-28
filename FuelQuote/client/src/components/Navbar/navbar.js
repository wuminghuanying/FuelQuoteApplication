import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
  // const [time, setTime] = useState(new Date());

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    console.log("navbar", loggedInUser);
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cpm");
    setUser(null);
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <a href="/">
        <h1 className="title">FuelQuote</h1>
      </a>
      <div>
        {user ? (
          <div>
            <div className="welcome">
              <h2 className="login-prompt">Welcome {user.name}</h2>
            </div>
            <div className="button-container">
              <button
                className="nav-button"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </button>

              <button
                className="nav-button"
                onClick={() => {
                  navigate("/fuelprice");
                }}
              >
                Fuel Price
              </button>
              {/* <button
                className="nav-button"
                onClick={() => {
                  navigate("/cpm");
                }}
              >
                CPM
              </button> */}
              <button
                className="nav-button"
                onClick={() => {
                  navigate("/history");
                }}
              >
                History
              </button>
              <button className="nav-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        ) : (
          <>
            <h5 className="login-prompt">Please Login or Register to continue</h5>

            <div className="button-container">
              <button className="nav-button" onClick={handleLogin}>
                Login
              </button>
              <button
                className="nav-button"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
