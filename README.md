<!-- MULTI-CATEGORY INTERACTIVE SECTION -->
<div id="multiSection" class="card">
<h2 style="text-align:center;">🔥 That Jara Guy – Explore & Read</h2>
<p style="text-align:center;">Tap any icon to see amazing stories, jokes, news & more!</p>
<div id="homeIcons" class="icon-grid"></div>

<!-- CATEGORY ITEMS -->
<div id="categoryView" class="card hidden">
<h3 id="catTitle"></h3>
<div id="catItems" class="icon-grid"></div>
<button onclick="backHome()" style="margin-top:10px;">⬅ Back</button>
</div>

<!-- CONTENT VIEW -->
<div id="contentView" class="card hidden">
<h3 id="contentTitle"></h3>
<p id="contentBody"></p>
<button onclick="earnPoints()">✅ I Read This (+10)</button>
<button onclick="backToCategory()" style="margin-left:10px;">⬅ Back</button>
</div>

<script>
// Simulated Firebase points (replace with your actual Firebase logic)
let points = 0;
function earnPoints() { points+=10; alert("🎉 You earned 10 points! Total: "+points); }

// 60 Icons with content
const sections=[
  {name:"News",icon:"📰",items:[
    {title:"Naija Economy Alert",text:"Data dey cheap but salary no dey follow 😅. Hustle small small."},
    {title:"Global Weird News",text:"Aliens no land yet but person dey claim e see UFO 😂."},
    {title:"Tech Buzz",text:"New phone drop but data go finish quick if you no sabi manage am."}
  ]},
  {name:"Story",icon:"📖",items:[
    {title:"Jara Heart",text:"Jara Heart dey struggle small small every day to make ends meet."},
    {title:"Naija Hustle",text:"If you no dey grind now, you go dey suffer later 😈."},
    {title:"The Street King",text:"One guy dey hustle for street, na him become small legend."}
  ]},
  {name:"Jokes",icon:"😂",items:[
    {title:"Data Joke",text:"Why buy 10MB for 100 naira? Na joke or wahala?"},
    {title:"Network Slow",text:"When network slow, you dey feel say God don forget you."},
    {title:"Funny Text",text:"Guy text friend: 'Data dey finish like magician trick' 😂"}
  ]},
  {name:"Hobby",icon:"🎨",items:[
    {title:"Drawing Fun",text:"Draw small small for free, dey calm your mind."},
    {title:"Football Play",text:"Kick ball for street, no money waste, enjoy life."},
    {title:"Music Jam",text:"Sing your favorite song, dance small small."}
  ]},
  {name:"Plays",icon:"🎭",items:[
    {title:"Street Play",text:"Act like devil child, na 80 years later you go pay back 😈."},
    {title:"God Play",text:"Follow GOD, no rush, blessings go follow you. 🙏"},
    {title:"Hustler Drama",text:"Person dey hustle, dem go try stop am, na drama!"}
  ]},
  {name:"Polls",icon:"📊",items:[
    {title:"Favourite Data Plan?",text:"Vote: 100 for 7 days, 300 for 1 month, other small plans."},
    {title:"Best Joke?",text:"Vote which joke make you laugh pass 😄"},
    {title:"Top Hobby?",text:"Vote: Football, Drawing, Music Jam or Something Else."}
  ]},
  {name:"Comments",icon:"💬",items:[
    {title:"User Comments",text:"Leave your comment below and see others thoughts."},
    {title:"Discussion",text:"Talk your mind, make everybody see 😎"},
    {title:"Feedback",text:"Share feedback to make Jara Guy better!"}
  ]}
];

// Dynamically create home icons
const homeIconsDiv=document.getElementById("homeIcons");
sections.forEach((section,i)=>{
  const div=document.createElement("div");
  div.className="icon";
  div.innerText=section.icon+"\n"+section.name;
  div.onclick=()=>openCategory(i);
  homeIconsDiv.appendChild(div);
});

// Navigation
let currentCategoryIndex=0;
function backHome(){
  document.getElementById("multiSection").classList.remove("hidden");
  document.getElementById("categoryView").classList.add("hidden");
  document.getElementById("contentView").classList.add("hidden");
}
function openCategory(index){
  currentCategoryIndex=index;
  document.getElementById("multiSection").classList.add("hidden");
  document.getElementById("categoryView").classList.remove("hidden");
  document.getElementById("contentView").classList.add("hidden");
  document.getElementById("catTitle").innerText=sections[index].name;
  const catItemsDiv=document.getElementById("catItems");
  catItemsDiv.innerHTML="";
  sections[index].items.forEach((item,i)=>{
    const div=document.createElement("div");
    div.className="icon";
    div.innerText=item.title;
    div.onclick=()=>openContent(i);
    catItemsDiv.appendChild(div);
  });
}
function openContent(index){
  document.getElementById("multiSection").classList.add("hidden");
  document.getElementById("categoryView").classList.add("hidden");
  document.getElementById("contentView").classList.remove("hidden");
  document.getElementById("contentTitle").innerText=sections[currentCategoryIndex].items[index].title;
  document.getElementById("contentBody").innerText=sections[currentCategoryIndex].items[index].text;
}
function backToCategory(){
  document.getElementById("categoryView").classList.remove("hidden");
  document.getElementById("contentView").classList.add("hidden");
}
</script><!DOCTYPE html>
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
<!-- Watch Ad -> Earn Points -->
<div style="margin:15px 0; text-align:center;">
  <button id="watchAdBtn" style="padding:12px; font-size:16px; border-radius:8px; background:#ff9800; border:none; cursor:pointer;">
    🎬 Watch Ad → Earn 5 Points
  </button>

  <!-- Simulated Ad Container -->
  <div id="adContainer" class="hidden" style="margin-top:10px; padding:10px; background:#111; border-radius:8px;">
    <p>Ad is playing... Please wait 10 seconds</p>

    <!-- Place your Google AdSense Banner here -->
    <ins class="adsbygoogle"
         style="display:block; text-align:center; margin:10px 0;"
         data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
         data-ad-slot="1234567890"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>
      (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
  </div>
</div>

<script>
  const watchAdBtn = document.getElementById("watchAdBtn");
  const adContainer = document.getElementById("adContainer");

  watchAdBtn.addEventListener("click", () => {
    // Hide button, show ad
    watchAdBtn.style.display = "none";
    adContainer.classList.remove("hidden");

    // Wait 10 seconds to simulate ad watch
    setTimeout(() => {
      // Add points via Firebase
      user.transaction(d => { if(d){d.points=(d.points||0)+5} return d; });

      alert("🎉 You earned 5 points!");
      // Hide ad, show button again
      adContainer.classList.add("hidden");
      watchAdBtn.style.display = "inline-block";
    }, 10000); // 10 seconds simulated ad
  });
</script>
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
