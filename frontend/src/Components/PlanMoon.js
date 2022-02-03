import axios from 'axios';
import React, { useState } from 'react';

function PlanMoon() {

    const [searchRes, setSearchRes] = useState([]);
    const changeHandler = (e) => {
        axios.get(`http://localhost:3002/planets/moons/${e.target.value}`)
        .then(response => {setSearchRes(response.data)})
        .catch(error => console.log(error));
    }

    return <div>
        <h2>3. Find the Planet with none or the most moons</h2>
            <form onChange={changeHandler}>
                <label htmlFor="none">None</label>
                <input type="radio" name="size" id="none" value="none" />
                <label htmlFor="most">Most</label>
                <input type="radio" name="size" id="most" value="most" />
            </form>
            { (searchRes !== [] && searchRes.length !== 2) ?
                <p>{searchRes}</p>
            :
                searchRes.map(item => {
                    return <div key={searchRes.indexOf(item)}>
                        <p>{item} has no moon</p>
                    </div>
                })
            }  
    </div>;
}

export default PlanMoon;
