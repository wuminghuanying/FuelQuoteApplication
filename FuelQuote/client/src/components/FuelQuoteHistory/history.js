import React, {Component}  from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import "./history.css"

const FuelQuoteHistory = () => {

  const user = JSON.parse(localStorage.getItem("user"));
  const [history, setHistory] = useState([]);

  try {
    const response = axios.get("http://localhost:5500/api/history/" + user.user_id)
    .then(response => {
      setHistory(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }
  catch (error) {
    console.log(error);
  }

  return(
    <div className="history">
      <p className="title">Fuel Quote History</p>
      <table className="table">
        <thead className="thead">
          <tr>
            <th>Gallons Requested</th>
            <th>Address 1</th>
            <th>Address 2</th>
            <th>City</th>
            <th>State</th>
            <th>Zip code</th>
            <th>Date</th>
            <th>Suggested price</th>
            <th>Total price</th>
          </tr>
        </thead>
        <tbody >
          {history.map((fuel) => (
            <tr>
              <td>{fuel.gallon_requested}</td>
              <td>{fuel.address1}</td>
              <td>{fuel.address2}</td>
              <td>{fuel.city}</td>
              <td>{fuel.state}</td>
              <td>{fuel.zipcode}</td>
              <td>{fuel.date}</td>
              <td>{"$" + fuel.suggested_price}</td>
              <td>{"$" + fuel.total_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FuelQuoteHistory;