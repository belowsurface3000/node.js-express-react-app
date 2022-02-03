const express = require('express');
const app = express();
const satellites = require("./routes/satellites.js");
const planets = require("./routes/planets.js");

const cors = require("cors");
app.use(cors()); // allow all

app.use("/satellites", satellites);
app.use("/planets", planets);

app.listen(3002, () => {
   console.log("The server is listening on 3002!"); 
});