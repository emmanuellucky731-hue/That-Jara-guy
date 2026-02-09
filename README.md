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
</script>
