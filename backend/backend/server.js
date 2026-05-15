const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Career Guidance Backend Running 🚀");
});

// Career API route
app.get("/career", (req, res) => {
  res.json({
    career: "Software Developer",
    skills: ["HTML", "CSS", "JavaScript", "Problem Solving"]
  });
});

// PORT setup (IMPORTANT for Render)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
