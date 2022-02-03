import axios from 'axios';
import React, { useState } from 'react';

function PlanTemp() {

    const [searchRes, setSearchRes] = useState([]);
    const changeHandler = (e) => {
        axios.get(`http://localhost:3002/planets/temperature/${e.target.value}`)
        .then(response => {setSearchRes(response.data)})
        .catch(error => console.log(error));
    }

    return <div>
        <h2>5. Find the planet with the hottest and coldest temperature</h2>
        <form onChange={changeHandler}>
            <label htmlFor="coldest">Coldest</label>
            <input type="radio" name="size" id="coldest" value="coldest" />
            <label htmlFor="hottest">Hottest</label>
            <input type="radio" name="size" id="hottest" value="hottest" />
        </form>
        { searchRes !== [] && 
            <p>{searchRes}</p>
        }  
    </div>;
}

export default PlanTemp;
