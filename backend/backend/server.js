const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 AI Career Final Boss Backend Running");
});

app.post("/career", (req, res) => {
  const { interest } = req.body;

  let data = {};

  if (interest === "coding") {
    data = {
      career: "Software Developer",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      advice: "
