const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Working 🚀");
});

app.post("/career", (req, res) => {
  const { interest } = req.body;

  if (interest === "coding") {
    res.json({
      career: "Software Developer",
      skills: ["HTML", "CSS", "JS"]
    });
  } else {
    res.json({
      career: "Explorer",
      skills: ["Thinking", "Learning"]
    });
  }
});

app.listen(5000, () => {
  console.log("Server running");
});
