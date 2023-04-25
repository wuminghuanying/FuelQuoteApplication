import React from "react";
import { useState } from "react";
import axios from "axios";
import "./register.css"
import {useNavigate} from 'react-router-dom';

const Register = () => {

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

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            console.log(credentials);
            const response = await axios.post("http://localhost:5500/api/register", credentials);
            // return <h1>Account created successfully</h1>
            navigate("/login");
            // console.log("in try");
        } catch (error) {
          
            if (error.response.status === 400) {
                alert("Username already exists");
            }
        }
    };

    return (
        <div className="form">
            <label htmlFor="Username">Username: 
                <input
                    type="text"
                    placeholder="Username"
                    id="Username"
                    className="rInput"
                    maxLength="50"
                    onChange={handleChange}
                    required
                />
            </label><br/>

            <label htmlFor="Password">Password: 
                <input
                    type="password"
                    placeholder="Password"
                    id="Password"
                    className="rInput"
                    maxLength="100"
                    onChange={handleChange}
                    required
                />
            </label><br/>

            <button className="Create"
            onClick={handleRegister}
            disabled={!credentials.Username || !credentials.Password}
            >
            Register
            </button>

            

        </div>
    )
}

export default Register;