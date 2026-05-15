const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 Career AI Backend Running");
});

// CAREER API
app.post("/career", (req, res) => {
  const { interest } = req.body;

  let data = {};

  if (interest === "coding") {
    data = {
      career: "Software Developer",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      advice: "Build projects daily and practice coding."
    };
  } else if (interest === "design") {
    data = {
      career: "UI/UX Designer",
      skills: ["Figma", "Creativity", "UI Design"],
      advice: "Improve design thinking and UI skills."
    };
  } else {
    data = {
      career: "Explorer",
      skills: ["Communication", "Problem Solving"],
      advice: "Explore different fields before choosing."
    };
  }

  res.json(data);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
