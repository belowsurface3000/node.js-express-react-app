const express = require("express");
const router = express.Router();
const satellitesData = require("../satellites-dataset.js");

// 4.1 find a satellite by name
router.get("/find/:name", (req, res) => {
    const params = req.params;
    const result = satellitesData.find(item => item.name === params.name);
    if (result === undefined) {
        res.status(404).send("Nothing was found!");
    } else {
        res.status(200).send(result);
    }
});

// 4.2 find the smallest or largest satellite
router.get("/size/:pick", (req, res) => {
    const params = req.params;
    if (params.pick === "smallest") {
        res.status(200).send(satellitesData.find(item => item.radius === Math.min(...satellitesData.map(item => item.radius))));
    } else if (params.pick === "largest") {
        res.status(200).send(satellitesData.find(item => item.radius === Math.max(...satellitesData.map(item => item.radius))));
    } else {
        res.status(500).send("Please type either smallest or largest!");
    }
});

// 4.3 find the densest or least dense satellite
router.get("/density/:density", (req, res) => {
    const params = req.params;
    if (params.density === "highest") {
        res.status(200).send(satellitesData.find(item => item.density === Math.max(...satellitesData.map(item => item.density))));
    } else if (params.density === "lowest") {
        if (satellitesData.filter(item => item.density === null).length !== 0) {
            res.status(200).send(...satellitesData.filter(item => item.density === null));
        } else {
            res.status(200).send(satellitesData.find(item => item.density === Math.min(...satellitesData.map(item => item.density))));
        }
    } else {
        res.status(500).send("Please type either highest or lowest!");
    }
});

module.exports = router;