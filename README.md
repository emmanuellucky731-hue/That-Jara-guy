<!DOCTYPE html>
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
                            
            
