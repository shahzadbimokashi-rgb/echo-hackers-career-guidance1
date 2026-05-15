const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Simple AI logic (career guidance chatbot)
function getAIResponse(message) {
    message = message.toLowerCase();

    if (message.includes("python")) {
        return "Python is great for AI, ML, Web Development. Start with basics, then projects.";
    }

    if (message.includes("java")) {
        return "Java is strong for backend, Android apps, and enterprise systems.";
    }

    if (message.includes("career")) {
        return "You can choose: Software Developer, AI Engineer, Data Analyst, Cyber Security.";
    }

    if (message.includes("hello")) {
        return "Hello! I am your Career AI Assistant 😊 Ask me anything.";
    }

    return "I am your Career AI Assistant. Ask about coding, careers, or skills.";
}

app.post("/chat", (req, res) => {
    const userMessage = req.body.message;
    const reply = getAIResponse(userMessage);
    res.json({ reply });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
