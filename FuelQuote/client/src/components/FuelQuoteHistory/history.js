import React, {Component}  from "react";
import "./history.css"
import axios from 'axios';

const Fuel = props => (
  <tr>
    <td>{props.fuel.gallon_requested}</td>
    <td>{props.fuel.address1}</td>
    <td>{props.fuel.address2}</td>
    <td>{props.fuel.city}</td>
    <td>{props.fuel.state}</td>
    <td>{props.fuel.zipcode}</td>
    <td>{props.fuel.date}</td>
    <td>{props.fuel.suggested_price}</td>
    <td>{props.fuel.tot_price}</td>
  </tr>
)

export default class FuelQuoteHistory extends Component {
  constructor(props){
    super(props);
    this.state = {fuelPrice:[]};
  }
  componentDidMount() {
    axios.get('http://localhost:3000/history')
      .then(response => {
        this.setState({fuelPrice: response.data})
      })
      .catch(error => {
        console.log(error);
      })
  }
  
  quoteList() {
    return this.state.fuelPrice.map(currentquote => {
      return <Fuel quote={currentquote}/>;
    })
  }

  render() {
  return(

    <div>  
    <h3 align="center">Fuel Quote History</h3> 
      <table align="center">
        <thead className="form">
          <tr>
            <th>Gallons Requested</th>
            <th>Address 1</th>
            <th>Address 2</th>
            <th>Country</th>
            <th>City</th>
            <th>State</th>
            <th>Zip code</th>
            <th>Date</th>
            <th>Suggested price</th>
            <th>Total price</th>
         </tr>
        </thead>
        <tbody>
          { this.quoteList() }
        </tbody>
      </table>

    </div>
  )
}
}
//export default history;