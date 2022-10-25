const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;

const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("courses api running");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log("courses api server running on port: ", port);
});
