import React, { useState } from 'react';
import axios from "axios";

function SatFind() {

    const [searchRes, setSearchRes] = useState([]);
    const [search, setSearch] = useState("");
    const changeHandler = (e) => {
        setSearch(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:3002/satellites/find/${search}`)
        .then(response => {setSearchRes(response.data)})
        .catch(error => console.log(error));
    }

    return <div>
        <h2>1. Find one</h2>
        <form onSubmit={submitHandler}>
            <div className="text-input">
                <input type="text" placeholder="Moon, Phobos, Deimos, etc." onChange={changeHandler} />
                <input type="submit" value="Search!" />
            </div>
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

export default SatFind;
