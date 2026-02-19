<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>That Jara Guy</title>
<style>
  body { font-family: Arial, sans-serif; margin:0; padding:0; transition: background 0.3s, color 0.3s;}
  header { background: #ffcc00; padding: 20px; text-align:center; }
  header h1 { margin:0; }
  ul { list-style: none; padding: 0; margin: 0; }
  li { margin: 10px 0; }
  a { text-decoration:none; padding:10px 15px; display:block; background:#333; color:#fff; border-radius:5px; transition:0.3s; }
  a:hover { background:#555; }
  .collapsible { background:#444; color:#fff; cursor:pointer; padding:10px; border:none; width:100%; text-align:left; outline:none; border-radius:5px; }
  .content { padding:0 15px; display:none; overflow:hidden; background:#eee; color:#000; border-radius:5px; margin-bottom:10px; }
  .theme-toggle { position: fixed; top:10px; right:10px; padding:10px; cursor:pointer; background:#333; color:#fff; border:none; border-radius:5px;}
  body.dark { background:#222; color:#fff; }
  body.dark a { background:#555; color:#fff; }
  body.dark .content { background:#333; color:#fff; }
</style>
</head>
<body>

<header>
  <h1>That Jara Guy</h1>
  <button class="theme-toggle">Toggle Theme</button>
</header>

<ul>
  <li><a href="#" onclick="alert('Tip: Buy data at night for extra value!')">Buy Cheap Data</a></li>
  <li><a href="#" onclick="alert('Tip: Always use Wi-Fi when possible!')">Data Saving Tips</a></li>
  <li><button class="collapsible">Funny Data Stories</button>
      <div class="content">
        <p>Once I bought 1GB and it finished in 1 hour 😂</p>
        <p>Always check your auto-update apps!</p>
      </div>
  </li>
  <li><a href="https://tiktok.com/@yourprofile" target="_blank">Visit My TikTok</a></li>
  <li><a href="https://youtube.com/@yourchannel" target="_blank">Visit My YouTube</a></li>
  <li><a href="feedback.html">Send Feedback</a></li>
</ul>

<script>
  // Collapsible
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
</script>

</body>
</html><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Primary Meta Tags -->
    <title>Data Jarra Guy - Naija Data Hustle</title>
    <meta name="title" content="Data Jarra Guy - Naija Data Hustle">
    <meta name="description" content="Save Your Data & Gbe Data Low! Buy cheap data, entertainment, news, stories and more.">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://emmanuellucky731-hue.github.io/That-Jara-guy/">
    <meta property="og:title" content="Data Jarra Guy - Naija Data Hustle">
    <meta property="og:description" content="Save Your Data & Gbe Data Low! Buy cheap data, entertainment, news, stories and more.">
    <meta property="og:image" content="https://emmanuellucky731-hue.github.io/That-Jara-guy/preview.png">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://emmanuellucky731-hue.github.io/That-Jara-guy/">
    <meta property="twitter:title" content="Data Jarra Guy - Naija Data Hustle">
    <meta property="twitter:description" content="Save Your Data & Gbe Data Low! Buy cheap data, entertainment, news, stories and more.">
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Roboto', sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #0b141a 0%, #1a2530 100%);
            color: #e9edef;
            min-height: 100vh;
        }
        
        header {
            background: linear-gradient(135deg, #075e54 0%, #128c7e 100%);
            padding: 18px;
            text-align: center;
            font-size: 1.5em;
            font-weight: bold;
            box-shadow: 0 4px 6px rgba(0,0,0,0.3);
        }
        
        .slogan {
            text-align: center;
            color: #ffd700;
            margin: 12px 0;
            font-size: 1.1em;
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
        
        .menu, .content {
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .menu h2 {
            color: #ffd700;
            margin-bottom: 15px;
            text-align: center;
        }
        
        .icon-button {
            display: flex;
            align-items: center;
            justify-content: left;
            gap: 12px;
            padding: 14px;
            margin: 10px 0;
            border-radius: 12px;
            cursor: pointer;
            background: linear-gradient(135deg, #1e3a4f 0%, #2a4a5e 100%);
            transition: all 0.3s ease;
            box-shadow: 0 3px 6px rgba(0,0,0,0.2);
        }
        
        .icon-button:hover {
            background: linear-gradient(135deg, #2a4a5e 0%, #3a5a6e 100%);
            transform: translateY(-2px);
            box-shadow: 0 5px 10px rgba(0,0,0,0.3);
        }
        
        .icon {
            font-size: 1.5em;
            min-width: 30px;
        }
        
        .button {
            background: linear-gradient(135deg, #075e54 0%, #128c7e 100%);
            color: #e9edef;
            padding: 14px;
            margin: 10px 0;
            text-align: center;
            cursor: pointer;
            border-radius: 10px;
            font-weight: bold;
            box-shadow: 0 3px 6px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
        }
        
        .button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 10px rgba(0,0,0,0.3);
        }
        
        .back {
            background: linear-gradient(135deg, #ff4500 0%, #ff6347 100%);
        }
        
        h2 {
            color: #ffd700;
            margin-bottom: 15px;
        }
        
        h3 {
            color: #25d366;
            margin: 15px 0 10px 0;
        }
        
        ul {
            margin-left: 20px;
            margin-bottom: 15px;
        }
        
        li {
            margin-bottom: 8px;
            line-height: 1.6;
        }
        
        p {
            margin-bottom: 12px;
            line-height: 1.7;
        }
        
        .story-section {
            background: #1e3a4f;
            padding: 20px;
            border-radius: 12px;
            margin: 15px 0;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
        
        .story-title {
            color: #ffd700;
            font-size: 1.3em;
            margin-bottom: 10px;
            text-align: center;
        }
        
        .language-toggle {
            display: flex;
            gap: 10px;
            margin-bottom: 15px;
            justify-content: center;
        }
        
        .lang-btn {
            background: #075e54;
            color: white;
            padding: 8px 16px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: bold;
        }
        
        .lang-btn.active {
            background: #25d366;
        }
        
        .story-text {
            display: none;
        }
        
        .story-text.active {
            display: block;
        }
        
        /* Comment Section */
        .comment-section {
            background: #1b2a35;
            padding: 20px;
            border-radius: 12px;
            margin-top: 20px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
        
        input, textarea {
            width: 100%;
            padding: 12px;
            margin: 8px 0;
            border-radius: 8px;
            border: none;
            background: #2a3942;
            color: #e9edef;
            font-size: 1em;
        }
        
        input::placeholder, textarea::placeholder {
            color: #8696a0;
        }
        
        .submit-btn {
            background: linear-gradient(135deg, #25d366 0%, #20ba5a 100%);
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
            font-size: 1em;
            margin-top: 10px;
            width: 100%;
            transition: all 0.3s ease;
        }
        
        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 10px rgba(37, 211, 102, 0.4);
        }
        
        .comments {
            margin-top: 20px;
        }
        
        .comment {
            background: #2a3942;
            padding: 14px;
            border-radius: 8px;
            margin: 12px 0;
            border-left: 4px solid #25d366;
        }
        
        .comment-author {
            color: #25d366;
            font-weight: bold;
            margin-bottom: 6px;
        }
        
        .comment-text {
            color: #e9edef;
            line-height: 1.6;
        }
        
        .comment-time {
            color: #8696a0;
            font-size: 0.85em;
            margin-top: 6px;
        }
        
        .loading {
            text-align: center;
            color: #8696a0;
            padding: 20px;
        }
        
        /* Poll Section */
        .poll-option {
            background: #2a3942;
            padding: 12px;
            margin: 10px 0;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .poll-option:hover {
            background: #3a4952;
            transform: translateX(5px);
        }
        
        .poll-bar {
            background: #075e54;
            height: 8px;
            border-radius: 4px;
            margin-top: 8px;
            transition: width 0.5s ease;
        }
        
        .news-item {
            background: #1e3a4f;
            padding: 15px;
            margin: 12px 0;
            border-radius: 10px;
            border-left: 4px solid #ffd700;
        }
        
        .news-title {
            color: #ffd700;
            font-weight: bold;
            margin-bottom: 8px;
        }
        
        .news-time {
            color: #8696a0;
            font-size: 0.85em;
        }
    </style>
</head>
<body>
    <header>🔥 Data Jarra Guy 🔥</header>
    <div class="slogan">Naija Data Hustle - Save Your Data & Gbe Data Low!</div>
    
    <div class="menu" id="main-menu">
        <h2>🎯 Choose Your Adventure:</h2>
        
        <div class="icon-button" onclick="showContent('dataPlans')">
            <span class="icon">📱</span> <span>Choose Your Data Plan</span>
        </div>
        
        <div class="icon-button" onclick="showContent('buyData')">
            <span class="icon">💰</span> <span>Buy Cheap Data</span>
        </div>
        
        <div class="icon-button" onclick="showContent('dataTips')">
            <span class="icon">💡</span> <span>Tips to Save Your Data</span>
        </div>
        
        <div class="icon-button" onclick="showContent('story')">
            <span class="icon">📖</span> <span>Original Naija Story</span>
        </div>
        
        <div class="icon-button" onclick="showContent('news')">
            <span class="icon">📰</span> <span>Latest News & Gist</span>
        </div>
        
        <div class="icon-button" onclick="showContent('entertainment')">
            <span class="icon">🎬</span> <span>Entertainment Hub</span>
        </div>
        
        <div class="icon-button" onclick="showContent('football')">
            <span class="icon">⚽</span> <span>Football Gist</span>
        </div>
        
        <div class="icon-button" onclick="showContent('music')">
            <span class="icon">🎵</span> <span>Music & Videos</span>
        </div>
        
        <div class="icon-button" onclick="showContent('hobbies')">
            <span class="icon">🎨</span> <span>Hobbies & Skills</span>
        </div>
        
        <div class="icon-button" onclick="showContent('polls')">
            <span class="icon">📊</span> <span>Polls & Voting</span>
        </div>
        
        <div class="icon-button" onclick="showContent('techTips')">
            <span class="icon">💻</span> <span>Tech Tips & Tricks</span>
        </div>
        
        <div class="icon-button" onclick="showContent('motivation')">
            <span class="icon">💪</span> <span>Motivation Corner</span>
        </div>
        
        <div class="icon-button" onclick="showContent('communityStories')">
            <span class="icon">👥</span> <span>Community Stories</span>
        </div>
        
        <div class="icon-button" onclick="showContent('comments')">
            <span class="icon">💬</span> <span>Leave a Comment</span>
        </div>
    </div>
    
    <div class="content" id="content-area" style="display:none;">
        <!-- Content will be displayed here -->
    </div>
    
    <!-- Firebase SDK Scripts -->
    <script src="https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.22.1/firebase-database-compat.js"></script>
    
    <script>
        // Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyC_ZxdFvYD-mZFy2ay586WS9dqLOacIgJw",
            authDomain: "data-jarra-guy-comment.firebaseapp.com",
            databaseURL: "https://data-jarra-guy-comment-default-rtdb.firebaseio.com",
            projectId: "data-jarra-guy-comment",
            storageBucket: "data-jarra-guy-comment.firebasestorage.app",
            messagingSenderId: "526520697755",
            appId: "1:526520697755:web:0a211bd50a2abd2694973e"
        };
        
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        const database = firebase.database();
        
        // Content for each section
        const contentData = {
            dataPlans: {
                title: "📱 Choose Your Data Plan",
                content: `
                    <p>Pick the best data plan that fits your budget and lifestyle:</p>
                    <h3>🌟 Light Users</h3>
                    <ul>
                        <li><strong>100MB - ₦50</strong> (7 days) - WhatsApp and basic browsing</li>
                        <li><strong>500MB - ₦150</strong> (7 days) - Social media lover</li>
                        <li><strong>1GB - ₦250</strong> (30 days) - Perfect balance</li>
                    </ul>
                    <h3>🔥 Heavy Users</h3>
                    <ul>
                        <li><strong>3GB - ₦750</strong> (30 days) - Instagram and TikTok</li>
                        <li><strong>5GB - ₦1,200</strong> (30 days) - Stream music & videos</li>
                        <li><strong>10GB - ₦2,000</strong> (30 days) - Netflix and chill</li>
                        <li><strong>20GB - ₦3,500</strong> (30 days) - Work from home</li>
                    </ul>
                    <p style="color: #ffd700; font-weight: bold;">💬 Contact us to order your data now!</p>
                `
            },
            
            buyData: {
                title: "💰 Buy Cheap Data",
                content: `
                    <h2>🎉 Special Promo Offers!</h2>
                    
                    <h3>📱 MTN Data Plans</h3>
                    <ul>
                        <li>500MB - ₦140 (7 days) ✨</li>
                        <li>1GB - ₦250 (30 days)</li>
                        <li>2GB - ₦450 (30 days)</li>
                        <li>3GB - ₦700 (30 days)</li>
                        <li>5GB - ₦1,000 (30 days) 🔥</li>
                        <li>10GB - ₦2,000 (30 days)</li>
                    </ul>
                    
                    <h3>📱 Airtel Data Plans</h3>
                    <ul>
                        <li>750MB - ₦200 (14 days)</li>
                        <li>1.5GB - ₦300 (30 days)</li>
                        <li>3GB - ₦550 (30 days)</li>
                        <li>6GB - ₦1,100 (30 days)</li>
                        <li>10GB - ₦1,900 (30 days)</li>
                    </ul>
                    
                    <h3>📱 Glo Data Plans</h3>
                    <ul>
                        <li>1.6GB - ₦300 (30 days)</li>
                        <li>3.9GB - ₦700 (30 days)</li>
                        <li>7.5GB - ₦1,200 (30 days)</li>
                        <li>15GB - ₦2,200 (30 days)</li>
                    </ul>
                    
                    <p style="color: #25d366; font-weight: bold;">📞 Send us a message to order! Fast delivery guaranteed!</p>
                `
            },
            
            dataTips: {
                title: "💡 Tips to Make Your Data Last Longer",
                content: `
                    <h3>🎯 Pro Data-Saving Strategies:</h3>
                    
                    <h3>📱 Social Media Settings:</h3>
                    <ul>
                        <li>Turn off auto-play videos on Facebook, Instagram, and Twitter</li>
                        <li>Use Facebook Lite, Twitter Lite, and Instagram Lite versions</li>
                        <li>Download stories and reels on WiFi to watch later</li>
                        <li>Reduce video quality in app settings</li>
                    </ul>
                    
                    <h3>🌐 Browser Tricks:</h3>
                    <ul>
                        <li>Enable data saver mode in Chrome or Opera Mini</li>
                        <li>Block auto-playing ads and videos</li>
                        <li>Clear cache regularly</li>
                        <li>Use text-only mode when possible</li>
                    </ul>
                    
                    <h3>🎵 Music & Videos:</h3>
                    <ul>
                        <li>Download songs on WiFi (Spotify, Apple Music, YouTube Music)</li>
                        <li>Stream on low quality (144p-360p for videos)</li>
                        <li>Use offline mode in music apps</li>
                        <li>Avoid streaming in HD unless necessary</li>
                    </ul>
                    
                    <h3>📲 App Management:</h3>
                    <ul>
                        <li>Close background apps using data</li>
                        <li>Disable auto-updates for apps</li>
                        <li>Turn off cloud backup when using mobile data</li>
                        <li>Use WiFi for app downloads and updates</li>
                    </ul>
                    
                    <p><strong>🔥 Bonus Tip:</strong> Set data usage warnings on your phone to track consumption!</p>
                `
            },
            
            story: {
                title: "📖 Original Naija Story: The Data Hustler's Fortune",
                content: `
                    <div class="story-section">
                        <h2 class="story-title">The Data Hustler's Fortune</h2>
                        <p style="text-align: center; color: #8696a0; font-style: italic;">An Original Tale by Data Jarra Guy</p>
                        
                        <div class="language-toggle">
                            <button class="lang-btn active" onclick="switchLanguage('english')">English</button>
                            <button class="lang-btn" onclick="switchLanguage('pidgin')">Pidgin</button>
                        </div>
                        
                        <div id="english-story" class="story-text active">
                            <h3>Chapter 1: The Beginning</h3>
                            <p>In the bustling streets of Mushin, Lagos, where the sun scorched the earth and dreams were as precious as water, lived a young man named Emeka. He was not born with silver spoon, neither was his father a politician or oil magnate. What Emeka had was sharper than any degree from abroad – he had street wisdom and an unbreakable spirit.</p>
                            
                            <p>Every morning, Emeka would wake up at 4 AM in his one-room apartment that he shared with his younger sister, Chioma. The room was so small that when Chioma stretched in her sleep, she would accidentally kick the small gas cylinder they used for cooking. But Emeka never complained. He knew that every great story started from somewhere humble.</p>
                            
                            <p>Emeka worked at a small phone repair shop owned by Oga Musa, a Lebanese man who had lived in Nigeria for thirty years. The pay was terrible – barely ₦15,000 per month – but Emeka treated it like he was learning at Harvard Business School. He watched everything. How Oga Musa negotiated with suppliers, how he calculated profit margins, how he smiled even when customers complained.</p>
                            
                            <h3>Chapter 2: The Discovery</h3>
                            <p>One scorching afternoon, a well-dressed woman entered the shop. Her perfume filled the small space, and her iPhone gleamed under the fluorescent lights. She needed data urgently – her son was writing JAMB in two hours, and his phone had no data for the computer-based test instructions.</p>
                            
                            <p>"Please, I need 2GB urgently. I'll pay anything," she begged, her voice trembling with desperation.</p>
                            
                            <p>Oga Musa quoted ₦1,500. Emeka's eyes widened. He knew that 2GB cost less than ₦500 from the network. That was more than 200% profit margin! The woman paid without hesitation and even added ₦500 as thank you.</p>
                            
                            <p>That night, Emeka couldn't sleep. His mind calculated endlessly. If he could sell just 20 data bundles per day at ₦300 profit each, that was ₦6,000 daily. In a month, ₦180,000! More than ten times his salary!</p>
                            
                            <h3>Chapter 3: The First Customer</h3>
                            <p>Emeka started small. He borrowed ₦5,000 from his savings and opened a small data-selling account. His first customer was Mama Ngozi, the widow who sold akara at the junction. She needed 1GB for her son who was studying for WAEC.</p>
                            
                            <p>"Emeka, my pikin, how much?" she asked, her wrapper tied loosely around her waist, sweat dripping from her forehead.</p>
                            
                            <p>"For you, Mama, special price – ₦200," Emeka said, though he was making only ₦50 profit.</p>
                            
                            <p>Mama Ngozi's face lit up like Christmas lights. "God bless you, my son! Those MTN people wanted ₦500 from me!"</p>
                            
                            <p>Within a week, Mama Ngozi had told every market woman about "Emeka, the data boy who no dey cheat person." His phone started buzzing with orders. Secondary school students preparing for exams. Keke drivers who wanted to listen to music. Market women checking their children's school results online.</p>
                            
                            <h3>Chapter 4: The Obstacle</h3>
                            <p>Success brought enemies. Big Boy Tony, who controlled most of the phone accessory business in Mushin, heard about Emeka's data business. Tony was the kind of person who believed the market belonged to him alone.</p>
                            
                            <p>One evening, three boys approached Emeka. "Oga Tony say make you come see am," the tallest one said, his voice rough like sandpaper.</p>
                            
                            <p>In Tony's shop – a large space with gleaming phones and accessories – Tony sat in a leather chair, his gold chain catching the light. "I hear say you dey sell data for my territory," he said slowly. "This area na my area. You fit either work for me, or you comot."</p>
                            
                            <p>Emeka's heart raced, but he remembered his father's words before he died: "Emeka, when trouble come, no be to run. Na to think smart." </p>
                            
                            <p>"Big Bro Tony," Emeka said respectfully. "I understand say you be the boss for here. But I get one proposal. Make we partner. I go help you set up data business for all your shops. We go share profit 50-50."</p>
                            
                            <p>Tony laughed, a deep rumbling sound. "This boy sabi talk! You get sense pass how I think. Okay, we go try am."</p>
                            
                            <h3>Chapter 5: The Empire</h3>
                            <p>Within six months, Emeka and Tony's partnership had spread across five local governments. They employed ten young people, all from the streets, all hungry for success. Emeka taught them everything – customer service, pricing strategies, how to build trust.</p>
                            
                            <p>But Emeka's vision went beyond just selling data. He started offering free data to students who brought their report cards showing improvement. He sponsored a community football tournament. He helped Mama Ngozi expand her akara business with a small loan.</p>
                            
                            <p>One year after selling his first data bundle to Mama Ngozi, Emeka moved his sister Chioma to a better school. He rented a proper two-bedroom apartment for them. He bought his mother in the village a grinding machine for her pepper business.</p>
                            
                            <h3>Chapter 6: The True Wealth</h3>
                            <p>On a cool evening, as Emeka sat in his new office – a small shop with air conditioning and proper chairs – a young boy of about fourteen approached him. The boy's clothes were torn, his slippers held together with wire.</p>
                            
                            <p>"Bros Emeka," the boy said shyly. "I dey see how you dey help people. I want learn this data business. I no get money, but I fit work hard."</p>
                            
                            <p>Emeka looked at the boy and saw himself two years ago – hungry, determined, desperate for a chance. He smiled.</p>
                            
                            <p>"What's your name?"</p>
                            
                            <p>"Tunde, sir."</p>
                            
                            <p>"Okay, Tunde. Tomorrow, 7 AM, be here. I go teach you everything I know. But you must promise me one thing – when you succeed, you must help another person climb too."</p>
                            
                            <p>Tunde's eyes filled with tears. "I promise, Bros Emeka. I swear!"</p>
                            
                            <p>That night, as Emeka counted the day's profits, he realized something profound. The real fortune wasn't in the money he made. It was in the lives he changed. In Mama Ngozi's son who passed WAEC with distinction. In Chioma's improved grades. In Tony learning that partnership was better than monopoly. In young Tunde getting a chance.</p>
                            
                            <p>He pulled out his phone and typed a message to his late father's old number, a habit he kept: "Papa, I don learn say true wealth no be only money. Na the people wey you help along the way. Na the difference wey you make for people life. I hope say I dey make you proud."</p>
                            
                            <p>As he pressed send, knowing the message would never be delivered, Emeka smiled. Because he knew, somehow, somewhere, his father was watching. And he was proud.</p>
                            
                            <p style="text-align: center; font-weight: bold; color: #ffd700; margin-top: 20px;">THE END</p>
                            
                            <p style="text-align: center; font-style: italic; color: #8696a0; margin-top: 15px;">"Success na journey, not destination. And the best success na the one wey you carry other people along."</p>
                        </div>
                        
                        <div id="pidgin-story" class="story-text">
                            <h3>Chapter 1: How E Start</h3>
                            <p>For Mushin, Lagos, where sun dey shine well well and dream dey cost like gold, one young guy wey dem dey call Emeka dey live. E no born with silver spoon, e papa no be politician or oil money man. But Emeka get sense wey sharp pass any oyinbo degree – e get street wisdom and spirit wey no fit break.</p>
                            
                            <p>Every morning, Emeka go wake by 4 AM for the one room wey e dey share with e younger sister, Chioma. The room small reach say when Chioma dey stretch for sleep, e go dey kick the small gas cylinder wey dem dey use cook. But Emeka no dey complain. E know say every big man story dey start from somewhere wey no too fine.</p>
                            
                            <p>Emeka dey work for one small phone repair shop wey Oga Musa, one Lebanese man wey don stay Naija thirty years, get. The pay wey dem dey give am na ₦15,000 per month – money wey no fit even buy good shoe. But Emeka take the work like say na Harvard Business School e dey go learn. E dey watch everything. How Oga Musa dey price things, how e dey talk with customers, how e dey smile even when person vex.</p>
                            
                            <h3>Chapter 2: How E Discover the Business</h3>
                            <p>One hot afternoon, one fine woman enter the shop. Her perfume scatter everywhere, and her iPhone dey shine well well. She need data urgent – her pikin wan write JAMB, and e phone no get data for the computer test.</p>
                            
                            <p>"Abeg, I need 2GB sharp sharp. I go pay any amount," she beg, her voice dey shake.</p>
                            
                            <p>Oga Musa tell am ₦1,500. Emeka eye com clear! E know say 2GB no reach ₦500 from network. That one na more than 200% profit! The woman pay without noise and even add ₦500 ontop as thank you.</p>
                            
                            <p>That night, Emeka no fit sleep. E mind dey calculate. If e fit sell 20 data bundle per day with ₦300 profit each, na ₦6,000 daily. For one month, ₦180,000! Na more than ten times e salary!</p>
                            
                            <h3>Chapter 3: The First Customer</h3>
                            <p>Emeka start small small. E borrow ₦5,000 from e savings and open data-selling account. E first customer na Mama Ngozi, the widow wey dey sell akara for junction. She need 1GB for her son wey dey prepare for WAEC.</p>
                            
                            <p>"Emeka, my pikin, how much?" she ask am, wrapper tie loose for her waist, sweat dey pour from her forehead.</p>
                            
                            <p>"For you, Mama, special price – ₦200," Emeka talk, even though e gain na only ₦50.</p>
                            
                            <p>Mama Ngozi face shine like Christmas light. "God go bless you, my son! Those MTN people wan collect ₦500 from me!"</p>
                            
                            <p>Before one week finish, Mama Ngozi don tell every market woman about "Emeka, the data boy wey no dey cheat person." E phone begin dey ring with order. Secondary school students wey dey prepare for exam. Keke drivers wey wan hear music. Market women wey wan check their pikin result online.</p>
                            
                            <h3>Chapter 4: The Problem</h3>
                            <p>When you dey succeed, wahala go surely come. Big Boy Tony, wey dey control most of phone business for Mushin, hear about Emeka data business. Tony be the kind person wey believe say the whole market na him own alone.</p>
                            
                            <p>One evening, three boys come meet Emeka. "Oga Tony say make you come see am," the tallest one talk, e voice rough like sandpaper.</p>
                            
                            <p>For Tony shop – one big place with fine fine phones and accessories – Tony dey sit down for leather chair, e gold chain dey shine. "I hear say you dey sell data for my territory," e talk slowly. "This area na my area. You fit either work for me, or you comot."</p>
                            
                            <p>Emeka heart begin dey beat fast, but e remember wetin e papa talk before e die: "Emeka, when trouble come, no be to run. Na to think smart."</p>
                            
                            <p>"Big Bro Tony," Emeka talk with respect. "I understand say you be the oga for here. But I get one idea. Make we partner. I go help you set up data business for all your shops. We go share profit 50-50."</p>
                            
                            <p>Tony laugh, one deep laugh wey vibrate everywhere. "This boy sabi talk! You get sense pass how I think. Okay, we go try am."</p>
                            
                            <h3>Chapter 5: The Empire</h3>
                            <p>Before six months finish, Emeka and Tony partnership don spread reach five local government. Dem employ ten young people, all of dem from street, all of dem wey hunger for success. Emeka teach dem everything – how to treat customer well, how to price things, how to make people trust you.</p>
                            
                            <p>But Emeka vision pass just selling data. E start to dey give free data to students wey bring their report card wey show say dem improve. E sponsor community football tournament. E help Mama Ngozi expand her akara business with small loan.</p>
                            
                            <p>One year after e sell e first data to Mama Ngozi, Emeka move e sister Chioma go better school. E rent proper two-bedroom apartment for dem. E buy grinding machine for e mama for village for her pepper business.</p>
                            
                            <h3>Chapter 6: The Real Wealth</h3>
                            <p>One cool evening, as Emeka dey sit down for e new office – small shop with AC and proper chairs – one small boy of about fourteen come meet am. The boy cloth don tear, e slippers don almost cut.</p>
                            
                            <p>"Bros Emeka," the boy talk with shy. "I dey see how you dey help people. I wan learn this data business. I no get money, but I fit work hard."</p>
                            
                            <p>Emeka look the boy and see himself two years wey don pass – hungry, ready to work, just dey wait for chance. E smile.</p>
                            
                            <p>"Wetin be your name?"</p>
                            
                            <p>"Tunde, sir."</p>
                            
                            <p>"Okay, Tunde. Tomorrow, 7 AM, come here. I go teach you everything wey I know. But you must promise me one thing – when you succeed, you must help another person climb too."</p>
                            
                            <p>Tunde eyes full with water. "I promise, Bros Emeka. I swear!"</p>
                            
                            <p>That night, as Emeka dey count the day money, e realize something wey important well well. The real money no be the cash wey e make. Na the lives wey e change. Mama Ngozi pikin wey pass WAEC with distinction. Chioma wey her grade improve. Tony wey learn say partnership better pass monopoly. Young Tunde wey get chance now.</p>
                            
                            <p>E carry e phone type message to e papa old number, one thing wey e dey always do: "Papa, I don learn say true wealth no be only money. Na the people wey you help along the way. Na the difference wey you make for people life. I hope say I dey make you proud."</p>
                            
                            <p>As e press send, knowing say the message no go deliver, Emeka smile. Because e know say somehow, somewhere, e papa dey watch. And e dey proud.</p>
                            
                            <p style="text-align: center; font-weight: bold; color: #ffd700; margin-top: 20px;">THE END</p>
                            
                            <p style="text-align: center; font-style: italic; color: #8696a0; margin-top: 15px;">"Success na journey, e no be destination. And the best success na the one wey you carry other people along."</p>
                        </div>
                    </div>
                `
            },
            
            news: {
                title: "📰 Latest News & Gist",
                content: `
                    <div class="news-item">
                        <div class="news-title">🔥 New WhatsApp Features Coming to Nigeria!</div>
                        <p>WhatsApp announces voice message transcription and improved group calling features specifically for Nigerian users. Expected rollout in March 2026.</p>
                        <div class="news-time">2 hours ago</div>
                    </div>
                    
                    <div class="news-item">
                        <div class="news-title">💰 MTN Launches New Data Bonus</div>
                        <p>MTN Nigeria introduces "Data Gifting Plus" - buy data, get 20% bonus! Valid for all plans above ₦500. Limited time offer.</p>
                        <div class="news-time">5 hours ago</div>
                    </div>
                    
                    <div class="news-item">
                        <div class="news-title">🎓 JAMB Registration Extended</div>
                        <p>JAMB extends 2026 UTME registration deadline to March 15th. Late registration fee increased to ₦5,000.</p>
                        <div class="news-time">1 day ago</div>
                    </div>
                    
                    <div class="news-item">
                        <div class="news-title">⚡ Cheaper Internet Coming!</div>
                        <p>Nigerian government announces partnership with Starlink. Internet prices expected to drop by 40% by end of 2026.</p>
                        <div class="news-time">2 days ago</div>
                    </div>
                    
                    <div class="news-item">
                        <div class="news-title">📱 Tecno Launches Budget 5G Phone</div>
                        <p>Tecno announces Spark 20 5G at just ₦89,000. First affordable 5G smartphone for Nigerian market.</p>
                        <div class="news-time">3 days ago</div>
                    </div>
                `
            },
            
            entertainment: {
                title: "🎬 Entertainment Hub",
                content: `
                    <h3>🎭 Trending Now:</h3>
                    
                    <h3>🎬 Movies & Series:</h3>
                    <ul>
                        <li><strong>Gangs of Lagos 2</strong> - Releasing March 2026 on Prime Video</li>
                        <li><strong>King of Boys 3</strong> - Sola Sobowale returns! Coming April 2026</li>
                        <li><strong>Blood Sisters Season 2</strong> - Now streaming on Netflix</li>
                        <li><strong>Shanty Town</strong> - New Nollywood thriller breaking records</li>
                    </ul>
                    
                    <h3>📺 Reality TV:</h3>
                    <ul>
                        <li><strong>BBNaija 2026</strong> - Auditions open! Theme: "Level Up Returns"</li>
                        <li><strong>The Real Housewives of Lagos S2</strong> - Drama continues!</li>
                        <li><strong>Nigerian Idol 2026</strong> - Auditions in progress</li>
                    </ul>
                    
                    <h3>🎪 Upcoming Events:</h3>
                    <ul>
                        <li><strong>Detty December</strong> - Ghana vs Lagos, which you dey go?</li>
                        <li><strong>Afro Nation 2026</strong> - Tickets on sale now!</li>
                        <li><strong>Headies Awards 2026</strong> - Nominations announced</li>
                    </ul>
                    
                    <h3>🎭 Celebrity Gist:</h3>
                    <ul>
                        <li>Wizkid announces new album "More Love, Less Ego 2"</li>
                        <li>Burna Boy wins another Grammy nomination</li>
                        <li>Davido's wedding photos break Instagram records</li>
                        <li>Tiwa Savage signs international deal with Sony Music</li>
                    </ul>
                `
            },
            
            football: {
                title: "⚽ Football Gist",
                content: `
                    <h3>🇳🇬 Super Eagles Updates:</h3>
                    <ul>
                        <li><strong>AFCON 2025 Qualifiers:</strong> Nigeria defeats Ghana 3-1! Osimhen scores brace</li>
                        <li><strong>World Cup 2026 Path:</strong> Eagles need just 2 more wins to qualify</li>
                        <li><strong>New Coach Rumors:</strong> Jose Mourinho linked to Super Eagles job</li>
                        <li><strong>Osimhen Transfer:</strong> Man United offers €120M, Chelsea interested</li>
                    </ul>
                    
                    <h3>⚽ Premier League Gist:</h3>
                    <ul>
                        <li><strong>Arsenal</strong> top of table after beating Man City 2-0</li>
                        <li><strong>Chelsea</strong> struggling in 8th position under new manager</li>
                        <li><strong>Manchester United</strong> signs Nigerian wonderkid for £30M</li>
                        <li><strong>Liverpool</strong> leads goal scorers with Salah on 18 goals</li>
                    </ul>
                    
                    <h3>🏆 Champions League:</h3>
                    <ul>
                        <li>Real Madrid vs Bayern Munich - Quarter Finals preview</li>
                        <li>Barcelona's surprise comeback against PSG</li>
                        <li>Man City favorites to win after demolishing Inter 4-0</li>
                    </ul>
                    
                    <h3>🇪🇸 La Liga:</h3>
                    <ul>
                        <li>Barcelona leads table, 5 points clear of Real Madrid</li>
                        <li>Atletico Madrid signs Nigerian striker for record fee</li>
                    </ul>
                `
            },
            
            music: {
                title: "🎵 Music & Videos",
                content: `
                    <h3>🔥 Trending Songs:</h3>
                    <ul>
                        <li><strong>Asake</strong> - "Lonely At The Top" (Official Video out!)</li>
                        <li><strong>Rema</strong> - "Charm" ft. Selena Gomez</li>
                        <li><strong>Burna Boy</strong> - "City Boys" (Album: I Told Them)</li>
                        <li><strong>Wizkid</strong> - "IDK" ft. Zlatan</li>
                        <li><strong>Davido</strong> - "Na Money" ft. Angélique Kidjo & The Cavemen</li>
                        <li><strong>Ayra Starr</strong> - "Sability" (New Single)</li>
                        <li><strong>Omah Lay</strong> - "Holy Ghost" (TikTok Viral!)</li>
                    </ul>
                    
                    <h3>🎤 New Albums Dropping:</h3>
                    <ul>
                        <li><strong>Wizkid</strong> - "More Love, Less Ego 2" (March 2026)</li>
                        <li><strong>Olamide</strong> - "UY Scuti Deluxe" (Coming Soon)</li>
                        <li><strong>Fireboy DML</strong> - "Adedamola" (April 2026)</li>
                    </ul>
                    
                    <h3>📹 Must-Watch Music Videos:</h3>
                    <ul>
                        <li>Asake - "Lonely At The Top" (10M views in 24hrs!)</li>
                        <li>Rema - "Charm" (Hollywood production quality)</li>
                        <li>Kizz Daniel - "Twe Twe" (Dance challenge trending)</li>
                    </ul>
                    
                    <h3>🎧 Playlist Recommendations:</h3>
                    <ul>
                        <li><strong>Afrobeats Vibez</strong> - Latest hits from Naija</li>
                        <li><strong>Amapiano Wave</strong> - South African heat</li>
                        <li><strong>Old School Naija</strong> - 2face, D'banj, P-Square</li>
                        <li><strong>Gospel Vibes</strong> - Sinach, Nathaniel Bassey, Mercy Chinwo</li>
                    </ul>
                `
            },
            
            hobbies: {
                title: "🎨 Hobbies & Skills to Learn",
                content: `
                    <h3>💻 Tech Skills (High Paying):</h3>
                    <ul>
                        <li><strong>Web Development</strong> - Learn HTML, CSS, JavaScript (Earn ₦200k+/month)</li>
                        <li><strong>Graphics Design</strong> - Photoshop, CorelDraw, Canva (₦150k+/month)</li>
                        <li><strong>Video Editing</strong> - Premiere Pro, Final Cut, CapCut (₦180k+/month)</li>
                        <li><strong>Digital Marketing</strong> - Social media ads, SEO (₦250k+/month)</li>
                        <li><strong>Data Analysis</strong> - Excel, Python, SQL (₦300k+/month)</li>
                    </ul>
                    
                    <h3>🎭 Creative Skills:</h3>
                    <ul>
                        <li><strong>Content Creation</strong> - YouTube, TikTok, Instagram (Monetize!)</li>
                        <li><strong>Photography</strong> - Events, portraits, product shoots</li>
                        <li><strong>Voice Over</strong> - Narrations, ads, audiobooks</li>
                        <li><strong>Writing</strong> - Freelance writing, blogging, copywriting</li>
                    </ul>
                    
                    <h3>🛠️ Practical Skills:</h3>
                    <ul>
                        <li><strong>Phone Repair</strong> - High demand, low capital start</li>
                        <li><strong>Makeup Artistry</strong> - Bridal makeup pays well!</li>
                        <li><strong>Hair Styling</strong> - Always in demand</li>
                        <li><strong>Fashion Design</strong> - Start small, grow big</li>
                        <li><strong>Cooking/Catering</strong> - Events, small chops business</li>
                    </ul>
                    
                    <h3>📚 Free Learning Resources:</h3>
                    <ul>
                        <li><strong>YouTube</strong> - Free tutorials for everything</li>
                        <li><strong>Coursera</strong> - University courses (some free)</li>
                        <li><strong>Udemy</strong> - Discount courses under ₦5,000</li>
                        <li><strong>Google Digital Skills</strong> - Free certification</li>
                    </ul>
                    
                    <p style="color: #ffd700; font-weight: bold;">💡 Pro Tip: Pick one skill, master it in 3-6 months, start earning!</p>
                `
            },
            
            polls: {
                title: "📊 Polls & Voting",
                content: `
                    <div class="comment-section">
                        <h3>🗳️ Current Polls:</h3>
                        
                        <h3 style="color: #25d366;">Which network has the best data?</h3>
                        <div class="poll-option" onclick="vote('poll1', 'mtn')">
                            <span>📱 MTN</span>
                            <span id="poll1-mtn-votes">0 votes</span>
                        </div>
                        <div class="poll-bar" id="poll1-mtn-bar" style="width: 0%"></div>
                        
                        <div class="poll-option" onclick="vote('poll1', 'airtel')">
                            <span>📱 Airtel</span>
                            <span id="poll1-airtel-votes">0 votes</span>
                        </div>
                        <div class="poll-bar" id="poll1-airtel-bar" style="width: 0%"></div>
                        
                        <div class="poll-option" onclick="vote('poll1', 'glo')">
                            <span>📱 Glo</span>
                            <span id="poll1-glo-votes">0 votes</span>
                        </div>
                        <div class="poll-bar" id="poll1-glo-bar" style="width: 0%"></div>
                        
                        <div class="poll-option" onclick="vote('poll1', '9mobile')">
                            <span>📱 9mobile</span>
                            <span id="poll1-9mobile-votes">0 votes</span>
                        </div>
                        <div class="poll-bar" id="poll1-9mobile-bar" style="width: 0%"></div>
                        
                        <hr style="margin: 30px 0; border-color: #2a3942;">
                        
                        <h3 style="color: #25d366;">Who's the best Afrobeats artist?</h3>
                        <div class="poll-option" onclick="vote('poll2', 'wizkid')">
                            <span>🎵 Wizkid</span>
                            <span id="poll2-wizkid-votes">0 votes</span>
                        </div>
                        <div class="poll-bar" id="poll2-wizkid-bar" style="width: 0%"></div>
                        
                        <div class="poll-option" onclick="vote('poll2', 'burna')">
                            <span>🎵 Burna Boy</span>
                            <span id="poll2-burna-votes">0 votes</span>
                        </div>
                        <div class="poll-bar" id="poll2-burna-bar" style="width: 0%"></div>
                        
                        <div class="poll-option" onclick="vote('poll2', 'davido')">
                            <span>🎵 Davido</span>
                            <span id="poll2-davido-votes">0 votes</span>
                        </div>
                        <div class="poll-bar" id="poll2-davido-bar" style="width: 0%"></div>
                        
                        <div class="poll-option" onclick="vote('poll2', 'asake')">
                            <span>🎵 Asake</span>
                            <span id="poll2-asake-votes">0 votes</span>
                        </div>
                        <div class="poll-bar" id="poll2-asake-bar" style="width: 0%"></div>
                    </div>
                `
            },
            
            techTips: {
                title: "💻 Tech Tips & Tricks",
                content: `
                    <h3>📱 Phone Tips:</h3>
                    <ul>
                        <li><strong>Battery Saving:</strong> Turn off auto-brightness, reduce screen timeout, close unused apps</li>
                        <li><strong>Speed Up Phone:</strong> Clear cache regularly, delete unused apps, restart weekly</li>
                        <li><strong>Free Up Space:</strong> Use Google Photos to backup and delete local photos</li>
                        <li><strong>Security:</strong> Use fingerprint/face lock, enable Find My Device</li>
                    </ul>
                    
                    <h3>💾 Hidden Phone Features:</h3>
                    <ul>
                        <li><strong>Screen Recording:</strong> Most Android phones - swipe down, tap screen record icon</li>
                        <li><strong>Split Screen:</strong> Open 2 apps at once - tap recent apps, select split screen</li>
                        <li><strong>One-Handed Mode:</strong> Settings > Advanced features > One-handed mode</li>
                        <li><strong>Secret Calculator:</strong> Hide photos in calculator apps (search Play Store)</li>
                    </ul>
                    
                    <h3>🌐 WhatsApp Tricks:</h3>
                    <ul>
                        <li><strong>Bold Text:</strong> *your text* becomes <strong>your text</strong></li>
                        <li><strong>Italic:</strong> _your text_ becomes <em>your text</em></li>
                        <li><strong>Strikethrough:</strong> ~your text~ becomes <s>your text</s></li>
                        <li><strong>Read Deleted Messages:</strong> Use notification log (search Play Store)</li>
                        <li><strong>Hide Last Seen:</strong> Settings > Privacy > Last Seen > Nobody</li>
                    </ul>
                    
                    <h3>🔐 Stay Safe Online:</h3>
                    <ul>
                        <li>Never share OTP or bank details on calls</li>
                        <li>Use strong passwords (mix letters, numbers, symbols)</li>
                        <li>Enable 2-factor authentication on all accounts</li>
                        <li>Don't click suspicious links in messages</li>
                        <li>Use VPN on public WiFi</li>
                    </ul>
                `
            },
            
            motivation: {
                title: "💪 Motivation Corner",
                content: `
                    <h3>🌟 Daily Motivation:</h3>
                    <p style="font-size: 1.2em; color: #ffd700; font-style: italic; text-align: center; padding: 20px; background: #1e3a4f; border-radius: 10px; margin: 15px 0;">
                        "The fact say you never reach where you dey go no mean say you never leave where you dey before. Progress na progress, no matter how small."
                    </p>
                    
                    <h3>💭 Success Stories from Naija:</h3>
                    <ul>
                        <li><strong>Linda Ikeji</strong> - Started blogging with ₦100, now worth millions</li>
                        <li><strong>Mark Angel</strong> - Comedy skits from phone, now media mogul</li>
                        <li><strong>Hushpuppi</strong> - Wait, skip this one! 😂</li>
                        <li><strong>Mr Macaroni</strong> - Teacher turned content creator, now celebrity</li>
                        <li><strong>Tacha</strong> - From reality TV to millionaire businesswoman</li>
                    </ul>
                    
                    <h3>🎯 Rules for Success:</h3>
                    <ul>
                        <li><strong>Start Now:</strong> Waiting for "perfect time" na waste of time</li>
                        <li><strong>Stay Consistent:</strong> Small daily progress beats big one-time effort</li>
                        <li><strong>Learn Always:</strong> YouTube don make learning free</li>
                        <li><strong>Build Network:</strong> Your network na your net worth</li>
                        <li><strong>Save Money:</strong> No matter how small, save something</li>
                        <li><strong>Stay Humble:</strong> Pride don kill many people progress</li>
                    </ul>
                    
                    <h3>📈 Money Mindset:</h3>
                    <ul>
                        <li>Stop saying "I no get money" - say "How I fit make this money?"</li>
                        <li>Invest in yourself before you invest in anything else</li>
                        <li>Every problem na business opportunity in disguise</li>
                        <li>Rich people dey find opportunities, poor people dey find excuses</li>
                    </ul>
                    
                    <p style="color: #25d366; font-weight: bold; text-align: center; margin-top: 20px;">
                        "Your current situation no be your final destination. Keep pushing! 💪"
                    </p>
                `
            },
            
            communityStories: {
                title: "👥 Community Stories",
                content: `
                    <div class="comment-section">
                        <h3>📝 Share Your Success Story!</h3>
                        <p>Tell us how data hustle or any other hustle don change your life. Your story fit inspire person!</p>
                        
                        <input type="text" id="story-name" placeholder="Your name">
                        <input type="text" id="story-title" placeholder="Story title">
                        <textarea id="story-content" rows="6" placeholder="Share your story here..."></textarea>
                        <button class="submit-btn" onclick="postStory()">Share My Story</button>
                        
                        <h3 style="margin-top: 30px;">📖 Recent Stories:</h3>
                        <div class="comments" id="stories-list">
                            <div class="loading">Loading community stories...</div>
                        </div>
                    </div>
                `
            },
            
            comments: {
                title: "💬 Leave a Comment",
                content: `
                    <div class="comment-section">
                        <h2>Share Your Thoughts!</h2>
                        <input type="text" id="comment-name" placeholder="Your name">
                        <textarea id="comment-text" rows="4" placeholder="Write your comment here..."></textarea>
                        <button class="submit-btn" onclick="postComment()">Post Comment</button>
                        
                        <div class="comments" id="comments-list">
                            <div class="loading">Loading comments...</div>
                        </div>
                    </div>
                `
            }
        };
        
        function showContent(option) {
            const menu = document.getElementById('main-menu');
            const contentArea = document.getElementById('content-area');
            const data = contentData[option];
            
            menu.style.display = 'none';
            contentArea.style.display = 'block';
            
            contentArea.innerHTML = `
                <h2>${data.title}</h2>
                ${data.content}
                <div class="button back" onclick="goBack()">⬅️ Back to Menu</div>
            `;
            
            // Load appropriate data
            if (option === 'comments') {
                loadComments();
            } else if (option === 'communityStories') {
                loadStories();
            } else if (option === 'polls') {
                loadPolls();
            }
        }
        
        function goBack() {
            document.getElementById('main-menu').style.display = 'block';
            document.getElementById('content-area').style.display = 'none';
        }
        
        // Language switcher for story
        function switchLanguage(lang) {
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.story-text').forEach(text => text.classList.remove('active'));
            
            if (lang === 'english') {
                document.querySelector('.lang-btn:first-child').classList.add('active');
                document.getElementById('english-story').classList.add('active');
            } else {
                document.querySelector('.lang-btn:last-child').classList.add('active');
                document.getElementById('pidgin-story').classList.add('active');
            }
        }
        
        // Comment functions
        function postComment() {
            const name = document.getElementById('comment-name').value.trim();
            const text = document.getElementById('comment-text').value.trim();
            
            if (!name || !text) {
                alert('Please fill in both name and comment!');
                return;
            }
            
            const commentsRef = database.ref('comments');
            commentsRef.push({
                name: name,
                text: text,
                timestamp: Date.now()
            }).then(() => {
                document.getElementById('comment-name').value = '';
                document.getElementById('comment-text').value = '';
                alert('Comment posted successfully! 🎉');
            }).catch((error) => {
                console.error('Error:', error);
                alert('Error posting comment. Please try again.');
            });
        }
        
        function loadComments() {
            const commentsList = document.getElementById('comments-list');
            const commentsRef = database.ref('comments');
            
            commentsRef.on('value', (snapshot) => {
                const comments = snapshot.val();
                
                if (!comments) {
                    commentsList.innerHTML = '<p class="loading">No comments yet. Be the first!</p>';
                    return;
                }
                
                const commentsArray = Object.entries(comments).map(([key, value]) => ({
                    id: key,
                    ...value
                })).sort((a, b) => b.timestamp - a.timestamp);
                
                commentsList.innerHTML = commentsArray.map(comment => {
                    const timeAgo = getTimeAgo(new Date(comment.timestamp));
                    return `
                        <div class="comment">
                            <div class="comment-author">${escapeHtml(comment.name)}</div>
                            <div class="comment-text">${escapeHtml(comment.text)}</div>
                            <div class="comment-time">${timeAgo}</div>
                        </div>
                    `;
                }).join('');
            });
        }
        
        // Story functions
        function postStory() {
            const name = document.getElementById('story-name').value.trim();
            const title = document.getElementById('story-title').value.trim();
            const content = document.getElementById('story-content').value.trim();
            
            if (!name || !title || !content) {
                alert('Please fill in all fields!');
                return;
            }
            
            const storiesRef = database.ref('stories');
            storiesRef.push({
                name: name,
                title: title,
                content: content,
                timestamp: Date.now()
            }).then(() => {
                document.getElementById('story-name').value = '';
                document.getElementById('story-title').value = '';
                document.getElementById('story-content').value = '';
                alert('Story shared successfully! 🎉');
            }).catch((error) => {
                console.error('Error:', error);
                alert('Error posting story. Please try again.');
            });
        }
        
        function loadStories() {
            const storiesList = document.getElementById('stories-list');
            const storiesRef = database.ref('stories');
            
            storiesRef.on('value', (snapshot) => {
                const stories = snapshot.val();
                
                if (!stories) {
                    storiesList.innerHTML = '<p class="loading">No stories yet. Share yours!</p>';
                    return;
                }
                
                const storiesArray = Object.entries(stories).map(([key, value]) => ({
                    id: key,
                    ...value
                })).sort((a, b) => b.timestamp - a.timestamp);
                
                storiesList.innerHTML = storiesArray.map(story => {
                    const timeAgo = getTimeAgo(new Date(story.timestamp));
                    return `
                        <div class="comment">
                            <div class="comment-author">${escapeHtml(story.name)}</div>
                            <h3 style="color: #ffd700; margin: 8px 0;">${escapeHtml(story.title)}</h3>
                            <div class="comment-text">${escapeHtml(story.content)}</div>
                            <div class="comment-time">${timeAgo}</div>
                        </div>
                    `;
                }).join('');
            });
        }
        
        // Poll functions
        function vote(pollId, option) {
            const pollRef = database.ref('polls/' + pollId + '/' + option);
            pollRef.transaction((current) => {
                return (current || 0) + 1;
            }).then(() => {
                alert('Vote recorded! 🎉');
            });
        }
        
        function loadPolls() {
            const polls = ['poll1', 'poll2'];
            
            polls.forEach(pollId => {
                const pollRef = database.ref('polls/' + pollId);
                pollRef.on('value', (snapshot) => {
                    const votes = snapshot.val() || {};
                    let total = 0;
                    
                    Object.values(votes).forEach(count => total += count);
                    
                    Object.entries(votes).forEach(([option, count]) => {
                        const percentage = total > 0 ? (count / total * 100) : 0;
                        const votesEl = document.getElementById(`${pollId}-${option}-votes`);
                        const barEl = document.getElementById(`${pollId}-${option}-bar`);
                        
                        if (votesEl) votesEl.textContent = `${count} votes`;
                        if (barEl) barEl.style.width = `${percentage}%`;
                    });
                });
            });
        }
        
        // Helper functions
        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }
        
        function getTimeAgo(date) {
            const seconds = Math.floor((new Date() - date) / 1000);
            
            if (seconds < 60) return 'Just now';
            if (seconds < 3600) return Math.floor(seconds / 60) + ' minutes ago';
            if (seconds < 86400) return Math.floor(seconds / 3600) + ' hours ago';
            if (seconds < 2592000) return Math.floor(seconds / 86400) + ' days ago';
            return Math.floor(seconds / 2592000) + ' months ago';
        }
    </script>
</body>
</html>
