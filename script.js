// CAREER FUNCTION
function getCareer() {
  const interest = document.getElementById("interest").value;
  const name = document.getElementById("name").value;

  document.getElementById("loader").classList.remove("hidden");
  document.getElementById("output").innerText = "";

  fetch("https://echo-hackers-career-guidance1-1.onrender.com/career", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ interest })
  })
  .then(res => res.json())
  .then(data => {

    setTimeout(() => {
      document.getElementById("loader").classList.add("hidden");

      document.getElementById("output").innerText =
`Hi ${name} 🚀
Career: ${data.career}
Skills: ${data.skills.join(", ")}
Advice: ${data.advice}`;

      let speech = new SpeechSynthesisUtterance("Your career is " + data.career);
      window.speechSynthesis.speak(speech);

    }, 1500);
  });
}

// CHATBOT
function askAI() {
  const q = document.getElementById("chat").value.toLowerCase();

  let ans = "";

  if (q.includes("career")) ans = "Focus on skills + projects.";
  else if (q.includes("job")) ans = "Build portfolio and practice interviews.";
  else ans = "Keep learning consistently.";

  document.getElementById("output").innerText = "AI: " + ans;

  let speech = new SpeechSynthesisUtterance(ans);
  window.speechSynthesis.speak(speech);
}

// REMOVE WELCOME SCREEN
setTimeout(() => {
  document.getElementById("welcomeScreen").style.display = "none";
}, 4000);
