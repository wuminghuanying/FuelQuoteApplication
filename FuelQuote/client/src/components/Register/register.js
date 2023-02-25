import React from "react";
import "./register.css"

const register = () => {

    return (
        <div className="form">
            <label htmlFor="Username">Username
                <input
                    type="text"
                    placeholder="Username"
                    id="Username"
                    className="rInput"
                    maxLength="50"
                    required
                />
            </label><br/>



            <label htmlFor="Password">Password
                <input
                    type="text"
                    placeholder="Password"
                    id="Password"
                    className="rInput"
                    maxLength="100"
                    required
                />
            </label><br/>





            <button className="Create">Create</button>

        </div>
    )
}

export default register;