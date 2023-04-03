import React from "react";
import "./fuel.js"
import axios from 'axios'

const FuelPrice = () => {



    return (
        <div className="form">
            <label htmlFor="gallon_requested">Gallons Requested:
                <input
                        type="Number"
                        placeholder="Enter a number"
                        id="gallon_requested"
                        className="rInput"
                        min={0}
                        required
                    />
            </label><br/>
            <label htmlFor="address1">Delivery Address:
                <input
                        type="text"
                        placeholder="Delivery Address"
                        id="address1"
                        className="rInput"
                        maxLength="100"
                        required
                    />
            </label><br/>

            <label htmlFor="address2">Delivery Address 2:
                <input
                    type="text"
                    placeholder="Address 2"
                    id="address2"
                    className="rInput"
                    maxLength="100"
                    />
            </label><br/>

            <label htmlFor="City">City:
                <input
                    type="text"
                    placeholder="City"
                    id="city"
                    className="rInput"
                    maxLength="100"
                    required
                />
            </label><br/>

            <label htmlFor="State">State:
            <select name="state" required >
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
                    minLength= "5"
                    maxLength="9"
                    required
                />
            </label><br/>
            <label htmlFor="date">Select a date:
                <input 
                        type="date" 
                        id="date"
                        name="date"
                    />
            </label><br/>
            <label htmlFor="suggested price">Suggested Price:
                <input
                        type="Number"
                        placeholder=""
                        id="suggested_price"
                        className="rInput"
                        min={0}
                        required
                    />
            </label><br/>

            <button className="calculate">
                Calculate</button>
            
                
        </div>
    )
}

export default FuelPrice;

