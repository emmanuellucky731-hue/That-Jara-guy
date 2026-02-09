<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>That Jara Guy – Premium</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
body{margin:0;font-family:Arial;background:#0b0b0b;color:#fff}
header{background:#111;padding:15px;text-align:center}
.card{background:#161616;padding:15px;border-radius:10px;margin:10px 0}
button{padding:12px;border:none;border-radius:8px;font-size:16px;cursor:pointer}
.green{background:#00c853}
.orange{background:#ff9800}
.gray{background:#333}
.hidden{display:none}
</style>
</head>

<body>

<header>
<h2>🔥 That Jara Guy</h2>
<p>Read • Earn • Upgrade Your Life</p>
</header>

<!-- POINTS -->
<div class="card" style="text-align:center;color:#0f0">
⭐ Points: <span id="points">0</span>
</div>

<!-- HOME -->
<div id="home" class="card">
<button class="orange" onclick="openSection('story')">📖 Read Story</button><br><br>
<button class="green" onclick="openSection('leaderboard')">🏆 Leaderboard</button><br><br>
<button class="gray" onclick="openSection('premium')">🔒 Premium Stories</button><br><br>
<button class="green" onclick="openSection('invite')">🎁 Invite & Earn</button>
</div>

<!-- STORY -->
<div id="story" class="card hidden">
<h3>📖 The Story of the Jara Heart</h3>

<audio controls style="width:100%">
<source src="jara-story.mp3" type="audio/mpeg">
</audio>

<p>
Jara Heart no get much, but e get vision.  
While others dey waste data, e dey invest am.  
Small steps every day turn am into example.
</p>

<button class="green" onclick="earnPoints()">✅ I Read This (+10)</button><br><br>
<button class="gray" onclick="goHome()">⬅ Back</button>
</div>

<!-- LEADERBOARD -->
<div id="leaderboard" class="card hidden">
<h3>🏆 Top Readers</h3>
<ul id="leaders"></ul>
<button class="gray" onclick="goHome()">⬅ Back</button>
</div>

<!-- PREMIUM -->
<div id="premium" class="card hidden">
<h3>🔒 Premium Content</h3>
<p>Unlock at 100 points</p>
<button class="orange" onclick="unlockPremium()">Unlock Now</button>
<div id="premiumContent" class="hidden">
<p>
🔥 Premium truth: No data is wasted if it makes you wiser.
</p>
</div>
<button class="gray" onclick="goHome()">⬅ Back</button>
</div>

<!-- INVITE -->
<div id="invite" class="card hidden">
<h3>🎁 Invite & Earn</h3>
<p>Invite link:</p>
<input id="refLink" style="width:100%" readonly>
<button class="green" onclick="copyLink()">Copy Link</button>
<p>Each invite = +20 points</p>
<button class="gray" onclick="goHome()">⬅ Back</button>
</div>

<!-- FIREBASE -->
<script src="https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.1/firebase-database-compat.js"></script>

<script>
const firebaseConfig={
apiKey:"AIzaSyC_ZxdFvYD-mZFy2ay586WS9dqLOaclgJw",
authDomain:"data-jarra-guy-comment.firebaseapp.com",
databaseURL:"https://data-jarra-guy-comment-default-rtdb.firebaseio.com",
projectId:"data-jarra-guy-comment",
storageBucket:"data-jarra-guy-comment.appspot.com",
messagingSenderId:"526520697755",
appId:"1:526520697755:web:0a211bd50a2abd2694973e"
};
firebase.initializeApp(firebaseConfig);
const db=firebase.database();

function openSection(id){
document.querySelectorAll(".card").forEach(c=>c.classList.add("hidden"));
document.getElementById(id).classList.remove("hidden");
}
function goHome(){
document.querySelectorAll(".card").forEach(c=>c.classList.add("hidden"));
document.getElementById("home").classList.remove("hidden");
}

let uid=localStorage.getItem("uid");
if(!uid){uid="u"+Math.random().toString(36).substr(2,9);localStorage.setItem("uid",uid)}
const user=db.ref("users/"+uid);

// DAILY BONUS
let today=new Date().toDateString();
if(localStorage.getItem("lastLogin")!==today){
user.transaction(d=>{if(d){d.points=(d.points||0)+20}return d});
localStorage.setItem("lastLogin",today);
alert("🎉 Daily bonus +20 points!");
}

// LOAD USER
user.on("value",s=>{
if(!s.exists()){user.set({points:0})}
document.getElementById("points").innerText=s.val().points||0;
});

// EARN
function earnPoints(){
user.transaction(d=>{if(d){d.points+=10}return d});
}

// LEADERBOARD
db.ref("users").limitToLast(5).on("value",s=>{
let html="";
s.forEach(c=>{
html+="<li>"+c.key+" – "+c.val().points+" pts</li>";
});
document.getElementById("leaders").innerHTML=html;
});

// PREMIUM
function unlockPremium(){
user.once("value").then(s=>{
if((s.val().points||0)>=100){
document.getElementById("premiumContent").classList.remove("hidden");
}else{
alert("❌ Need 100 points");
}
});
}

// INVITE
document.getElementById("refLink").value=
location.href+"?ref="+uid;

function copyLink(){
navigator.clipboard.writeText(refLink.value);
alert("Copied!");
}

// REFERRAL
const p=new URLSearchParams(location.search);
if(p.get("ref")){
db.ref("users/"+p.get("ref")).transaction(d=>{
if(d){d.points+=20}
return d;
});
}
</script>

</body>
</html>
