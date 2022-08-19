const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {getCompliment, getFortune, getCandy, getSong, getStock} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortunes", getFortune);
app.get("/api/candies", getCandy);
app.get("/api/songs", getSong);
app.get("/api/stocks", getStock);


app.listen(4000, () => console.log("Server running on 4000"));
