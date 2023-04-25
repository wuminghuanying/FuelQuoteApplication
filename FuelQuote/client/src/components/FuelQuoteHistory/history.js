import React, {Component}  from "react";
import "./history.css"
import axios from 'axios';

const Fuel = props => (
  <tr>
    <td>{props.quote.gallon_requested}</td>
    <td>{props.exercise.address1}</td>
    <td>{props.exercise.address2}</td>
    <td>{props.exercise.city}</td>
    <td>{props.exercise.state}</td>
    <td>{props.exercise.zipcode}</td>
    <td>{props.exercise.date}</td>
    <td>{props.exercise.suggested_price}</td>
  </tr>
)

export default class FuelQuoteHistory extends Component {
  
  componentDidMount() {
    axios.get('http://localhost:3000/history')
      .then(response => {
        this.setState({quotes: response.data})
      })
      .catch(error => {
        console.log(error);
      })
  }
  
  quoteList() {
    return this.state.quote.map(currentquote => {
      return <Fuel quote={currentquote}/>;
    })
  }

  render() {
  return(

    <div>  
    <h3>Fuel Quote History</h3> 
      <table width="100%" >
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