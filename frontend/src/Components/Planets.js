import React from 'react';
import PlanDay from './PlanDay';
import PlanFind from './PlanFind';
import PlanMoon from './PlanMoon';
import PlanOrbit from './PlanOrbit';
import PlanSize from './PlanSize';
import PlanSun from './PlanSun';
import PlanTemp from './PlanTemp';

function Planets() {
  // possible routes
    // planets/
      // get /find/...Name
      // http://localhost:3001/planets/find/Mercury
      // get /size/...smallest || largest
      // http://localhost:3001/planets/size/smallest
      // get /moons/...most || none
      // get /sun/...closest || furthest
      // get /temperature/...hottest || coldest
      // get /day/...longest || shortest
      // get /orbit/...longest || shortest

    return <div>

      <img src={require("../planets.jpeg")} alt="Planets" />
      <div className="darker"></div>

      <h1>Planets</h1>
      <p>Here you can do different amazing things with Planets:</p>
      
      <div className="component-container">
        <PlanFind />
        <PlanSize />
        <PlanMoon />
        <PlanSun />
        <PlanTemp />
        <PlanDay />
        <PlanOrbit />
      </div>
    </div>;
}

export default Planets;
