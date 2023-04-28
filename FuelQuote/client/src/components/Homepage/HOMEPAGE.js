import React from "react";
import {useContext} from 'react';
import { AuthContext } from "../../context/AuthContext";

const Homepage= () => {

    // const { user } = useContext(AuthContext);
    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("user");
        window.location.reload();
    };

    return (

        <div className="homepage">
            <h1 className="title">
                FuelQuote
            </h1>

            <div>
                {/* {user ? (

                    <div>
                    <h1>Welcome {user.name}</h1>
                    <button onClick={handleLogout}>Logout</button>
                    <br></br>
                    <button onClick={() => {
                        window.location.href = "/fuelprice";
                    }}>Fuel Price</button>
                    </div>

                ) : (
                    <>
                    
                       <h1>Please Login or register to continue</h1>
                          <button onClick={() => {
                            window.location.href = "/login";
                            }}>Login</button>
                            <button onClick={() => {
                            window.location.href = "/register";
                            }}>Register</button>
                    </>
                )} */}
            </div>
        </div>
    )
}
    export default Homepage;