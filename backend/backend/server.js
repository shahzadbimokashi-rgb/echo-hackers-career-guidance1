<!DOCTYPE html>
<html>
<head>
  <title>AI Career Guidance System</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>

<!-- WELCOME SCREEN -->
<div id="welcome" class="welcome-screen">
  <img src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif">
  <h2>Welcome to AI Career Guidance 👋</h2>
</div>

<!-- MAIN UI -->
<div class="card">
  <h1>AI Career Guidance System</h1>

  <p>Select your interest:</p>

  <select id="interest">
    <option value="coding">Coding</option>
    <option value="design">Design</option>
    <option value="data">Data</option>
  </select>

  <br><br>

  <button onclick="getCareer()">Get Career</button>

  <h2 id="output"></h2>
</div>

<script src="script.js"></script>

</body>
</html>
