// hide welcome screen after 3 seconds
setTimeout(() => {
  document.getElementById("welcome").style.display = "none";
}, 3000);

// API call
function getCareer() {
  const interest = document.getElementById("interest").value;

  fetch("https://echo-hackers-career-guidance1-1.onrender.com/career", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ interest })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("output").innerText =
      "Career: " + data.career + "\nSkills: " + data.skills.join(", ");
  });
}
