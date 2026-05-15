import { useEffect } from "react";

export default function Welcome() {
  useEffect(() => {
    const msg = new SpeechSynthesisUtterance("Welcome to Career AI Assistant");
    window.speechSynthesis.speak(msg);
  }, []);

  return (
    <div style={{ textAlign: "center", fontSize: "30px" }}>
      👦 Welcome to Career AI
    </div>
  );
}
