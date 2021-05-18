const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const cars = [];

app.get("/", (req, res) => {
  res.send(cars);
});

app.post("/", (req, res) => {
  cars.push(req.body.car);
  res.send({ msg: "successfully added" });
});

app.all("*", (req, res) => {
  res.status(404).send({ error: "Page not found" });
});

const port = process.env.PORT || 8090;

app.listen(port, () => console.log(`Listening on port ${port}`));
