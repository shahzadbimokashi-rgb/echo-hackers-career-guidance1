const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Career Guidance Backend Running 🚀");
});

// NEW SMART API
app.post("/career", (req, res) => {
  const interest = req.body.interest;

  let response = {};

  if (interest === "coding") {
    response = {
      career: "Software Developer",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    };
  } else if (interest === "design") {
    response = {
      career: "UI/UX Designer",
      skills: ["Figma", "Creativity", "Prototyping"]
    };
  } else if (interest === "data") {
    response = {
      career: "Data Analyst",
      skills: ["Python", "Excel", "SQL"]
    };
  } else {
    response = {
      career: "Explore More Fields",
      skills: ["Communication", "Problem Solving"]
    };
  }

  res.json(response);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
