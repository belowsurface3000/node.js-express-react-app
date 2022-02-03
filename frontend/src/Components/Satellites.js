import React from 'react';
import SatDensity from './SatDensity';
import SatFind from './SatFind';
import SatSize from './SatSize';

function Satellites() {
  // possible routes
  // /satellites
    // get /find/...Name
    // get /size/...smallest || larges
    // get /density/...highest || lowest
  
  return <div>

    <img src={require("../satellite.jpeg")} alt="Satellite" />
    <div className="darker"></div>

    <h1>Satellites</h1>
    <p>Here you can do different amazing things with Satellites:</p>
    
    <div className="component-container"> 
      <SatFind />
      <SatSize />
      <SatDensity />
    </div>
  </div>;
}

export default Satellites;
