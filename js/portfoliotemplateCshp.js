// JavaScript Document
//declare variables
var temp = 0,
	temp2 = 0,
	temp3 = 0,
	temp4 = 0,
	temp5 = 0,
	temp6 = 0;

//on page load
window.onload = function () {

//Add event listeners for the buttons
//First Section
	var TemplateNext = document.getElementById("ProjectTemplatenext");
	TemplateNext.addEventListener("click", (function () {
		console.log("clicked next");
		Template(1);
	}));
	var TemplatePrev = document.getElementById("ProjectTemplateprev");
	TemplatePrev.addEventListener("click", (function () {
		console.log("clicked prev");
		Template(-1);
	}));

//Second Section
	var TemplateTwoNext = document.getElementById("ProjectTemplatetwonext");
	TemplateTwoNext.addEventListener("click", (function () {
		console.log("clicked next");
		Templatetwo(1);
	}));
	var TemplateTwoPrev = document.getElementById("ProjectTemplatetwoprev");
	TemplateTwoPrev.addEventListener("click", (function () {
		console.log("clicked prev");
		Templatetwo(-1);
	}));

//third Section
	var TemplateThreeNext = document.getElementById("ProjectTemplatethreenext");
	TemplateThreeNext.addEventListener("click", (function () {
		console.log("clicked next");
		Templatethree(1);
	}));
	var TemplateThreePrev = document.getElementById("ProjectTemplatethreeprev");
	TemplateThreePrev.addEventListener("click", (function () {
		console.log("clicked prev");
		Templatethree(-1);
	}));

//fourth Section
	var TemplateFourNext = document.getElementById("ProjectTemplatefournext");
	TemplateFourNext.addEventListener("click", (function () {
		console.log("clicked next");
		Templatefour(1);
	}));
	var TemplateFourPrev = document.getElementById("ProjectTemplatefourprev");
	TemplateFourPrev.addEventListener("click", (function () {
		console.log("clicked prev");
		Templatefour(-1);
	}));

//fith Section
	var TemplateFiveNext = document.getElementById("ProjectTemplatefivenext");
	TemplateFiveNext.addEventListener("click", (function () {
		console.log("clicked next");
		Templatefive(1);
	}));
	var TemplateFivePrev = document.getElementById("ProjectTemplatefiveprev");
	TemplateFivePrev.addEventListener("click", (function () {
		console.log("clicked prev");
		Templatefive(-1);
	}));

//sixth Section
	var TemplateSixNext = document.getElementById("ProjectTemplatesixnext");
	TemplateSixNext.addEventListener("click", (function () {
		console.log("clicked next");
		Templatesix(1);
	}));
	var TemplateSixPrev = document.getElementById("ProjectTemplatesixprev");
	TemplateSixPrev.addEventListener("click", (function () {
		console.log("clicked prev");
		Templatesix(-1);
	}));

//first run each section
	Template(0);
	Templatetwo(0);
	Templatethree(0);
	Templatefour(0);
	Templatefive(0);
	Templatesix(0);
};

function Template(num) {
//look at if it is going to the next or back one
	temp = temp + num;
//get variables
	var info = document.getElementById("ProjectTemplateinfo");
	var code = document.getElementById("ProjectTemplatecode");
//insert html replacing previous on button press relating to if the button is going forward or back
	switch (temp) {
		case 0:
			info.innerHTML = '<h2>Mastermind</h2><p>This project is an assignment I did back at college when learning about object oriented coding and C#.</p>';
			code.innerHTML = '<img src="assets/MastermindSplash.png" alt="Mastermind Image">';
			//remove button
			$("#ProjectTemplateprev").fadeOut(500);
			//add button
			$("#ProjectTemplatenext").fadeIn(500);

			break;
		case 1:
			info.innerHTML = '<h2>Mastermind</h2><p>This is a console versoion of the classic game Mastermind</p>';
			code.innerHTML = '<img src="assets/MastermindGame.png" alt="Mastermind Image">';
			//add button
			$("#ProjectTemplateprev").fadeIn(500);
			//remove button
			$("#ProjectTemplatenext").fadeOut(500);
			break;
		default:
			break;
	}
}

function Templatetwo(num) {
//look at if it is going to the next or back one
	temp2 = temp2 + num;
//get variables
	var info = document.getElementById("ProjectTemplatetwoinfo");
	var code = document.getElementById("ProjectTemplatetwocode");
//insert html replacing previous on button press relating to if the button is going forward or back
	switch (temp2) {
		case 0:
			info.innerHTML = '<h2>Discord Bot</h2><p>This was a personal project I started to help teach myself more complex C#, I also wanted a discord bot that ticked every box in my head, without realising how much work it would really be, this is the 3rd rewrite of the bot and has already been partially broken by an api update</p>';
			code.innerHTML = '';
			//remove button
			$("#ProjectTemplatetwoprev").fadeOut(500);
			break;
		case 1:
			info.innerHTML = "<h2>Discord Bot</h2><p>This project includes:</p><ul><li><strong>User Profile System</strong></li><li>User Currency System</li><li>User Level Up System</li><li>Global Reactions</li><li>User-Based Reactions</li><li>DuckDuckGo Search</li><li>Google Search</li><li>Filtered Words</li><li>Banned Letter of the day (Don't ask, it was what my guild wanted, disabled by default)</li><li>Bot Personas</li><li>Game Simulation</li><li>Forwarding Direct Messages</li><li>Get info on Guild/Role/User/etc.</li><li>Bot Blacklist</li></ul>";
			code.innerHTML = 'Image avatarimg = await Program.global.ByteArrayToImageAsync(Avatar);\nbyte[] imgArr = File.ReadAllBytes($"C:\\DiscordBot\\Resources\\ProfileTemp.png");\nusing (MemoryStream inStream = new MemoryStream(imgArr))\n{\nusing (var newBitmap = new Bitmap(inStream))\n{\nusing (Graphics graphics = Graphics.FromImage(newBitmap))\n{\nusing (Font arialFont = new Font("Arial", 18))\n{\nFont arialFont2 = new Font("Arial", 28);\nRectangleF Rectangle1 = new RectangleF(0, 350, 858, 40);\nRectangleF Rectangle2 = new RectangleF(0, 390, 858, 30);\nRectangleF Rectangle3 = new RectangleF(0, 420, 858, 30);\nRectangleF Rectangle4 = new RectangleF(0, 450, 858, 30);\ngraphics.SmoothingMode = System.Drawing.Drawing2D.SmoothingMode.AntiAlias;\ngraphics.DrawString(UserName, arialFont2, Brushes.Black, Rectangle1);\ngraphics.DrawString("Level: " + user.Level, arialFont, Brushes.Black, Rectangle2);\ngraphics.DrawString("Total XP: " + user.XP, arialFont, Brushes.Black, Rectangle3);\ngraphics.DrawString("Currency: " + user.Currency, arialFont, Brushes.Black, Rectangle4);\ngraphics.DrawImage(avatarimg, 525, 250);';
			//add button
			$("#ProjectTemplatetwoprev").fadeIn(500);
			break;
		case 2:
			info.innerHTML = "<h2>Discord Bot</h2><p>This project includes:</p><ul><li>User Profile System</li><li><strong>User Currency System</strong></li><li>User Level Up System</li><li>Global Reactions</li><li>User-Based Reactions</li><li>DuckDuckGo Search</li><li>Google Search</li><li>Filtered Words</li><li>Banned Letter of the day (Don't ask, it was what my guild wanted, disabled by default)</li><li>Bot Personas</li><li>Game Simulation</li><li>Forwarding Direct Messages</li><li>Get info on Guild/Role/User/etc.</li><li>Bot Blacklist</li></ul>";
			code.innerHTML = 'if (item.ID == id && Program.global.random.Next(5) == 1)\n{\nitem.Currency++;\nProgram.userContainer.SaveAsync();\n}';
			break;
		case 3:
			info.innerHTML = "<h2>Discord Bot</h2><p>This project includes:</p><ul><li>User Profile System</li><li>User Currency System</li><li><strong>User Level Up System</strong></li><li>Global Reactions</li><li>User-Based Reactions</li><li>DuckDuckGo Search</li><li>Google Search</li><li>Filtered Words</li><li>Banned Letter of the day (Don't ask, it was what my guild wanted, disabled by default)</li><li>Bot Personas</li><li>Game Simulation</li><li>Forwarding Direct Messages</li><li>Get info on Guild/Role/User/etc.</li><li>Bot Blacklist</li></ul>";
			code.innerHTML = 'if (item.ID == id)\n{\nitem.XP++;\nvar tmp = CheckLevelAsync(item.XP).Result;\nif (item.Level < tmp)\n{\nLevelUpAsync(message, item);\nitem.Level = tmp;\n}\nProgram.userContainer.SaveAsync();\n}';
			break;
		case 4:
			info.innerHTML = "<h2>Discord Bot</h2><p>This project includes:</p><ul><li>User Profile System</li><li>User Currency System</li><li>User Level Up System</li><li><strong>Global Reactions</strong></li><li>User-Based Reactions</li><li>DuckDuckGo Search</li><li>Google Search</li><li>Filtered Words</li><li>Banned Letter of the day (Don't ask, it was what my guild wanted, disabled by default)</li><li>Bot Personas</li><li>Game Simulation</li><li>Forwarding Direct Messages</li><li>Get info on Guild/Role/User/etc.</li><li>Bot Blacklist</li></ul>";
			code.innerHTML = 'string[] triggers = new string[customReactionsCollection.Count];\nfor (int i = 0; i < customReactionsCollection.Count; i++)\n{\ntriggers[i] = customReactionsCollection[i][0][1];\n}\nreturn triggers;';
			break;
		case 5:
			info.innerHTML = "<h2>Discord Bot</h2><p>This project includes:</p><ul><li>User Profile System</li><li>User Currency System</li><li>User Level Up System</li><li>Global Reactions</li><li><strong>User-Based Reactions</strong></li><li>DuckDuckGo Search</li><li>Google Search</li><li>Filtered Words</li><li>Banned Letter of the day (Don't ask, it was what my guild wanted, disabled by default)</li><li>Bot Personas</li><li>Game Simulation</li><li>Forwarding Direct Messages</li><li>Get info on Guild/Role/User/etc.</li><li>Bot Blacklist</li></ul>";
			code.innerHTML = 'string[] triggers = new string[customReactionsCollection.Count];\nfor (int i = 0; i < customReactionsCollection.Count; i++)\n{\ntriggers[i] = customReactionsCollection[i][0][1];\n}\nreturn triggers;';
			break;
		case 6:
			info.innerHTML = "<h2>Discord Bot</h2><p>This project includes:</p><ul><li>User Profile System</li><li>User Currency System</li><li>User Level Up System</li><li>Global Reactions</li><li>User-Based Reactions</li><li><strong>DuckDuckGo Search</strong></li><li>Google Search</li><li>Filtered Words</li><li>Banned Letter of the day (Don't ask, it was what my guild wanted, disabled by default)</li><li>Bot Personas</li><li>Game Simulation</li><li>Forwarding Direct Messages</li><li>Get info on Guild/Role/User/etc.</li><li>Bot Blacklist</li></ul>";
			code.innerHTML = 'var search = new Search();\nsearch.NoHtml = true;\nsearch.NoRedirects = true;\nsearch.IsSecure = true;\nsearch.SkipDisambiguation = true;\nsearch.ApiClient = new HttpWebApi();\nvar result = search.Query(input, "DiscordBot");';
			break;
		case 7:
			info.innerHTML = "<h2>Discord Bot</h2><p>This project includes:</p><ul><li>User Profile System</li><li>User Currency System</li><li>User Level Up System</li><li>Global Reactions</li><li>User-Based Reactions</li><li>DuckDuckGo Search</li><li><strong>Google Search</strong></li><li>Filtered Words</li><li>Banned Letter of the day (Don't ask, it was what my guild wanted, disabled by default)</li><li>Bot Personas</li><li>Game Simulation</li><li>Forwarding Direct Messages</li><li>Get info on Guild/Role/User/etc.</li><li>Bot Blacklist</li></ul>";
			code.innerHTML = 'var search = new Search();\nsearch.NoHtml = true;\nsearch.NoRedirects = true;\nsearch.IsSecure = true;\nsearch.SkipDisambiguation = true;\nsearch.ApiClient = new HttpWebApi();\nvar result = search.Query(input, "DiscordBot");\nvar reqString = $"https://www.googleapis.com/customsearch/v1?q= {Uri.EscapeDataString(input)}&cx=018084019232060951019%3Ahs5piey28-e&num=1&searchType=image&start={r.Next(1, 50)}&fields=items%2Flink&key={googleApiKey}";\nvar obj = JObject.Parse(await GetResponseStringAsync(reqString).ConfigureAwait(false));\nvar items = obj["items"] as JArray;\nawait Context.Channel.SendMessageAsync(items[0]["link"].ToString()).ConfigureAwait(false);';
			break;
		case 8:
			info.innerHTML = "<h2>Discord Bot</h2><p>This project includes:</p><ul><li>User Profile System</li><li>User Currency System</li><li>User Level Up System</li><li>Global Reactions</li><li>User-Based Reactions</li><li>DuckDuckGo Search</li><li>Google Search</li><li><strong>Filtered Words</strong></li><li>Banned Letter of the day (Don't ask, it was what my guild wanted, disabled by default)</li><li>Bot Personas</li><li>Game Simulation</li><li>Forwarding Direct Messages</li><li>Get info on Guild/Role/User/etc.</li><li>Bot Blacklist</li></ul>";
			code.innerHTML = 'foreach (var item in filteredWordsCollection)\n{\nif (message.Contains(item))\n{\nreturn true;\n}\n}\nreturn false;';
			break;
		case 9:
			info.innerHTML = "<h2>Discord Bot</h2><p>This project includes:</p><ul><li>User Profile System</li><li>User Currency System</li><li>User Level Up System</li><li>Global Reactions</li><li>User-Based Reactions</li><li>DuckDuckGo Search</li><li>Google Search</li><li>Filtered Words</li><li><strong>Banned Letter of the day (Don't ask, it was what my guild wanted, disabled by default)</strong></li><li>Bot Personas</li><li>Game Simulation</li><li>Forwarding Direct Messages</li><li>Get info on Guild/Role/User/etc.</li><li>Bot Blacklist</li></ul>";
			code.innerHTML = 'if(File.Exists(@"C:\DiscordBot\Resources\LOTD.txt"))\n{\nletterOfTheDay = File.ReadAllLines(@"C:\DiscordBot\Resources\LOTD.txt")[1].ToCharArray()[0];\nLastDate = File.ReadAllLines(@"C:\DiscordBot\Resources\LOTD.txt")[0];\n}\nelse\n{\nLastDate = DateTime.Now.ToShortDateString();\nPickLetterAsync();\n}\ntimeForANewLetter.Interval = 60 * 60 * 1000;\ntimeForANewLetter.AutoReset = true;\ntimeForANewLetter.Elapsed += TimeForANewLetter_ElapsedAsync;\ntimeForANewLetter.Start();\nProgram.dms.SendMessageAsync($"The letter of the day has been changed to: {letterOfTheDay}");\nConsole.WriteLine($"The letter of the day has been changed to: {letterOfTheDay}");';
			break;
		case 10:
			info.innerHTML = "<h2>Discord Bot</h2><p>This project includes:</p><ul><li>User Profile System</li><li>User Currency System</li><li>User Level Up System</li><li>Global Reactions</li><li>User-Based Reactions</li><li>DuckDuckGo Search</li><li>Google Search</li><li>Filtered Words</li><li>Banned Letter of the day (Don't ask, it was what my guild wanted, disabled by default)</li><li><strong>Bot Personas</strong></li><li>Game Simulation</li><li>Forwarding Direct Messages</li><li>Get info on Guild/Role/User/etc.</li><li>Bot Blacklist</li></ul>";
			code.innerHTML = 'int num = Program.global.random.Next(avatars.Count);\nDiscord.Image img = new Discord.Image(avatars[num][1]);\ntry\n{\nawait client.CurrentUser.ModifyAsync(x =>\n{\ntry { x.Avatar = img; }\ncatch { }\ntry { x.Username = avatars[num][0]; }\ncatch { x.Username = "error"; }\n});\nConsole.WriteLine("Complete change avatar request");\n}';
			break;
		case 11:
			info.innerHTML = "<h2>Discord Bot</h2><p>This project includes:</p><ul><li>User Profile System</li><li>User Currency System</li><li>User Level Up System</li><li>Global Reactions</li><li>User-Based Reactions</li><li>DuckDuckGo Search</li><li>Google Search</li><li>Filtered Words</li><li>Banned Letter of the day (Don't ask, it was what my guild wanted, disabled by default)</li><li>Bot Personas</li><li><strong>Game Simulation</strong></li><li>Forwarding Direct Messages</li><li>Get info on Guild/Role/User/etc.</li><li>Bot Blacklist</li></ul>";
			code.innerHTML = 'string gm = client.GetUser(278516985640517632).Game.ToString() ?? "XD";\nawait client.SetGameAsync(gm);\nConsole.WriteLine("Refreshed Game");';
			break;
		case 12:
			info.innerHTML = "<h2>Discord Bot</h2><p>This project includes:</p><ul><li>User Profile System</li><li>User Currency System</li><li>User Level Up System</li><li>Global Reactions</li><li>User-Based Reactions</li><li>DuckDuckGo Search</li><li>Google Search</li><li>Filtered Words</li><li>Banned Letter of the day (Don't ask, it was what my guild wanted, disabled by default)</li><li>Bot Personas</li><li>Game Simulation</li><li><strong>Forwarding Direct Messages</strong></li><li>Get info on Guild/Role/User/etc.</li><li>Bot Blacklist</li></ul>";
			code.innerHTML = 'var currentchannelid = message.Channel.Id;\nvar dmchannels = client.DMChannels;\nvar botid = Program.config.BotID;\nif (message.Channel.Id != OwnerChannel.Id && botid != message.Author.Id)\n{\nforeach (var item in dmchannels)\n{\nif (item.Id == currentchannelid)\n{\nreturn true;\n}\n}\n}';
			break;
		case 13:
			info.innerHTML = "<h2>Discord Bot</h2><p>This project includes:</p><ul><li>User Profile System</li><li>User Currency System</li><li>User Level Up System</li><li>Global Reactions</li><li>User-Based Reactions</li><li>DuckDuckGo Search</li><li>Google Search</li><li>Filtered Words</li><li>Banned Letter of the day (Don't ask, it was what my guild wanted, disabled by default)</li><li>Bot Personas</li><li>Game Simulation</li><li>Forwarding Direct Messages</li><li><strong>Get info on Guild/Role/User/etc.</strong></li><li>Bot Blacklist</li></ul>";
			code.innerHTML = 'var userInfo = Context.Guild;\nstring img = userInfo.SplashUrl;\nstring img2 = userInfo.IconUrl;\nstring nm = $"{DateTime.Now.Minute.ToString()}{DateTime.Now.Second.ToString()}{DateTime.Now.Millisecond.ToString()}";\nstring nm2 = $"2{DateTime.Now.Minute.ToString()}{DateTime.Now.Second.ToString()}{DateTime.Now.Millisecond.ToString()}";\nif (img != null) { File.WriteAllBytes($"C:\\DiscordBot\\Resources\\Tmp{nm}.png", await Program.global.PullImageFromWebAsync(img)); }\nif (img2 != null) { File.WriteAllBytes($"C:\\DiscordBot\\Resources\\Tmp{nm2}.png", await Program.global.PullImageFromWebAsync(img2)); }\nawait Context.Channel.SendMessageAsync($"Displaying information about the Current Server \n Server Name: {userInfo.Name} \n Server ID: {userInfo.Id} \n Server was created: {userInfo.CreatedAt} \n Current voice region: {userInfo.VoiceRegionId} \n Afk Channel: {userInfo.AFKChannelId} with timeout: {userInfo.AFKTimeout}");';
			//add button
			$("#ProjectTemplatetwonext").fadeIn(500);
			break;
		case 14:
			info.innerHTML = "<h2>Discord Bot</h2><p>This project includes:</p><ul><li>User Profile System</li><li>User Currency System</li><li>User Level Up System</li><li>Global Reactions</li><li>User-Based Reactions</li><li>DuckDuckGo Search</li><li>Google Search</li><li>Filtered Words</li><li>Banned Letter of the day (Don't ask, it was what my guild wanted, disabled by default)</li><li>Bot Personas</li><li>Game Simulation</li><li>Forwarding Direct Messages</li><li>Get info on Guild/Role/User/etc.</li><li><strong>Bot Blacklist</strong></li></ul>";
			code.innerHTML = 'User user = await GetUserAsync(message);\nif (user.Blacklisted) { return; }';
			//remove button
			$("#ProjectTemplatetwonext").fadeOut(500);
			break;
		default:
			break;
	}
}

function Templatethree(num) {
//look at if it is going to the next or back one
	temp3 = temp3 + num;
//get variables
	var info = document.getElementById("ProjectTemplatethreeinfo");
	var code = document.getElementById("ProjectTemplatethreecode");
//insert html replacing previous on button press relating to if the button is going forward or back
	switch (temp3) {
		case 0:
			info.innerHTML = '<h2>Rich Presence Changer</h2><p>This was a personal project I started to allow user entered custom Rich Presence on your discord profile because as far as I am aware there was only one program which did this when this was initially made, and it was a python console application, so clearly there was room in the market for a GUI version</p>';
			code.innerHTML = '';
			//remove button
			$("#ProjectTemplatethreeprev").fadeOut(500);
			break;
		case 1:
			info.innerHTML = '<h2>Rich Presence Changer</h2><p>This project includes:</p><ul><li><strong>5 Preset configs</strong></li><li>Up to 10 custom configs</li><li>Automatically checks config file for updates</li><li>Graphics!</li></ul>';
			code.innerHTML = '<img src="assets/DRPDefault.png" alt="Rich Presence Image">';
			//add button
			$("#ProjectTemplatethreeprev").fadeIn(500);
			break;
		case 2:
			info.innerHTML = '<h2>Rich Presence Changer</h2><p>This project includes:</p><ul><li>5 Preset configs</li><li><strong>Up to 10 custom configs</strong></li><li>Automatically checks config file for updates</li><li>Graphics!</li></ul>';
			code.innerHTML = '<img src="assets/DRPCustom.png" alt="Rich Presence Image">';
			break;
		case 3:
			info.innerHTML = '<h2>Rich Presence Changer</h2><p>This project includes:</p><ul><li>5 Preset configs</li><li>Up to 10 custom configs</li><li><strong>Automatically checks config file for updates</strong></li><li>Graphics!</li></ul>';
			code.innerHTML = 'while (true)\n{\nvar tmp = File.ReadAllLines($"{Application.StartupPath}\\Settings.txt");\nfor (int i = 0; i < SettingsFile.Length; i++)\n{\nif (!SettingsFile[i].Equals(tmp[i]))\n{\nUpdate(LastPressed);\n}\n}\nThread.Sleep(30 * 1000);\n}';
			break;
		case 4:
			info.innerHTML = '<h2>Rich Presence Changer</h2><p>This project includes:</p><ul><li>5 Preset configs</li><li>Up to 10 custom configs</li><li>Automatically checks config file for updates</li><li><strong>Graphics!</strong></li></ul>';
			code.innerHTML = '<img src="assets/DRPDefault.png" alt="Rich Presence Image">';
			//add button
			$("#ProjectTemplatethreenext").fadeIn(500);
			break;
		case 5:
			info.innerHTML = '<h2>Rich Presence Changer</h2><p>I use this application every day so it is constantly being worked on and improved</p>';
			code.innerHTML = '';
			//remove button
			$("#ProjectTemplatethreenext").fadeOut(500);
			break;
		default:
			break;
	}
}

function Templatefour(num) {
//look at if it is going to the next or back one
	temp4 = temp4 + num;
//get variables
	var info = document.getElementById("ProjectTemplatefourinfo");
//insert html replacing previous on button press relating to if the button is going forward or back
	switch (temp4) {
		case 0:
			info.innerHTML = '<h2>App Launcher</h2><p>This was a personal project I made to automatically run some programs I have idle from time to time</p><p>This is more of a soundation project I use to quickly edit and build ontop of for custom needs</p>';
			//add button
			$("#ProjectTemplatefournext").fadeIn(500);
			//remove button
			$("#ProjectTemplatefourprev").fadeOut(500);
			break;
		case 1:
			info.innerHTML = '<h2>App Launcher</h2><iframe allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" height="100%" src="https://www.youtube.com/embed/G4QrA4N2Ulk"></iframe>';
			//remove button
			$("#ProjectTemplatefournext").fadeOut(500);
			//add button
			$("#ProjectTemplatefourprev").fadeIn(500);
			break;
		default:
			break;
	}
}

function Templatefive(num) {
//look at if it is going to the next or back one
	temp5 = temp5 + num;
//get variables
	var info = document.getElementById("ProjectTemplatefiveinfo");
	var code = document.getElementById("ProjectTemplatefivecode");
//insert html replacing previous on button press relating to if the button is going forward or back
	switch (temp5) {
		case 0:
			info.innerHTML = '<h2>KF2 Tool</h2><p>This was a personal project I started when first getting into GUI apps, and was currently really annoyed at how difficult KF2 servers were to keep managed and updated, putting the two together this is what I finally came up with. Currently unfinished due to not being able to host servers at my current accomidation the project is usable, but bugs havnt not been tested for and there are still features to add/improve</p>';
			//remove button
			$("#ProjectTemplatefiveprev").fadeOut(500);
			break;
		case 1:
			info.innerHTML = '<h2>KF2 Tool</h2><p>This project includes:</p><ul><li><strong>Displays Latest KF2 News</strong></li><li>Automatically Updates the server files</li><li>Browse Steam Workshop and add files within the program</li><li>Manage Maps</li><li>Manage Muts</li><li>Manage Actors</li><li>Features (Server):</li><li><ul><li>Ports</li><li>Web Admin</li><li>Game Name</li><li>Game Password</li><li>Max Players</li><li>Difficulty</li><li>Map</li><li>Length</li><li>GameMode</li><li>Friendly Fire</li><li>Collision</li><li>Pickups</li><li>VoteKick</li></ul></li><li>Features (Client):</li><li><ul><li>Performance options</li><li>Start game with selected elements</li><li>Max Dead bodies editor (setting to 0 can be used to "cheat", setting high can make the game look cooler)</li></ul></li></ul>';
			code.innerHTML = '<img src="assets/KF2Menu.png" alt="KF2 Tool">';
			//add button
			$("#ProjectTemplatefivenext").fadeIn(500);
			break;
		case 2:
			info.innerHTML = '<h2>KF2 Tool</h2><p>This project includes:</p><ul><li>Displays Latest KF2 News</li><li><strong>Automatically Updates the server files</strong></li><li>Browse Steam Workshop and add files within the program</li><li>Manage Maps</li><li>Manage Muts</li><li>Manage Actors</li><li>Features (Server):</li><li><ul><li>Ports</li><li>Web Admin</li><li>Game Name</li><li>Game Password</li><li>Max Players</li><li>Difficulty</li><li>Map</li><li>Length</li><li>GameMode</li><li>Friendly Fire</li><li>Collision</li><li>Pickups</li><li>VoteKick</li></ul></li><li>Features (Client):</li><li><ul><li>Performance options</li><li>Start game with selected elements</li><li>Max Dead bodies editor (setting to 0 can be used to "cheat", setting high can make the game look cooler)</li></ul></li></ul>';
			code.innerHTML = 'if(Directory.Exists(TBServerLocation.Text))\n{\ntry { Process.Start($"{Application.StartupPath}\\steamcmd.exe", $"+login anonymous +force_install_dir {" + TBServerLocation.Text + "} +app_update 232130 validate +exit"); }\ncatch { }\n}';
			break;
		case 3:
			info.innerHTML = '<h2>KF2 Tool</h2><p>This project includes:</p><ul><li>Displays Latest KF2 News</li><li>Automatically Updates the server files</li><li><strong>Browse Steam Workshop and add files within the program</strong></li><li>Manage Maps</li><li>Manage Muts</li><li>Manage Actors</li><li>Features (Server):</li><li><ul><li>Ports</li><li>Web Admin</li><li>Game Name</li><li>Game Password</li><li>Max Players</li><li>Difficulty</li><li>Map</li><li>Length</li><li>GameMode</li><li>Friendly Fire</li><li>Collision</li><li>Pickups</li><li>VoteKick</li></ul></li><li>Features (Client):</li><li><ul><li>Performance options</li><li>Start game with selected elements</li><li>Max Dead bodies editor (setting to 0 can be used to "cheat", setting high can make the game look cooler)</li></ul></li></ul>';
			code.innerHTML = '<img src="assets/KF2Mut.png" alt="KF2 Tool">';
			break;
		case 4:
			info.innerHTML = '<h2>KF2 Tool</h2><p>This project includes:</p><ul><li>Displays Latest KF2 News</li><li>Automatically Updates the server files</li><li>Browse Steam Workshop and add files within the program</li><li><strong>Manage Maps</strong></li><li>Manage Muts</li><li>Manage Actors</li><li>Features (Server):</li><li><ul><li>Ports</li><li>Web Admin</li><li>Game Name</li><li>Game Password</li><li>Max Players</li><li>Difficulty</li><li>Map</li><li>Length</li><li>GameMode</li><li>Friendly Fire</li><li>Collision</li><li>Pickups</li><li>VoteKick</li></ul></li><li>Features (Client):</li><li><ul><li>Performance options</li><li>Start game with selected elements</li><li>Max Dead bodies editor (setting to 0 can be used to "cheat", setting high can make the game look cooler)</li></ul></li></ul>';
			code.innerHTML = '<img src="assets/KF2Map.png" alt="KF2 Tool">';
			break;
		case 5:
			info.innerHTML = '<h2>KF2 Tool</h2><p>This project includes:</p><ul><li>Displays Latest KF2 News</li><li>Automatically Updates the server files</li><li>Browse Steam Workshop and add files within the program</li><li>Manage Maps</li><li><strong>Manage Muts</strong></li><li>Manage Actors</li><li>Features (Server):</li><li><ul><li>Ports</li><li>Web Admin</li><li>Game Name</li><li>Game Password</li><li>Max Players</li><li>Difficulty</li><li>Map</li><li>Length</li><li>GameMode</li><li>Friendly Fire</li><li>Collision</li><li>Pickups</li><li>VoteKick</li></ul></li><li>Features (Client):</li><li><ul><li>Performance options</li><li>Start game with selected elements</li><li>Max Dead bodies editor (setting to 0 can be used to "cheat", setting high can make the game look cooler)</li></ul></li></ul>';
			code.innerHTML = '<img src="assets/KF2Mut.png" alt="KF2 Tool">';
			break;
		case 6:
			info.innerHTML = '<h2>KF2 Tool</h2><p>This project includes:</p><ul><li>Displays Latest KF2 News</li><li>Automatically Updates the server files</li><li>Browse Steam Workshop and add files within the program</li><li>Manage Maps</li><li>Manage Muts</li><li><strong>Manage Actors</strong></li><li>Features (Server):</li><li><ul><li>Ports</li><li>Web Admin</li><li>Game Name</li><li>Game Password</li><li>Max Players</li><li>Difficulty</li><li>Map</li><li>Length</li><li>GameMode</li><li>Friendly Fire</li><li>Collision</li><li>Pickups</li><li>VoteKick</li></ul></li><li>Features (Client):</li><li><ul><li>Performance options</li><li>Start game with selected elements</li><li>Max Dead bodies editor (setting to 0 can be used to "cheat", setting high can make the game look cooler)</li></ul></li></ul>';
			code.innerHTML = '<img src="assets/KF2Addon.png" alt="KF2 Tool">';
			break;
		case 7:
			info.innerHTML = '<h2>KF2 Tool</h2><p>This project includes:</p><ul><li>Displays Latest KF2 News</li><li>Automatically Updates the server files</li><li>Browse Steam Workshop and add files within the program</li><li>Manage Maps</li><li>Manage Muts</li><li>Manage Actors</li><li><strong>Features (Server):</li><li><ul><li>Ports</li><li>Web Admin</li><li>Game Name</li><li>Game Password</li><li>Max Players</li><li>Difficulty</li><li>Map</li><li>Length</li><li>GameMode</li><li>Friendly Fire</li><li>Collision</li><li>Pickups</li><li>VoteKick</li></ul></strong></li><li>Features (Client):</li><li><ul><li>Performance options</li><li>Start game with selected elements</li><li>Max Dead bodies editor (setting to 0 can be used to "cheat", setting high can make the game look cooler)</li></ul></li></ul>';
			code.innerHTML = '<img src="assets/KF2Mut.png" alt="KF2 Tool">';
			//add button
			$("#ProjectTemplatefiveprev").fadeIn(500);
			break;
		case 8:
			info.innerHTML = '<h2>KF2 Tool</h2><p>This project includes:</p><ul><li>Displays Latest KF2 News</li><li>Automatically Updates the server files</li><li>Browse Steam Workshop and add files within the program</li><li>Manage Maps</li><li>Manage Muts</li><li>Manage Actors</li><li>Features (Server):</li><li><ul><li>Ports</li><li>Web Admin</li><li>Game Name</li><li>Game Password</li><li>Max Players</li><li>Difficulty</li><li>Map</li><li>Length</li><li>GameMode</li><li>Friendly Fire</li><li>Collision</li><li>Pickups</li><li>VoteKick</li></ul></li><li><strong>Features (Client):</li><li><ul><li>Performance options</li><li>Start game with selected elements</li><li>Max Dead bodies editor (setting to 0 can be used to "cheat", setting high can make the game look cooler)</li></ul></strong></li></ul>';
			code.innerHTML = '<img src="assets/KF2Client.png" alt="KF2 Tool">';
			//remove button
			$("#ProjectTemplatefivenext").fadeOut(500);
			break;
		default:
			break;
	}
}

function Templatesix(num) {
//look at if it is going to the next or back one
	temp6 = temp6 + num;
//get variables
	var info = document.getElementById("ProjectTemplatesixinfo");
//insert html replacing previous on button press relating to if the button is going forward or back
	switch (temp6) {
		case 0:
			info.innerHTML = '<h2>KF2 Map Name Gen</h2><p>This was a personal project I made to before KF2 Tool</p><p>the functionality of this app is included and done better using KF2 tool, making this app redundant, however it is still small and it still works as intended without the extra features of KF2 Tool</p>';
			//add button
			$("#ProjectTemplatesixnext").fadeIn(500);
			//remove button
			$("#ProjectTemplatesixprev").fadeOut(500);
			break;
		case 1:
			info.innerHTML = '<h2>KF2 Map Name Gen</h2><iframe allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen" height="100%" src="https://www.youtube.com/embed/AlH2LPDsXKk"></iframe>';
			//remove button
			$("#ProjectTemplatesixnext").fadeOut(500);
			//add button
			$("#ProjectTemplatesixprev").fadeIn(500);
			break;
		default:
			break;
	}
}
