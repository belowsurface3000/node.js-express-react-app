import axios from 'axios';
import React, { useState } from 'react';

function PlanSize() {

    const [searchRes, setSearchRes] = useState([]);
    const changeHandler = (e) => {
        axios.get(`http://localhost:3002/planets/size/${e.target.value}`)
        .then(response => {setSearchRes(response.data)})
        .catch(error => console.log(error));
    }

    return <div>
        <h2>2. Find the smallest or largest Planet</h2>
            <form onChange={changeHandler}>
                <label htmlFor="smallest">Smallest</label>
                <input type="radio" name="size" id="smallest" value="smallest" />
                <label htmlFor="largest">Largest</label>
                <input type="radio" name="size" id="largest" value="largest" />
            </form>
            { searchRes !== [] && 
                <div>
                    <p>Planet Name: {searchRes.name}</p>
                    <p>Density: {searchRes.density} kg/m3</p>
                    <p>Diameter: {searchRes.diameter} km</p>
                    <p>Gravity: {searchRes.gravity} m/s2</p>
                    <p>Length of a Day: {searchRes.lengthOfDay}h</p>
                </div>
            }  
    </div>;
}

export default PlanSize;
