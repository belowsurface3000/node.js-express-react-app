import axios from 'axios';
import React, { useState } from 'react';

function PlanDay() {

    const [searchRes, setSearchRes] = useState([]);
    const changeHandler = (e) => {
        axios.get(`http://localhost:3002/planets/day/${e.target.value}`)
        .then(response => {setSearchRes(response.data)})
        .catch(error => console.log(error));
    }  

    return <div>
        <h2>6. Find the planet with the longest and shortest Day</h2>
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

export default PlanDay;
