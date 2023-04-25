import React from "react";
import axios from 'axios'
import { useState } from "react";
import {useNavigate} from 'react-router-dom';


const FuelPrice = () => {

    const navigate = useNavigate();

    const [fuelPrice, setFuelPrice] = useState({
        gallon_requested: 0,
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipcode: "",
        date:"",
        suggested_price: 0,
        user_id: "6447442350809b8ef0ccc90f",
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
            console.log(typeof fuelPrice.date);
            const response = await axios.post("http://localhost:5500/api/fuelprice", fuelPrice);
            console.log(response);
            
            navigate('/');
            
        } catch (error) {
            console.log("in catch");
            console.log(error);
        }
    };

    return (
        <div className="form">
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
            </label><br/>
            <label htmlFor="address1">Delivery Address 1:
                <input
                        type="text"
                        placeholder="Delivery Address"
                        id="address1"
                        className="rInput"
                        onChange={handleChange}
                        maxLength="100"
                        required
                    />
            </label><br/>

            <label htmlFor="address2">Delivery Address 2:
                <input
                    type="text"
                    placeholder="Address 2"
                    id="address2"
                    onChange={handleChange}
                    className="rInput"
                    maxLength="100"
                    />
            </label><br/>

            <label htmlFor="City">City:
                <input
                    type="text"
                    placeholder="City"
                    id="city"
                    onChange={handleChange}
                    className="rInput"
                    maxLength="100"
                    required
                />
            </label><br/>

            <label htmlFor="State">State:
            <select name="state" 
                required 
                onChange={handleChange}
                id="state">
                <option value="">Select a State</option>
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AR">AR</option>
                <option value="AZ">AZ</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DC">DC</option>
                <option value="DE">DE</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="IA">IA</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="MA">MA</option>
                <option value="MD">MD</option>
                <option value="ME">ME</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MO">MO</option>
                <option value="MS">MS</option>
                <option value="MT">MT</option>
                <option value="NC">NC</option>
                <option value="NE">NE</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NV">NV</option>
                <option value="NY">NY</option>
                <option value="ND">ND</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WI">WI</option>
                <option value="WV">WV</option>
                <option value="WY">WY</option>
            </select>
            </label><br/>

            <label htmlFor="zipcode">Zip Code:
                <input
                    type="text"
                    placeholder="zip code"
                    id="zipcode"
                    className="rInput"
                    onChange={handleChange}
                    minLength= "5"
                    maxLength="9"
                    required
                />
            </label><br/>
            <label htmlFor="date">Select a date:
                <input 
                        type="date" 
                        id="date"
                        onChange={handleChange}
                        name="date"
                    />
            </label><br/>
            <label htmlFor="suggested price">Suggested Price:
                <input
                        type="Number"
                        placeholder=""
                        id="suggested_price"
                        className="rInput"
                        onChange={handleChangeInt}
                        min={0}
                        required
                    />
            </label><br/>

            <button type="submit"
                className="calculate"
                onClick={handleSubmit}
                disabled={fuelPrice.gallon_requested === 0 || fuelPrice.address1 === "" || fuelPrice.city === "" || fuelPrice.state === "" || fuelPrice.zipcode === "" || fuelPrice.date === "" || fuelPrice.suggested_price === 0}
                >
                Calculate</button>
            
                
        </div>
    )
}

export default FuelPrice;

