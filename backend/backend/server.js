app.get("/career", (req, res) => {
  res.json({
    career: "Software Developer",
    skills: ["HTML", "CSS", "JavaScript", "Problem Solving"]
  });
});
