const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("AI Career GOD MODE Backend Running 🚀");
});

// CAREER ENGINE
app.post("/career", (req, res) => {
  const { interest, score } = req.body;

  let data = {};

  if (interest === "coding") {
    data = {
      career: "Software Developer",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      advice: "Build projects and practice daily coding."
    };
  } else if (interest === "design") {
    data = {
      career: "UI/UX Designer",
      skills: ["Figma", "Creativity", "UI Design"],
      advice: "Focus on design thinking and UI practice."
    };
  } else {
    data = {
      career: "Explorer",
      skills: ["Communication", "Problem Solving"],
      advice: "Explore multiple fields before deciding."
    };
  }

  const finalScore = score || Math.floor(Math.random() * 40 + 60);

  res.json({
    ...data,
    score: finalScore
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
