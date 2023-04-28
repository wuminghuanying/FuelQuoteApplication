import React from "react";
import './homepage.css';
import background from './fuel-truck.jpeg';

const Homepage = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="homepage" style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}>
            <h1 className="title-hp">
                Your FuelQuote Application
            </h1>
        </div>
    )
}
export default Homepage;