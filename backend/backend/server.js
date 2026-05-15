const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Simple AI logic (multi-step career guidance)
app.post("/chat", (req, res) => {
    const msg = req.body.message.toLowerCase();

    let reply = "";

    if (msg.includes("confused")) {
        reply = "Tell me your interest: coding, design, business, or medical?";
    } 
    else if (msg.includes("coding")) {
        reply = "Great! Learn HTML → CSS → JavaScript → React → Build Projects.";
    } 
    else if (msg.includes("design")) {
        reply = "Learn UI/UX, Figma, Canva, and start design projects.";
    } 
    else if (msg.includes("business")) {
        reply = "Learn marketing, finance basics, and startup strategy.";
    } 
    else if (msg.includes("medical")) {
        reply = "Focus on biology, NEET prep, and clinical practice.";
    } 
    else {
        reply = "Tell me your interest so I can guide your career step-by-step.";
    }

    res.json({ reply });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
