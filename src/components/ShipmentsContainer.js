import React, { Component } from 'react'
import axios from 'axios'
import Shipment from './Shipment'

class ShipmentsContainer extends Component {
render() {
  return (
    <div>
      {this.state.shipments.map((shipment) => {
        return( <Shipment shipment={shipment} key={shipment.id} /> )
      })}
    </div>
  );
}
  constructor(props) {
    super(props)
    this.state = {
      shipments: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/shipments.json')
      .then(response => {
        console.log(response)
        this.setState({
          shipments: response.data
        })
      })
      .catch(error => console.log(error))
  }
}

export default ShipmentsContainer;
