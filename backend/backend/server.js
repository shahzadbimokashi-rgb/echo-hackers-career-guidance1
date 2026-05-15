app.post("/career", (req, res) => {
  const interest = req.body.interest;

  let data = {};

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
      advice: "Design apps and study user experience."
    };
  } else {
    data = {
      career: "Explorer",
      skills: ["Communication", "Problem Solving"],
      advice: "Explore multiple fields and find your passion."
    };
  }

  res.json(data);
});
