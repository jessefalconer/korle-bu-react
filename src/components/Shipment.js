import React from 'react'

const Shipment = ({shipment}) =>
  <div className="tile" key={shipment.id} >
    <h4>{shipment.destination}</h4>
    <p>{shipment.status}</p>
  </div>

export default Shipment;
