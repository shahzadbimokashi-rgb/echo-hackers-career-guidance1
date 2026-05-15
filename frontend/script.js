// Voice welcome 🎤
window.onload = function () {
    let speech = new SpeechSynthesisUtterance("Welcome to Career AI Assistant");
    speech.lang = "en-US";
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
};

function sendMessage() {
    let input = document.getElementById("userInput").value;
    let chatBox = document.getElementById("chatBox");

    chatBox.innerHTML += "<p><b>You:</b> " + input + "</p>";

    fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
    })
    .then(res => res.json())
    .then(data => {
        chatBox.innerHTML += "<p><b>AI:</b> " + data.reply + "</p>";
    });
}
