const express = require("express");
const router = express.Router();
const planetsData = require("../planets-dataset");

// 5.1 find a planet by name
router.get("/find/:name", (req, res) => {
    const params = req.params;
    const result = planetsData.find(item => item.name === params.name);
    if (result === undefined) {
        res.status(404).send("Nothing was found!");
    } else {
        res.status(200).send(result);
    }
});

// 4.2 find the smallest or largest planet
router.get("/size/:pick", (req, res) => {
    const params = req.params;
    if (params.pick === "smallest") {
        res.status(200).send(planetsData.find(item => item.diameter === Math.min(...planetsData.map(item => item.diameter))));
    } else if (params.pick === "largest") {
        res.status(200).send(planetsData.find(item => item.diameter === Math.max(...planetsData.map(item => item.diameter))));
    } else {
        res.status(500).send("Please type either smallest or largest!");
    }
});

// 5.3 find the planets with the most and least moons
router.get("/moons/:pick", (req, res) => {
    const params = req.params;
    if (params.pick === "most") {
        const mostMoons = planetsData.find(item => item.numberOfMoons === Math.max(...planetsData.map(item => item.numberOfMoons)));
        res.status(200).send(`The planet with the most moons is ${mostMoons.name}, with ${mostMoons.numberOfMoons} moons!`);
    } else if (params.pick === "none") {
        const noMoons = planetsData.filter(item => item.numberOfMoons === Math.min(...planetsData.map(item => item.numberOfMoons)));
        res.status(200).send(noMoons.map(item => item.name));
    } else {
        res.status(500).send("Please type either most or none!");
    }
});

// 5.4 find the planets closest to and furthest from the sun
router.get("/sun/:pick", (req, res) => {
    const params = req.params;
    if (params.pick === "closest") {
        let closest = planetsData.find(item => item.distanceFromSun === Math.min(...planetsData.map(item => item.distanceFromSun)));
        res.status(200).send(`${closest.name} is the closest to sun, with a distance of ${closest.distanceFromSun}`);
    } else if (params.pick === "furthest") {
        let furthest = planetsData.find(item => item.distanceFromSun === Math.max(...planetsData.map(item => item.distanceFromSun)));
        res.status(200).send(`${furthest.name} is the furthest away from sun, with a distance of ${furthest.distanceFromSun}`);
    } else {
        res.status(500).send("Please type either closest or furthest!");
    }
});

// 5.5 find the hottest and coldest planet
router.get("/temperature/:pick", (req, res) => {
    const params = req.params;
    if (params.pick === "hottest") {
        let hottest = planetsData.find(item => item.meanTemperature === Math.max(...planetsData.map(item => item.meanTemperature)));
        res.status(200).send(`${hottest.name} is the hottest planet with ${hottest.meanTemperature}°!`);
    } else if (params.pick === "coldest") {
        let coldest = planetsData.find(item => item.meanTemperature === Math.min(...planetsData.map(item => item.meanTemperature)));
        res.status(200).send(`${coldest.name} is the coldest planet with ${coldest.meanTemperature}°!`);
    } else {
        res.status(500).send("Please type either hottest or coldest!");
    }
});

// 5.6 find the planets with the longest and shortest day
router.get("/day/:pick", (req, res) => {
    const params = req.params;
    if (params.pick === "longest") {
        let longest = planetsData.find(item => item.lengthOfDay === Math.max(...planetsData.map(item => item.lengthOfDay)));
        res.status(200).send(`${longest.name} has the longest day with a duration of ${longest.lengthOfDay}`);
        } else if (params.pick === "shortest") {
        let shortest = planetsData.find(item => item.lengthOfDay === Math.min(...planetsData.map(item => item.lengthOfDay)));  
        res.status(200).send(`${shortest.name} has the shortest day with a duration of ${shortest.lengthOfDay}`)
    } else {
        res.status(500).send("Please type either longest or shortest!");
    }
})

// 5.7 find the planets with the longest and shortest orbital period
router.get("/orbit/:pick", (req, res) => {
    const params = req.params;
    if (params.pick === "longest") {
        let longest = planetsData.find(item => item.orbitalPeriod === Math.max(...planetsData.map(item => item.orbitalPeriod)));
        res.status(200).send(`${longest.name} has the longest orbital period with a duration of ${longest.orbitalPeriod}`);
        } else if (params.pick === "shortest") {
        let shortest = planetsData.find(item => item.orbitalPeriod === Math.min(...planetsData.map(item => item.orbitalPeriod)));  
        res.status(200).send(`${shortest.name} has the shortest orbital period with a duration of ${shortest.orbitalPeriod}`)
    } else {
        res.status(500).send("Please type either longest or shortest!");
    }
})

module.exports = router;