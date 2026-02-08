<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Data Jarra Guy - Naija Data Hustle</title>
<style>
    * { margin:0; padding:0; box-sizing:border-box; font-family: 'Roboto', sans-serif; }
    body { background:#0b141a; color:#e9edef; height:100vh; display:flex; flex-direction:column; }
    header { background:#075e54; padding:14px 18px; text-align:center; font-size:1.4em; font-weight:bold; }
    .slogan { text-align:center; color:#ffd700; margin:8px 0; font-size:1em; }
    .menu, .content { padding:20px; }
    .button { background:#075e54; color:#e9edef; padding:12px; margin:8px 0; text-align:center; cursor:pointer; border-radius:8px; font-weight:bold; }
    .button:hover { background:#0a8566; }
    .back { background:#ff4500; }
    a.button { display:block; text-decoration:none; }
    h2 { color:#ffd700; margin-bottom:10px; }
    ul { margin-left:20px; margin-bottom:10px; }
    p { margin-bottom:10px; }
</style>
</head>
<body>

<header>Data Jarra Guy</header>
<div class="slogan">Naija Data Hustle - Save Your Data & Gbe Data Low!</div>

<div class="menu" id="main-menu">
    <p>Choose an option:</p>
    <div class="button" onclick="showContent('buy')">1️⃣ Buy Cheap Data</div>
    <div class="button" onclick="showContent('tips')">2️⃣ Tips to Make Your Data Last</div>
    <div class="button" onclick="showContent('story')">3️⃣ Funny Data Story</div>
    <div class="button" onclick="showContent('mood')">4️⃣ Billionaire / Trillionaire / Poverty / Prove Yourself</div>
    <div class="button" onclick="showContent('updates')">5️⃣ Updates Coming Soon!</div>
</div>

<div class="content" id="content-area" style="display:none;"></div>

<script>
function showContent(option){
    let content = document.getElementById('content-area');
    let menu = document.getElementById('main-menu');
    menu.style.display = 'none';
    content.style.display = 'block';
    
    if(option === 'buy'){
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
    } else if(option === 'mood'){
        content.innerHTML = `
            <h2>💎 Mood Section</h2>
            <p>💎 Billionaire: For data kings who want max plans</p>
            <p>💸 Trillionaire: For heavy downloaders</p>
            <p>⚠️ Poverty Skip: For beginners, small plans</p>
            <p>✅ Prove One: Show say you sabi save and use smartly!</p>
            <div class="button back" onclick="backMenu()">⬅️ Back to Menu</div>
        `;
    } else if(option === 'updates'){
        content.innerHTML = `
            <h2>🔔 Updates Coming Soon!</h2>
            <p>More cheap data hacks, tips, tricks & surprises for smart people like you. Stay tuned!</p>
            <div class="button back" onclick="backMenu()">⬅️ Back to Menu</div>
        `;
    }
}

function backMenu(){
    document.getElementById('content-area').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
}
</script>

</body>
</html>
