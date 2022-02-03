import axios from 'axios';
import React, { useState } from 'react';

function SatDensity() {

    const [searchRes, setSearchRes] = useState([]);
    const changeHandler = (e) => {
        axios.get(`http://localhost:3002/satellites/density/${e.target.value}`)
        .then(response => {setSearchRes(response.data)})
        .catch(error => console.log(error));
    }
    
    return <div>
        <h2>3. Find the highest or lowest dense Satellite</h2>
            <form onChange={changeHandler}>
                <label htmlFor="highest">Highest</label>
                <input type="radio" name="size" id="highest" value="highest" />
                <label htmlFor="lowest">Lowest</label>
                <input type="radio" name="size" id="lowest" value="lowest" />
            </form>
            { searchRes !== [] && 
                <div>
                <p>Satellite Name: {searchRes.name}</p>
                <p>Density: {searchRes.density}</p>
                <p>Radius: {searchRes.radius}</p>
                <p>Magnitude: {searchRes.magnitude}</p>
                </div>
            } 
    </div>;
}

export default SatDensity;
