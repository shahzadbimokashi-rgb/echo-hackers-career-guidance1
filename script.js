function getCareer() {
  const interest = document.getElementById("interest").value;
  const name = document.getElementById("name").value;

  fetch("https://echo-hackers-career-guidance1-1.onrender.com/career", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      interest,
      score: Math.floor(Math.random() * 100)
    })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("output").innerText =
      `Hi ${name} 🎯
Career: ${data.career}
Score: ${data.score}%
Skills: ${data.skills.join(", ")}
Advice: ${data.advice}`;

    // voice output
    let speech = new SpeechSynthesisUtterance(
      "Your career is " + data.career
    );
    window.speechSynthesis.speak(speech);
  });
}

// simple chatbot
function askAI() {
  const q = document.getElementById("chat").value.toLowerCase();
  let ans = "";

  if (q.includes("career")) ans = "Focus on skills and projects.";
  else if (q.includes("job")) ans = "Practice coding and internships.";
  else ans = "Keep learning and stay consistent.";

  document.getElementById("output").innerText = "AI: " + ans;

  let speech = new SpeechSynthesisUtterance(ans);
  window.speechSynthesis.speak(speech);
}
