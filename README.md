<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>That Jara Guy</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<header>
  <h1>That Jara Guy</h1>
  <button class="theme-toggle">Toggle Theme</button>
</header>

<nav>
<ul>
  <li><a href="#" onclick="alert('Tip: Buy data at night for extra value!')">Buy Cheap Data</a></li>
  <li><a href="#" onclick="alert('Tip: Always use Wi-Fi when possible!')">Data Saving Tips</a></li>
  <li>
    <button class="collapsible">Funny Data Stories</button>
    <div class="content">
      <p>Once I bought 1GB and it finished in 1 hour 😂</p>
      <p>Always check your auto-update apps!</p>
    </div>
  </li>
  <li><a href="https://tiktok.com/@yourprofile" target="_blank">Visit My TikTok</a></li>
  <li><a href="https://youtube.com/@yourchannel" target="_blank">Visit My YouTube</a></li>
  <li><a href="feedback.html">Send Feedback</a></li>
</ul>
</nav>

<script src="script.js"></script>
</body>
</html>body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  transition: background 0.3s, color 0.3s;
  background: #f5f5f5;
  color: #000;
}
header {
  background: #ffcc00;
  padding: 20px;
  text-align: center;
}
header h1 { margin: 0; }
ul { list-style: none; padding: 0; margin: 0; }
li { margin: 10px; }
a, .collapsible {
  text-decoration: none;
  padding: 10px 15px;
  display: block;
  background: #333;
  color: #fff;
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;
}
a:hover, .collapsible:hover { background: #555; }
.content {
  display: none;
  padding: 10px 15px;
  background: #eee;
  color: #000;
  border-radius: 5px;
  margin-bottom: 10px;
}
.theme-toggle {
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 10px;
  cursor: pointer;
  background: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
}
body.dark {
  background: #222;
  color: #fff;
}
body.dark a, body.dark .collapsible { background: #555; color: #fff; }
body.dark .content { background: #333; color: #fff; }// Collapsible
const coll = document.querySelectorAll(".collapsible");
coll.forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    const content = button.nextElementSibling;
    content.style.display = (content.style.display === "block") ? "none" : "block";
  });
});

// Theme Toggle
const themeButton = document.querySelector(".theme-toggle");
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
