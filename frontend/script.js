// hide loader + voice greeting
window.onload = function () {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";

    let msg = new SpeechSynthesisUtterance();
    msg.text = "Welcome to AI Career Guidance System";
    window.speechSynthesis.speak(msg);

  }, 2000);
};

// fetch backend
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

// dark mode
function toggleDark() {
  document.body.classList.toggle("dark");
}
