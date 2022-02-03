import axios from 'axios';
import React, { useState } from 'react';

function PlanSun() {

    const [searchRes, setSearchRes] = useState([]);
    const changeHandler = (e) => {
        axios.get(`http://localhost:3002/planets/sun/${e.target.value}`)
        .then(response => {setSearchRes(response.data)})
        .catch(error => console.log(error));
    }

    return <div>
        <h2>4. Find the clostest and furthest from the sun</h2>
            <form onChange={changeHandler}>
                <label htmlFor="closest">Closest</label>
                <input type="radio" name="size" id="closest" value="closest" />
                <label htmlFor="furthest">Furthest</label>
                <input type="radio" name="size" id="furthest" value="furthest" />
            </form>
            { searchRes !== [] && 
                <p>{searchRes}</p>
            }    
    </div>;
}

export default PlanSun;
