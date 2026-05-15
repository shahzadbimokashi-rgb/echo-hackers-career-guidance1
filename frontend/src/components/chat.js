import { useState } from "react";

export default function Chat() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  const send = async () => {
    const res = await fetch("http://localhost:5000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: msg })
    });

    const data = await res.json();

    setChat([...chat, { user: msg, ai: data.reply }]);
    setMsg("");
  };

  return (
    <div>
      <h2>Career AI Chat</h2>

      {chat.map((c, i) => (
        <p key={i}>
          <b>You:</b> {c.user} <br />
          <b>AI:</b> {c.ai}
        </p>
      ))}

      <input value={msg} onChange={(e) => setMsg(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
  );
}
