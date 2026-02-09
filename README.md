index.html<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Data Jarra Guy - Naija Data Hustle</title>
<style>
    * { margin:0; padding:0; box-sizing:border-box; font-family:'Roboto', sans-serif; }
    body { background:#0b141a; color:#e9edef; min-height:100vh; display:flex; flex-direction:column; }
    header { background:#075e54; padding:14px 18px; text-align:center; font-size:1.4em; font-weight:bold; }
    .slogan { text-align:center; color:#ffd700; margin:8px 0; font-size:1em; }
    .menu, .content { padding:20px; }
    .button { background:#075e54; color:#e9edef; padding:12px; margin:8px 0; text-align:center; cursor:pointer; border-radius:8px; font-weight:bold; }
    .button:hover { background:#0a8566; }
    .icon-button { display:flex; align-items:center; justify-content:left; gap:10px; padding:12px; margin:8px 0; border-radius:8px; cursor:pointer; background:#222; }
    .icon-button:hover { background:#333; }
    .back { background:#ff4500; }
    h2 { color:#ffd700; margin-bottom:10px; }
    ul { margin-left:20px; margin-bottom:10px; }
    p { margin-bottom:10px; }
    .icon { font-size:1.4em; }
    input, textarea { width:100%; padding:8px; margin:5px 0; border-radius:6px; border:none; }
    .comments { background:#1b2a35; padding:10px; border-radius:6px; margin-bottom:10px; }
    .comment { background:#333; padding:8px; border-radius:6px; margin:5px 0; }
</style>
</head>
<body>
<!-- Firebase SDK (COMPAT version for GitHub Pages) -->
<script src="https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.1/firebase-database-compat.js"></script>

<script>
  const firebaseConfig = {
    apiKey: "AIzaSyC_ZxdFvYD-mZFy2ay586WS9dqLOaclgJw",
    authDomain: "data-jarra-guy-comment.firebaseapp.com",
    databaseURL: "https://data-jarra-guy-comment-default-rtdb.firebaseio.com",
    projectId: "data-jarra-guy-comment",
    storageBucket: "data-jarra-guy-comment.firebasestorage.app",
    messagingSenderId: "526520697755",
    appId: "1:526520697755:web:0a211bd50a2abd2694973e"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Realtime Database reference
  const db = firebase.database();
</script>
<header>Data Jarra Guy</header>
<div class="slogan">Naija Data Hustle - Save Your Data & Gbe Data Low!</div>

<div class="menu" id="main-menu">
    <p>Choose an option:</p>
    <div class="button" onclick="showContent('choose')">1️⃣ Choose One to Know Your Input</div>
    <div class="button" onclick="showContent('buy')">2️⃣ Buy Cheap Data</div>
    <div class="button" onclick="showContent('tips')">3️⃣ Tips to Make Your Data Last</div>
    <div class="button" onclick="showContent('story')">4️⃣ Funny Data Story</div>
    <div class="button" onclick="showContent('updates')">5️⃣ Updates & Entertainment</div>
    <div class="button" onclick="showContent('comments')">💬 Leave a Comment</div>
</div>

<div class="content" id="content-area" style="display:none;"></div>

<script>
// Store comments locally (browser memory)
let commentsArray = [];

function showContent(option){
    let content = document.getElementById('content-area');
    let menu = document.getElementById('main-menu');
    menu.style.display = 'none';
    content.style.display = 'block';

    if(option === 'choose'){
        content.innerHTML = `
            <h2>😈😇 Choose Your Path</h2>
            <p>Tap one icon to see your story. Think before you choose...</p>
            <div class="icon-button" onclick="showStory('devil')"><span class="icon">😈</span> Devil Child Story</div>
            <div class="icon-button" onclick="showStory('god')"><span class="icon">😇</span> God's Child Story</div>
            <div class="button back" onclick="backMenu()">⬅️ Back to Menu</div>
        `;
    } else if(option === 'buy'){
        content.innerHTML = `
            <h2>🔥 Buy Cheap Data</h2>
            <p>Get plans starting from <strong>₦100 for 7 days</strong>! Naija Data Hustle style!</p>
            <a href="#" class="button">₦100 Plan</a>
            <a href="#" class="button">₦200 Plan</a>
            <a href="#" class="button">₦500 Plan</a>
            <div class="button back" onclick="backMenu()">⬅️ Back to Menu</div>
        `;
    } else if(option === 'tips'){
        content.innerHTML = `
            <h2>💡 Tips to Save Data</h2>
            <ul>
                <li>Use Wi-Fi whenever possible</li>
                <li>Turn off auto-update for apps</li>
                <li>Enable Data Saver mode</li>
                <li>Download videos/music only on Wi-Fi</li>
                <li>Block background data for unused apps</li>
            </ul>
            <p><strong>Gbe Data Low!</strong> Make your data last longer and save your money!</p>
            <div class="button back" onclick="backMenu()">⬅️ Back to Menu</div>
        `;
    } else if(option === 'story'){
        content.innerHTML = `
            <h2>😂 Funny Data Story</h2>
            <p>Omo, na so e be sometimes, you wan download 1 movie na your 1GB finish like say you never buy am...</p>
            <p>Why you go gree make data dey waste your money? E better make we dey smart na! Save your data, gbe data low!</p>
            <div class="button back" onclick="backMenu()">⬅️ Back to Menu</div>
        `;
    } else if(option === 'updates'){
        content.innerHTML = `
            <h2>🔔 Updates & Entertainment</h2>
            <p>More cheap data hacks, tips, tricks & surprises for smart people like you. Stay tuned!</p>
            <p>🎵 Fun entertainment: Jokes, memes & stories in Pidgin English!</p>
            <div class="button back" onclick="backMenu()">⬅️ Back to Menu</div>
        `;
    } else if(option === 'comments'){
        let commentsHTML = commentsArray.map(c => `<div class="comment">${c}</div>`).join('');
        content.innerHTML = `
            <h2>💬 Comments</h2>
            <div class="comments">${commentsHTML || 'No comments yet!'}</div>
            <input type="text" id="name" placeholder="Your Name">
            <textarea id="message" placeholder="Write your comment"></textarea>
            <div class="button" onclick="addComment()">Submit Comment</div>
            <div class="button back" onclick="backMenu()">⬅️ Back to Menu</div>
        `;
    }
}

function showStory(choice){
    let content = document.getElementById('content-area');
    if(choice === 'devil'){
        content.innerHTML = `
            <h2>😈 Devil Child</h2>
            <p>Omo, if you dey follow wrong ways, dey waste money, e go hard for you later. In 80 years you go pay back all the wahala you dey cause today.</p>
            <p>Story: One guy wey like chop data anyhow, e no dey save, e dey download tori, video, game anyhow, na so him dey lose him salary every month. E never sabi hustle. E dey cry later 😭.</p>
            <div class="button" onclick="followUp('devil')">➡️ Next</div>
        `;
    } else if(choice === 'god'){
        content.innerHTML = `
            <h2>😇 God's Child</h2>
            <p>If you dey smart, dey avoid sin, dey follow correct path, God go bless you. In 80 years you go make money, no suffer, live well.</p>
            <p>Story: One girl dey save her data, dey hustle small small, dey download correct things, dey follow God advice. Na so she dey grow, get money, dey enjoy life 😎.</p>
            <div class="button" onclick="followUp('god')">➡️ Next</div>
        `;
    }
}

function followUp(choice){
    let content = document.getElementById('content-area');
    content.innerHTML = `
        <h2>💬 Do You Love This Story?</h2>
        <p>${choice==='devil' ? 'You saw the truth of wrong path 😈. Are you ready to change?' : 'You saw the blessings of smart choices 😇. Ready to hustle wisely?'}</p>
        <div class="button" onclick="backMenu()">✅ Yes, Go Back to Menu</div>
        <div class="button" onclick="backMenu()">❌ No, Think Again</div>
    `;
}

function addComment(){
    let name = document.getElementById('name').value || 'Anonymous';
    let message = document.getElementById('message').value;
    if(message.trim() === '') return alert('Comment cannot be empty!');
    commentsArray.push(`<strong>${name}:</strong> ${message}`);
    showContent('comments');
}

function backMenu(){
    document.getElementById('content-area').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
}
</script>

</body>
</html>
