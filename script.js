function login() {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("cartoon").style.display = "block";

    setTimeout(() => {
        document.getElementById("cartoon").style.display = "none";
        document.getElementById("app").style.display = "block";
    }, 3000);
}

async function send() {
    let msg = document.getElementById("msg").value;

    let chatBox = document.getElementById("chatBox");

    chatBox.innerHTML += "<p><b>You:</b> " + msg + "</p>";

    let res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: msg })
    });

    let data = await res.json();

    chatBox.innerHTML += "<p><b>AI:</b> " + data.reply + "</p>";

    document.getElementById("msg").value = "";
}
