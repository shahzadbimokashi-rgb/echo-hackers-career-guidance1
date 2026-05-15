const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Career Guidance Backend Running 🚀");
});

// CAREER API
app.post("/career", (req, res) => {
  const interest = req.body.interest;

  let data;

  if (interest === "coding") {
    data = {
      career: "Software Developer",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      advice: "Practice coding daily and build projects."
    };
  } else if (interest === "design") {
    data = {
      career: "UI/UX Designer",
      skills: ["Figma", "Creativity", "UI Design"],
      advice: "Design apps and improve user experience."
    };
  } else {
    data = {
      career: "Explorer",
      skills: ["Communication", "Problem Solving"],
      advice: "Explore multiple fields and choose your passion."
    };
  }

  res.json(data);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
