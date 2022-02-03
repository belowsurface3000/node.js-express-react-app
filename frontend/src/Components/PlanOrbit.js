import axios from 'axios';
import React, { useState } from 'react';

function PlanOrbit() {

    const [searchRes, setSearchRes] = useState([]);
    const changeHandler = (e) => {
        axios.get(`http://localhost:3002/planets/orbit/${e.target.value}`)
        .then(response => {setSearchRes(response.data)})
        .catch(error => console.log(error));
    }

    return <div>
        <h2>7. Find the planet with the shortest and longest orbiting time</h2>
        <form onChange={changeHandler}>
            <label htmlFor="shortest">Shortest</label>
            <input type="radio" name="size" id="shortest" value="shortest" />
            <label htmlFor="longest">Longest</label>
            <input type="radio" name="size" id="longest" value="longest" />
        </form>
        { searchRes !== [] && 
            <p>{searchRes}</p>
        }  
    </div>;
}

export default PlanOrbit;
