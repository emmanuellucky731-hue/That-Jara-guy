<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>That Jara Guy</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #0f172a;
      color: #e5e7eb;
      text-align: center;
    }

    h1, h2 {
      margin-top: 20px;
    }

    .container {
      padding: 20px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 15px;
      margin-top: 30px;
    }

    .card {
      background: #1e293b;
      padding: 20px;
      border-radius: 15px;
      cursor: pointer;
      transition: transform 0.2s, background 0.2s;
    }

    .card:hover {
      transform: scale(1.05);
      background: #334155;
    }

    .icon {
      font-size: 32px;
    }

    button {
      margin-top: 25px;
      padding: 10px 20px;
      border-radius: 10px;
      border: none;
      cursor: pointer;
      background: #22c55e;
      color: #000;
      font-weight: bold;
    }

    .hidden {
      display: none;
    }

    .story {
      max-width: 700px;
      margin: auto;
      line-height: 1.6;
      margin-top: 20px;
    }
  </style>
</head>

<body>
<!-- LONG SWEET ORIGINAL STORY -->
<div id="longstory" class="container hidden">
  <h2>📖 The Story of the Jara Heart</h2>
  <div class="story">
    <p>
      Once upon a Naija morning, long before data was cheap and hustle was loud,
      there was a young soul wey dem call **Jara Heart**. E no rich. E no famous.
      But the fire for the chest of this young soul no be small thing.
    </p>
    <p>
      Every day Jara Heart dey wake before sunrise, wash eyes, look mirror, whisper:
      “Today I go win.” People dey laugh — na so dem laugh.  
      But laughter no stop him ground.  
      Na pain dem no understand, na hunger dem no carry,  
      but that inner voice dey push am move.
    </p>
    <p>
      One day Jara Heart buy data. But no be to watch TikToks, no be to cruise —
      e buy data to learn coding, to read, to grow.  
      E no sabi big laptop, no get big school certificate,  
      but that one hour everyday with data + hunger + drive,  
      turn small moves to big steps.
    </p>
    <p>
      As time dey go, people wey laugh at am begin ask for help.  
      “Teach me,” dem say.  
      Jara Heart smile, because the same data wey dem laugh was the data wey carry am rise.
    </p>
    <p>
      Today, Jara Heart no just dey survive — e dey inspire.
      People follow am. People respect am.  
      And every time someone ask am secret of success,  
      Jara Heart smile and talk:
    </p>
    <p><em>“No be who start first, na who no stop.”</em></p>
    <p>
      This story no be fairy tale.  
      Na the kind story wey dey remind us say:
      <strong>your journey no small, your hustle matter, and your tomorrow dey depend on how you hustle today.</strong>
    </p>
    <p>
      So if you dey read this moment, remember:
      • the small steps you take today,  
      • the lessons you learn for free,  
      • the grind wey nobody dey notice,  
      all of that one day go turn gold for you.
    </p>
    <p>
      Keep your heart strong, keep your data productive,  
      and never let laughter steal your focus.
    </p>
  </div>
  <button onclick="goHome()">⬅ Back</button>
</div>
<!-- HOME -->
<div id="home" class="container">
  <h1>🔥 That Jara Guy</h1>
  <p>Choose your path. Every choice has a story.</p>

  <div class="grid">
    <div class="card" onclick="openSection('life')">
      <div class="icon">🧠</div>
      <p>Life Choices</p>
    </div>

    <div class="card" onclick="openSection('hustle')">
      <div class="icon">💼</div>
      <p>Hustle Stories</p>
    </div>

    <div class="card" onclick="openSection('spiritual')">
      <div class="icon">⚖️</div>
      <p>God vs Devil</p>
    </div>

    <div class="card" onclick="openSection('entertainment')">
      <div class="icon">🎭</div>
      <p>Entertainment</p>
    </div>

    <div class="card" onclick="openSection('motivation')">
      <div class="icon">🔥</div>
      <p>Motivation</p>
    </div>

    <div class="card" onclick="openSection('naija')">
      <div class="icon">🇳🇬</div>
      <p>Naija Stories</p>
    </div>
  </div>
</div>

<!-- LIFE -->
<div id="life" class="container hidden">
  <h2>🧠 Life Choices</h2>
  <div class="story">
    <p>
      Life no dey give everybody same road.  
      Some people start with bicycle, some start trekking.  
      But the destination no be by speed — na consistency.
    </p>
    <p>
      You go choose complain or learn?  
      Sleep or build?  
      Follow crowd or create path?
    </p>
    <p><strong>Question:</strong> Are you building your future or escaping today?</p>
  </div>
  <button onclick="goHome()">⬅ Back</button>
</div>

<!-- HUSTLE -->
<div id="hustle" class="container hidden">
  <h2>💼 Hustle Stories</h2>
  <div class="story">
    <p>
      One guy dey buy data to watch cruise.  
      Another dey buy data to learn skill.  
      Same data, different destiny.
    </p>
    <p>
      Hustle no loud.  
      Hustle dey silent until results shout.
    </p>
    <p><strong>Ask yourself:</strong> Wetin your data dey do for you?</p>
  </div>
  <button onclick="goHome()">⬅ Back</button>
</div>

<!-- GOD VS DEVIL -->
<div id="spiritual" class="container hidden">
  <h2>⚖️ Choose Your Side</h2>

  <div class="grid">
    <div class="card" onclick="openSection('god')">
      <div class="icon">✨</div>
      <p>God’s Child</p>
    </div>

    <div class="card" onclick="openSection('devil')">
      <div class="icon">😈</div>
      <p>Devil’s Shortcut</p>
    </div>
  </div>

  <button onclick="goHome()">⬅ Back</button>
</div>

<div id="god" class="container hidden">
  <h2>✨ God’s Child</h2>
  <div class="story">
    <p>
      God’s road no fast, but e sure.  
      Discipline, patience, sacrifice.
    </p>
    <p>
      You dey grow even when nobody dey clap for you.
    </p>
    <p><strong>Truth:</strong> Slow growth is still growth.</p>
  </div>
  <button onclick="goHome()">⬅ Back</button>
</div>

<div id="devil" class="container hidden">
  <h2>😈 Devil’s Shortcut</h2>
  <div class="story">
    <p>
      Everything quick.  
      No process. No patience.
    </p>
    <p>
      But shortcut no dey show where e end.
    </p>
    <p><strong>Warning:</strong> Fast money fit cost your peace.</p>
  </div>
  <button onclick="goHome()">⬅ Back</button>
</div>

<!-- ENTERTAINMENT -->
<div id="entertainment" class="container hidden">
  <h2>🎭 Entertainment</h2>
  <div class="story">
    <p>
      Laugh small. Life hard already.
    </p>
    <p>
      But remember — enjoyment without direction fit delay destiny.
    </p>
  </div>
  <button onclick="goHome()">⬅ Back</button>
</div>

<!-- MOTIVATION -->
<div id="motivation" class="container hidden">
  <h2>🔥 Motivation</h2>
  <div class="story">
    <p>
      Nobody is coming to save you.  
      That truth can break you or build you.
    </p>
    <p>
      Stand up again.
    </p>
  </div>
  <button onclick="goHome()">⬅ Back</button>
</div>

<!-- NAIJA -->
<div id="naija" class="container hidden">
  <h2>🇳🇬 Naija Stories</h2>
  <div class="story">
    <p>
      Na Nigeria train champions.  
      If you fit survive here, you fit win anywhere.
    </p>
  </div>
  <button onclick="goHome()">⬅ Back</button>
</div>

<script>
  function openSection(id) {
    document.querySelectorAll('.container').forEach(div => {
      div.classList.add('hidden');
    });
    document.getElementById(id).classList.remove('hidden');
  }

  function goHome() {
    openSection('home');
  }
</script>

</body>
</html>
