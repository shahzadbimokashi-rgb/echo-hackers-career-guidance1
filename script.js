// hide welcome screen
setTimeout(() => {
  document.getElementById("welcome").style.display = "none";
}, 3000);

// CAREER FUNCTION
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
      "Career: " + data.career +
      "\nSkills: " + data.skills.join(", ") +
      "\nAdvice: " + data.advice;

    // VOICE OUTPUT 🎤
    let speech = new SpeechSynthesisUtterance();
    speech.text = "Recommended career is " + data.career;
    window.speechSynthesis.speak(speech);
  });
}

// SIMPLE AI CHATBOT 🤖
function askAI() {
  const q = document.getElementById("userInput").value.toLowerCase();
  let answer = "";

  if (q.includes("career")) {
    answer = "Choose coding, design, or data based on interest.";
  } else if (q.includes("job")) {
    answer = "Build skills, projects, and practice interviews.";
  } else {
    answer = "Keep learning and stay consistent!";
  }

  document.getElementById("output").innerText = "AI: " + answer;

  let speech = new SpeechSynthesisUtterance(answer);
  window.speechSynthesis.speak(speech);
}
