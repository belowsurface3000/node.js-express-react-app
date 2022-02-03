import axios from 'axios';
import React, { useState } from 'react';

function PlanFind() {

    const [searchRes, setSearchRes] = useState([]);
    const [search, setSearch] = useState("");
    const changeHandler = (e) => {
        setSearch(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:3002/planets/find/${search}`)
        .then(response => {setSearchRes(response.data)})
        .catch(error => console.log(error));
    }

    return <div>
        <h2>1. Find one</h2>
        <form onSubmit={submitHandler}>
            <div className="text-input">
                <input type="text" placeholder="Mercury, Pluto, Saturn, etc." onChange={changeHandler} />
                <input type="submit" value="Search!" />
            </div>
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

export default PlanFind;
