//Documentation Done By RadioactiveHydra
const Discord = require('discord.js');
const client = new Discord.Client();
var token = process.env.TOKEN;
//Startup
client.on('ready', () => {
	console.log('Online. The default global prefix is: ' + prefix);
	client.user.setGame('with Maeve!');
});
process.on('unhandledRejection', console.error);
//Variables
var prefix = '!';
var zen = "183672121522782208";
var hydra = "248558529336705026";
var jc = "359539469231063052";
var lg = "359538295375659010";
var modRoleName = "Basitin Exiles (Mods)";
var adminRoleName = "The Masks (Admins)";
var introMSGID = "441975697548902400";
var introChannel = "359538465542504448";
//User Join Message
client.on('guildMemberAdd', member => {
	let guild = member.guild;
	if (guild.id === lg) {
		guild.channels.get(jc).send("User " + member + " has joined.")
	};
});
//User Leave Message
client.on('guildMemberRemove', member => {
	let guild = member.guild;
	if (guild.id === lg) {
		guild.channels.get(jc).send("User " + member + " has left.")
	};
});
//User Ban Message
client.on('guildBanAdd', (guild, user) => {
	if (guild.id === lg) {
		guild.channels.get(jc).send("User " + user + " has been banned.")
	};
});
//Image Data
var demimages = {
	"about": {
		IsAutomatedCommand: false,
		IsHidden: false,
		Type: null,
		Array: null,
		HelpMessage: "Everything you need to know about Maddie."
	},
	"aboutcreator": {
		IsAutomatedCommand: false,
		IsHidden: false,
		Type: null,
		Array: null,
		HelpMessage: "Stuff about Zen and Hydra."
	},
	"alot": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "png",
		Array: null,
		HelpMessage: "ITS A LOT NOT ALOT"
	},
	"angry": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: null,
		Array: ["angrykeith.png", "angrynat.png"],
		HelpMessage: "AAAAAAAAAAAAAAAAAAAAAAAA"
	},
	"beg": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "png",
		Array: null,
		HelpMessage: "*pwease* can i has one more cookie?"
	},
	"boobers": {
		IsAutomatedCommand: true,
		IsHidden: true,
		Type: null,
		Array: ["boobers1.png", "boobers2.png"],
		HelpMessage: "IF YOU SEE THIS MESSAGE REPORT IT NOW"
	},
	"boi": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "png",
		Array: null,
		HelpMessage: "When someone does something *that* stupid."
	},
	"coffee": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "gif",
		Array: null,
		HelpMessage: "MUST. HAVE. COFFEE!!!"
	},
	"cuddles": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "jpg",
		Array: null,
		HelpMessage: "low impact consensual cuddling"
	},
	"embarrassed": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: null,
		Array: ["embarrassedkat.png", "embarrassedmike.png", "embarrassedkeith.png", "embarrassedflora.png", "embarrassednat1.png", "embarrassednat2.png", "embarrassednat3.png", "embarrassedtrace.png"],
		HelpMessage: "Did I send that...? Woops..."
	},
	"glomp": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "jpg",
		Array: null,
		HelpMessage: "GLOMP!"
	},
	"haha": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "png",
		Array: null,
		HelpMessage: "Nat giving us laughter of joy... or mockery. We\'re not sure."
	},
	"happy": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "png",
		Array: null,
		HelpMessage: "Hooray!"
	},
	"help": {
		IsAutomatedCommand: false,
		IsHidden: false,
		Type: null,
		Array: null,
		HelpMessage: "Know the commands. It sends this very message!"
	},
	"hottie": {
		IsAutomatedCommand: true,
		IsHidden: true,
		Type: "png",
		Array: null,
		HelpMessage: "IF YOU SEE THIS MESSAGE REPORT IT NOW"
	},
	"hotboy": {
		IsAutomatedCommand: true,
		IsHidden: true,
		Type: "png",
		Array: null,
		HelpMessage: "IF YOU SEE THIS MESSAGE REPORT IT NOW"
	},
	"hyper": {
		IsAutomatedCommand: true,
		IsHidden: true,
		Type: "png",
		Array: null,
		HelpMessage: "IF YOU SEE THIS MESSAGE REPORT IT NOW"
	},
	"jerks": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "png",
		Array: null,
		HelpMessage: "Talk about rude!"
	},
	"kek": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: null,
		Array: ["kekzen.png", "kekkaren.png"],
		HelpMessage: "\"I kek.\" - Aran Tukasko, 2017 (LOL but better!)"
	},
	"lenny": {
		IsAutomatedCommand: false,
		IsHidden: false,
		Type: null,
		Array: null,
		HelpMessage: "( ͡° ͜ʖ ͡°)"
	},
	"loreal": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "png",
		Array: null,
		HelpMessage: "Nat advertising Loreal."
	},
	"nani": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "png",
		Array: null,
		HelpMessage: "NANI!?"
	},
	"newcommand": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "png",
		Array: null,
		HelpMessage: "For that good reaction.'"
	},
	"northkinds": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "png",
		Array: null,
		HelpMessage: "Neon...?"
	},
	"ohcrap": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "png",
		Array: null,
		HelpMessage: "CRAP I LEFT THE STOVE ON!"
	},
	"ohno": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "png",
		Array: null,
		HelpMessage: "Oh no... MY MEMES ARE NEXT TO THE STOVE"
	},
	"profanity": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "png",
		Array: null,
		HelpMessage: "WATCH YOUR PROFANITY!!!"
	},
	"rabblerabble": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "png",
		Array: null,
		HelpMessage: "Blah blah blah sounds boring. Rabble rabble sounds better! Use this when everyone is talking and you cant fit yourself into the conversation."
	},
	"really": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: null,
		Array: ["reallyflorasketch.png", "reallyflorapage.png", "reallynat.png", "reallymaddie.png"],
		HelpMessage: "Really? Just really?"
	},
	"rekt": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "png",
		Array: null,
		HelpMessage: "REKT BOI XDXDXDXDXD"
	},
	"ripchat": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "png",
		Array: null,
		HelpMessage: "Recognize the chat being dead with this gravestone."
	},
	"shhh": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "png",
		Array: null,
		HelpMessage: "Be quiet, young one."
	},
	"shocked": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: null,
		Array: ["shockedsythe.png", "hockedflora.png"],
		HelpMessage: "OMG!"
	},
	"sing": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "png",
		Array: null,
		HelpMessage: "Zen sings for us."
	},
	"slap": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "png",
		Array: null,
		HelpMessage: "When someone does something ***so*** dumb, they need a slap in the face!"
	},
	"smug": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: null,
		Array: ["smugzen.png", "smugflora.png", "smugkeith.png", "smugnat.png"],
		HelpMessage: "You took an extra cookie from the cookie jar and you KNOW IT!"
	},
	"stupidtail": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "png",
		Array: null,
		HelpMessage: "Gah! Stupid tail!!"
	},
	"topkek": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "png",
		Array: null,
		HelpMessage: "The command kek but different in one way or another. It\'s all preference."
	},
	"triforce": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "png",
		Array: null,
		HelpMessage: "The triforce of bed will tuck you in goodnight."
	},
	"triggered": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "gif",
		Array: null,
		HelpMessage: "REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE"
	},
	"wat": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "png",
		Array: null,
		HelpMessage: "Wait what?"
	},
	"whoa": {
		IsAutomatedCommand: true,
		IsHidden: false,
		Type: "png",
		Array: null,
		HelpMessage: "Whoa! Cool!"
	}
}
//OnMessage
client.on('message', message => {
	if (!message.content.startsWith(prefix)) return;
	if (message.author.bot) return;
	console.log(message.author.username + " used " + message.content)
	var args = message.content.substring(prefix.length).split(" ");
	var command = demimages[args[0].toLowerCase()]
	if (command != undefined){
		if(command.IsAutomatedCommand == true){
			if (!command.Array) {
				message.channel.send({
					file: "./src/" + args[0].toLowerCase() + "." + command.Type
				});
			} else {
				message.channel.send({
					file: "./src/" + args[0].toLowerCase() + "/" + command.Array[Math.floor(Math.random() * command.Array.length)]
				});
			}
			if (command.IsHidden == true) {
				message.reply("GG! You found a hidden command!")
			}
			message.delete();
		}
	}
	//Other Commands
	switch (args[0].toLowerCase()) {
		//About
		case "about":
			var aboutEmbed = new Discord.RichEmbed().setThumbnail(client.user.avatarURL).setTitle('Maddie').setColor(0xEE9A00).setDescription('Maddie is a simple bot that mostly sends really bad furry memes, but can do some other stuff too.').addField('Source Code', 'Maddie can be found on GitHub here: https://github.com/ZenIsBestWolf/maddie-bot').addField('Commands', 'Run !help to get a list of commands. Run !aboutcreator for more information on Zen, the creator of Maddie.').setFooter('Created by ZenIsBestWolf#0446. Co-Developed by RadioactiveHydra#2570', 'https://raw.githubusercontent.com/ZenIsBestWolf/maddie-bot/master/src/footer.jpg')
			message.channel.send(aboutEmbed)
			message.delete();
			break;
			//About Creator(s)
		case "aboutcreator":
			var creatorEmbed = new Discord.RichEmbed().setThumbnail('https://raw.githubusercontent.com/ZenIsBestWolf/maddie-bot/master/src/footer.jpg').setTitle('About the Creator').setDescription('Everything to know about the creator.').setColor(0x8B0000).addField('Zen', 'ZenIsBestWolf#0446').addField('Why I made Maddie.', 'I wanted to try to make a Discord bot of my own after seeing someone elses bot in another server that has similar functions.').addField('About Zen', '***no***').setFooter('DM ZenIsBestWolf#0446 with questions or command ideas!', 'https://raw.githubusercontent.com/ZenIsBestWolf/maddie-bot/master/src/footer.jpg')
			message.channel.send(creatorEmbed)
			var coDevEmbed = new Discord.RichEmbed().setThumbnail('https://cdn.discordapp.com/avatars/248558529336705026/f1bd61421c1d7283e4871b7e13209b7f.webp').setTitle('About the Co-Developer').setDescription('Everything to know about the co-developer.').setColor(0x2ECC71).addField('RadioactiveHydra (RHydraX)', 'RadioactiveHydra#2570').addField('Why I helped code Maddie.', 'I wanted to help and I was bored. I discovered Maddie when my friend convinced me to join the TwoKinds server (I dont even really look at TwoKinds anyways). After seeing Maddie, I thought I would help out the bot using my past bot-creating experiences to further improve the Maddie. \n(Also I wanted to test out my coding skillz and fix up the code lol)').addField('About RadioactiveHydra', '***mabye***').setFooter('DM RadioactiveHydra#2570 with questions or command ideas!', 'https://cdn.discordapp.com/avatars/248558529336705026/f1bd61421c1d7283e4871b7e13209b7f.webp')
			message.channel.send(coDevEmbed)
			message.delete();
			break;
			//Help
		case "help":
			var helpMessages = 0
			for (i = 0; Object.keys(demimages).length > i; i++) {
				if (Object.values(demimages)[i].IsHidden == false) {
					helpMessages++
				}
			}
			var helpPageR = helpMessages % 25
			var helpPages = ((helpMessages - helpPageR) / 25) + 1
			var currentHelpPage = 1
			var tempHelpNum = 0
			var helpEmbed = []
			for (i = 0; helpPages > i; i++) {
				helpEmbed[i + 1] = new Discord.RichEmbed().setTitle('Command List (' + (i + 1) + '/' + helpPages + ')').setDescription('These commands are able to be used by everyone!').setColor(0x468499)
			}
			for (i = 0; Object.keys(demimages).length > i; i++) {
				if (Object.values(demimages)[i].IsHidden == false && tempHelpNum < 25) {
					helpEmbed[currentHelpPage].addField(prefix + Object.keys(demimages)[i], Object.values(demimages)[i].HelpMessage)
					tempHelpNum++
				} else if (Object.values(demimages)[i].IsHidden == false && tempHelpNum >= 24) {
					currentHelpPage++
					helpEmbed[currentHelpPage].addField(prefix + Object.keys(demimages)[i], Object.values(demimages)[i].HelpMessage)
					tempHelpNum = 1
				}
			}
			for (i = 0; i < helpPages; i++) {
				message.author.send(helpEmbed[i + 1])
			}
			break;
			//Lenny
		case "lenny":
			message.channel.send("( ͡° ͜ʖ ͡°)");
			message.delete();
			break;
	};
	//Hidden Command Embed
	var hiddenCommandsEmbed = new Discord.RichEmbed().setTitle("Hidden Commands").setDescription("Hidden commands that don\'t show up in the normal help menu, and are only for fun.").setColor(0x696969).addField(prefix + 'boobers', 'Nat and her boobs. >.>').addField(prefix + "hottie and " + prefix + "hotboy", "The same as " + prefix + "sing.").addField(prefix + "hyper", prefix + "happy but editted with a zoom affect. It's hard to explain...").setFooter("Do not share these please! I want people to find them on their own.", "https://raw.githubusercontent.com/ZenIsBestWolf/maddie-bot/master/src/footer.jpg")
	if (message.channel.type === "text") {
		//Admin Commands
		if (message.member.roles.exists("name", adminRoleName)) {
			switch (args[0].toLowerCase()) {
				//Admin Help
				case "help":
					var adminHelpEmbed = new Discord.RichEmbed().setTitle('Administrator Commands for Twokinds').setDescription('Special commands intended for Admins only.').setColor(0xFFC300).addField(prefix + 'wipe', '(Will only work in #welcome!) Deletes all chat messages besides the intro message.').setFooter('Trouble with commands? Please message ZenIsBestWolf#0446 or RadioactiveHydra#2570.', 'https://raw.githubusercontent.com/ZenIsBestWolf/maddie-bot/master/src/footer.jpg');
					message.author.send(adminHelpEmbed);
					message.author.send(hiddenCommandsEmbed);
					break;
					//Admin Wipe
				case "wipe":
					if (message.channel.id != introChannel) {
						message.reply("That command is only available in the #welcome channel.").then(e => setTimeout(function() {
							e.delete()
							message.delete()
						}, 10000));
						return;
					};
					message.channel.fetchMessages({
						after: introMSGID
					}).then(messages => {
						message.channel.bulkDelete(messages);
					});
					break;
			};
		};
		//Mod Commands
		if (message.member.roles.exists("name", modRoleName)) {
			switch (args[0].toLowerCase()) {
				//Mod Help
				case "help":
					var modHelpEmbed = new Discord.RichEmbed().setTitle('Moderator Commands for Twokinds').setDescription('Special commands intended for Mods only.').setColor(0xFFC300).addField(prefix + 'wipe', '(Will only work in #welcome!) Deletes all chat messages besides the intro message.').setFooter('Trouble with commands? Please message ZenIsBestWolf#0446 or RadioactiveHydra#2570.', 'https://raw.githubusercontent.com/ZenIsBestWolf/maddie-bot/master/src/footer.jpg')
					message.author.send(modHelpEmbed);
					message.author.send(hiddenCommandsEmbed);
					break;
					//Mod Wipe
				case "wipe":
					if (message.channel.id != introChannel) {
						message.reply("That command is only available in the #welcome channel.").then(e => setTimeout(function() {
							e.delete()
							message.delete()
						}, 10000));
						return;
					};
					message.channel.fetchMessages({
						after: introMSGID
					}).then(messages => {
						message.channel.bulkDelete(messages);
					});
					break;
			};
		};
	};
	//Zen Commands
	if (message.author.id === zen) {
		switch (args[0].toLowerCase()) {
			//Zen Chat In Channel
			case "chat":
				var msg = args.join(' ').slice(args[0].length);
				message.channel.send(msg);
				message.delete();
				break;
				//Zen Chat In Channel With ID
			case "chatin":
				var targ = args[1]
				var msg = args.join(' ').slice(args[0].length + args[1].length + 1)
				client.channels.get(targ).send(msg);
				message.delete();
				break;
				//Zen Help
			case "help":
				var zenHelpEmbed = new Discord.RichEmbed().setTitle('Special Commands').setDescription('Special commands intended for Zen\'s use only.').setColor(0x8B0000).addField(prefix + 'chat [message]', 'Chat [message] as Maddie in the channel that the command is sent in.').addField(prefix + 'chatin [channel id] [message]', 'Chat in [channel id] with the message [message] as Maddie.').addField(prefix + 'nick [nickname]', 'Sets Maddie\'s nickname in that server to [nickname].').addField(prefix + 'perm [permission]', 'Checks if Maddie has [permission] in that guild.').addField(prefix + 'shutdown', 'Shutdown Maddie.').setFooter('Hi Zen! :)', 'https://raw.githubusercontent.com/ZenIsBestWolf/maddie-bot/master/src/footer.jpg');
				message.author.send(zenHelpEmbed);
				message.author.send(hiddenCommandsEmbed);
				message.delete();
				break;
				//Zen Bot Nickname
			case "nick":
				var nick = args.join(' ').slice(args[0].length);
				message.guild.me.setNickname(nick);
				message.delete();
				break;
				//Zen Perm Checker
			case "perm":
				var perm = args[1];
				if (message.guild.me.hasPermission(perm)) {
					message.reply("True.").then(e => setTimeout(function() {
						e.delete();
					}, 10000));
					message.delete();
				} else {
					message.reply("False.").then(e => setTimeout(function() {
						e.delete();
					}, 10000));
					message.delete()
				};
				break;
				//Zen Bot Shutdown
			case "shutdown":
				process.exit();
				break;
		};
	};
});
//Declare Bot
client.login(token);
