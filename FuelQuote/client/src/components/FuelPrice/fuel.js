import React from "react";
import axios from 'axios'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import "./fuel.css";


const FuelPrice = () => {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));
    const cpm = JSON.parse(localStorage.getItem("cpm"));

    const [cpmData, setCpmData] = useState({});
    const [fuelPriceData, setFuelPriceData] = useState({
        suggested_price: null,
        total_price: null
    });


    const [fuelPrice, setFuelPrice] = useState({
        gallon_requested: 0,
        address1: cpm.address1,
        address2: cpm.address2,
        city: cpm.city,
        state: cpm.state,
        zipcode: cpm.zipcode,
        date: "",
        suggested_price: fuelPriceData.suggestedPrice,
        total_price: fuelPriceData.totalAmountDue,
        user_id: user.user_id
    });

    const handleChange = (e) => {
        setFuelPrice({
            ...fuelPrice,
            [e.target.id]: e.target.value
        });
    };

    const handleChangeInt = (e) => {
        setFuelPrice({
            ...fuelPrice,
            [e.target.id]: parseInt(e.target.value)
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5500/api/fuelprice", fuelPrice);

        } catch (error) {
            console.log("in catch");
            console.log(error);
        }
    };

    const handleQuote = async (e) => {
        e.preventDefault();
        try {
            console.log(fuelPrice.gallon_requested, fuelPrice.state, user.user_id);
            const response = await axios.post("http://localhost:5500/api/suggestedprice", {
                gallon_requested: fuelPrice.gallon_requested,
                state: fuelPrice.state,
                user_id: user.user_id
            })
            console.log("res ", response.data);
            setFuelPriceData({
                suggested_price: response.data.suggestedPrice,
                total_price: response.data.totalAmountDue
            });

            console.log("fp ", fuelPriceData);
            // .then((response) => {
            //     // console.log("res ", response.data.suggestedPrice);
            //     setFuelPriceData({
            //         suggested_price: response.data.suggestedPrice,
            //         total_price: response.data.totalAmountDue
            //     });
            //     console.log("fp ", fuelPriceData);
            // })
            // .catch((error) => {
            //     console.log("error", error);
            // });

            // do localstorage

            
        } catch (error) {
            console.log("in catch");
            console.log(error);
        }
    };


    const getCPMDetails = () => {
        try {
            if (cpm === null) {
                const response = axios.get("http://localhost:5500/api/getCPMById/" + user.cpm_id)
                    .then((response) => {
                        setCpmData(response.data);
                        localStorage.setItem("cpm", JSON.stringify(response.data));
                    })
                    .catch((error) => {
                        console.log("error", error);
                    });


            } else {
                const response = axios.get("http://localhost:5500/api/getCPMById/" + cpm._id)
                    .then((response) => {
                        setCpmData(response.data);
                    })
                    .catch((error) => {
                        console.log("error", error);
                    });
            }
        }
        catch (error) {
            console.log("in catch");
            console.log(error);
        }
    }


    return (
        <div className="form">

            {getCPMDetails()}
            <label htmlFor="gallon_requested">Gallons Requested:
                <input
                    type="Number"
                    placeholder="Enter a number"
                    id="gallon_requested"
                    className="rInput"
                    onChange={handleChangeInt}
                    min={0}
                    required
                />
            </label><br />
            <label htmlFor="address1">Delivery Address 1:
                <input
                    type="text"
                    placeholder={cpmData.address1}
                    id="address1"
                    className="rInput"
                    onChange={handleChange}
                    maxLength="100"
                    readOnly
                    required
                />
            </label><br />

            <label htmlFor="address2">Delivery Address 2:
                <input
                    type="text"
                    placeholder={cpmData.address2}
                    id="address2"
                    onChange={handleChange}
                    className="rInput"
                    maxLength="100"
                    readOnly
                />
            </label><br />

            <label htmlFor="City">City:
                <input
                    type="text"
                    placeholder={cpmData.city}
                    id="city"
                    onChange={handleChange}
                    className="rInput"
                    maxLength="100"
                    readOnly
                    required
                />
            </label><br />

            <label htmlFor="State">State:
                <input name="state"
                    required
                    className="rInput"
                    onChange={handleChange}
                    id="state"
                    placeholder={cpmData.state}
                    type="text"
                    readOnly
                >
                </input>
            </label><br />

            <label htmlFor="zipcode">Zip Code:
                <input
                    type="text"
                    placeholder={cpmData.zipcode}
                    id="zipcode"
                    className="rInput"
                    onChange={handleChange}
                    minLength="5"
                    maxLength="9"
                    readOnly
                    required
                />
            </label><br />
            <label htmlFor="date">Select a date:
                <input
                    type="date"
                    id="date"
                    onChange={handleChange}
                    min={new Date(Date.now()).toISOString().split("T")[0]}
                    name="date"
                />
            </label><br /><br />
            <label htmlFor="suggested price">Suggested Price:
                <input
                    type="Number"
                    placeholder={fuelPriceData ? "Press Get Quote to get a price" : fuelPriceData.suggested_price}
                    id="suggested_price"
                    className="rInput"
                    readOnly
                    min={0}
                    required
                />
            </label><br /><br />

            <label htmlFor="total price">Total Price:
                <input
                    type="Number"
                    placeholder={fuelPriceData ? "Press Get Quote to get a price" : fuelPriceData.total_price}
                    id="suggested_price"
                    className="rInput"
                    readOnly
                    min={0}
                    required
                />
            </label><br /><br />

            <button type="submit"
                className="calculate"
                onClick={handleQuote}
                disabled={fuelPrice.gallon_requested === 0 || fuelPrice.address1 === "" || fuelPrice.city === "" || fuelPrice.state === "" || fuelPrice.zipcode === "" || fuelPrice.date === ""}
            >
                Get Quote</button>

                <button type="submit"
                className="calculate"
                onClick={handleSubmit}
                disabled={fuelPrice.gallon_requested === 0 || fuelPrice.address1 === "" || fuelPrice.city === "" || fuelPrice.state === "" || fuelPrice.zipcode === "" || fuelPrice.date === "" || fuelPrice.suggested_price === 0 || fuelPrice.total_price === 0}
            >
                Submit quote</button>


        </div>
    )
}

export default FuelPrice;

