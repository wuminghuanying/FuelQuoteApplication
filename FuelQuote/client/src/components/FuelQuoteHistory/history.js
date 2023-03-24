import React from "react";
import "./history.css"

const history = () => {

    return (
        
    <div className="form">
            
      <table width="100%" >
        <thead>
          <tr>
            <th colspan="8">Fuel Quote History</th>
          </tr>
         </thead>
         <tbody>
          <tr>
            <th>Gallons Requested</th>
            <th>Address</th>
            <th>Country</th>
            <th>City</th>
            <th>State</th>
            <th>Zip code</th>
            <th>Data</th>
            <th>Suggested price</th>
         </tr>
        </tbody>
  
      </table>

        </div>
    )
}

export default history;