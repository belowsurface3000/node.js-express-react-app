import axios from 'axios';
import React, { useState } from 'react';

function SatSize() {

    const [searchRes, setSearchRes] = useState([]);
    const changeHandler = (e) => {
        axios.get(`http://localhost:3002/satellites/size/${e.target.value}`)
        .then(response => {setSearchRes(response.data)})
        .catch(error => console.log(error));
    }

    return <div>
            <h2>2. Find the smallest or largest Satellite</h2>
            <form onChange={changeHandler}>
                <label htmlFor="smallest">Smallest</label>
                <input type="radio" name="size" id="smallest" value="smallest" />
                <label htmlFor="largest">Largest</label>
                <input type="radio" name="size" id="largest" value="largest" />
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

export default SatSize;
