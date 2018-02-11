const Discord = require('discord.js');
const client = new Discord.Client();
var token = process.env.TOKEN;
client.on('ready', () => {
	console.log('Online. The default global prefix is: ' + prefix);
	client.user.setGame('with Landen\'s coffee!');
});
process.on('unhandledRejection', console.error);
var prefix = '!';
var zen = "183672121522782208";
var jc = "359539469231063052";
var lg = "359538295375659010";
var modRoleName = "Basitin Exiles (Mods)";
var adminRoleName = "The Masks (Admins)";
var introMSGID = "363037157272846336";
var introChannel = "359538465542504448";
client.on('guildMemberAdd', member => {
	let guild = member.guild;
	if (guild.id === lg) {
		guild.channels.get(jc).send("User " + member + " has joined.")
	};
});
client.on('guildMemberRemove', member => {
	let guild = member.guild;
	if (guild.id === lg) {
		guild.channels.get(jc).send("User " + member + " has left.")
	};
});
client.on('guildBanAdd', (guild, user) => {
	if (guild.id === lg) {
		guild.channels.get(jc).send("User " + user + " has been banned.")
	};
});
client.on('message', message => {
	if (!message.content.startsWith(prefix)) return;
	if (message.author.bot) return;
	var args = message.content.substring(prefix.length).split(" ");
	var embarrassedarray = ["./src/embarrassed/embarrassedkat.png", "./src/embarrassed/embarrassedmike.png", "./src/embarrassed/embarrassedkeith.png", "./src/embarrassed/embarrassedflora.png", "./src/embarrassed/embarrassednat1.png", "./src/embarrassed/embarrassednat2.png", "./src/embarrassed/embarrassednat3.png", "./src/embarrassed/embarrassedtrace.png"];
	var kekarray = ["./src/kek/kekzen.png", "./src/kek/kekkaren.png"];
	var smugarray = ["./src/smug/smugzen.png", "./src/smug/smugflora.png", "./src/smug/smugkeith.png", "./src/smug/smugnat.png"];
	var reallyarray = ["./src/really/reallyflorasketch.png", "./src/really/reallyflorapage.png", "./src/really/reallynat.png", "./src/really/reallymaddie.png"];
	var boobersarray = ["./src/boobers/boobers1.png", "./src/boobers/boobers2.png"];
	var angryarray = ["./src/angry/angrykeith.png", "./src/angry/angrynat.png"]
	var shockedarray = ["./src/shocked/shockedsythe.png", "./src/shocked/shockedflora.png"];
	var hiddenCommandsEmbed = new Discord.RichEmbed().setTitle("Hidden Commands").setDescription("Hidden commands that don\'t show up in the normal help menu, and are only for fun.").setColor(0x696969).addField('!boobers', 'Nat and her boobs. >.>').addField("!hottie and !hotboy", "The same as !sing.").addField("!hyper", "!happy but editted with a zoom affect. It's hard to explain...").setFooter("Do not share these please! I want people to find them on their own.", "https://raw.githubusercontent.com/ZenIsBestWolf/maddie-bot/master/src/footer.jpg") // THIS COLOR CODE. AMAZING. I SWEAR I JUST GOOGLED GRAY COLOR CODES AND SAW THIS. NOT DISSAPOINTED!
	switch (args[0].toLowerCase()) {
		case "about":
			var aboutEmbed = new Discord.RichEmbed().setThumbnail(client.user.avatarURL).setTitle('Maddie').setColor(0xEE9A00).setDescription('Maddie is a simple bot that mostly sends really bad furry memes, but can do some other stuff too.').addField('Source Code', 'Maddie can be found on GitHub here: https://github.com/ZenIsBestWolf/maddie-bot').addField('Commands', 'Run !help to get a list of commands. Run !aboutcreator for more information on Zen, the creator of Maddie.').setFooter('Created by ZenIsBestWolf#9855', 'https://raw.githubusercontent.com/ZenIsBestWolf/maddie-bot/master/src/footer.jpg')
			message.channel.send(aboutEmbed)
			message.delete();
			break;
		case "aboutcreator":
			var creatorEmbed = new Discord.RichEmbed().setThumbnail('https://raw.githubusercontent.com/ZenIsBestWolf/maddie-bot/master/src/footer.jpg').setTitle('About the Creator').setDescription('Everything to know about the creator.').setColor(0x8B0000).addField('Zen', 'ZenIsBestWolf#9855').addField('Why I made Maddie.', 'I wanted to try to make a Discord bot of my own after seeing someone elses bot in another server that has similar functions.').addField('About Zen', '***no***').setFooter('DM ZenIsBestWolf#9855 with questions or command ideas!', 'https://raw.githubusercontent.com/ZenIsBestWolf/maddie-bot/master/src/footer.jpg')
			message.channel.send(creatorEmbed)
			message.delete();
			break;
		case "alot":
			message.channel.send({
				file: "./src/alot.png"
			});
			message.delete();
			break;
		case "angry":
			message.channel.send({
				file: angryarray[Math.floor(Math.random() * angryarray.length)]
			});
			message.delete();
			break;
		case "beg":
			message.channel.send({
				file: "./src/beg.png"
			});
			message.delete();
			break;
		case "boobers":
			message.delete();
			message.channel.send({
				file: boobersarray[Math.floor(Math.random() * boobersarray.length)]
			});
			message.reply("GG! You found a hidden command!")
			break;
		case "boi":
			message.channel.send({
				file: "./src/boi.png"
			});
			message.delete();
			break;
		case "coffee":
			message.channel.send({
				file: "./src/coffee.gif"
			});
			message.delete();
			break;
		case "cuddles":
			message.channel.send({
				file: "./src/cuddles.jpg"
			});
			message.delete();
			break;
		case "embarrassed":
			message.channel.send({
				file: embarrassedarray[Math.floor(Math.random() * embarrassedarray.length)]
			});
			message.delete();
			break;
		case "glomp":
			message.channel.send({
				file: "./src/glomp.jpg"
			});
			message.delete();
			break;
		case "haha":
			message.channel.send({
				file: "./src/haha.png"
			});
			message.delete();
			break;
		case "happy":
			message.channel.send({
				file: "./src/happy.png"
			});
			message.delete();
			break;
		case "help":
			var helpEmbed1 = new Discord.RichEmbed().setTitle('Command List (1/2)').setDescription('These commands are able to be used by everyone!').setColor(0x468499).addField('!about', 'Everything you need to know about Maddie.').addField('!aboutcreator', 'Stuff about Zen.').addField('!alot','ITS A LOT NOT ALOT').addField('!angry', 'AAAAAAAAAAAAAAAAAAAAAAAA').addField('!beg', '*pwease* can i has one more cookie?').addField('!boi', 'When someone does something *that* stupid.').addField('!coffee', 'MUST. HAVE. COFFEE!!!').addField('!cuddles', 'low impact consensual cuddling').addField('!embarrassed', 'Did I send that...? Woops...').addField('!glomp', 'GLOMP!').addField('!haha', 'Nat giving us laughter of joy... or mockery. We\'re not sure.').addField('!happy', 'Hooray!').addField('!help', 'Know the commands. It sends this very message!').addField('!jerks', 'Talk about rude!').addField('!kek', '\"I kek.\" - Aran Tukasko, 2017 (LOL but better!)').addField('!lenny', '( ͡° ͜ʖ ͡°)').addField('!loreal', 'Nat advertising Loreal.').addField('!nani', 'NANI!?').addField('!newcommand', 'For that good reaction.').setFooter('DM ZenIsBestWolf#9855 with suggestions for more commands!', 'https://raw.githubusercontent.com/ZenIsBestWolf/maddie-bot/master/src/footer.jpg')
			var helpEmbed2 = new Discord.RichEmbed().setTitle('Command List (2/2)').setDescription('These commands are able to be used by everyone!').setColor(0x468499).addField('!northkinds', 'Neon...?').addField('!ohcrap', 'CRAP I LEFT THE STOVE ON!').addField('!ohno', 'Oh no... MY MEMES ARE NEXT TO THE STOVE').addField('!profanity', 'WATCH YOUR PROFANITY!!!').addField('!rabblerabble', 'Blah blah blah sounds boring. Rabble rabble sounds better! Use this when everyone is talking and you cant fit yourself into the conversation.').addField('!really', 'Really? Just really?').addField('!rekt', 'REKT BOI XDXDXDXDXD').addField('!ripchat', 'Recognize the chat being dead with this gravestone.').addField('!shhh', 'Be quiet, young one.').addField('!shocked', 'OMG!').addField('!sing', 'Zen sings for us.').addField('!slap', 'When someone does something ***so*** dumb, they need a slap in the face!').addField('!smug', 'You took an extra cookie from the cookie jar and you KNOW IT!').addField('!stupidtail', 'Gah! Stupid tail!!').addField('!topkek', '!kek but different in one way or another. It\'s all preference.').addField('!triforce', 'The triforce of bed will tuck you in goodnight.').addField('!triggered', 'REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE').addField('!wat', 'Wait what?').addField('!whoa', 'Whoa! Cool!').setFooter('DM ZenIsBestWolf#9855 with suggestions for more commands!', 'https://raw.githubusercontent.com/ZenIsBestWolf/maddie-bot/master/src/footer.jpg')
			message.author.send(helpEmbed1)
			message.author.send(helpEmbed2)
			message.delete();
			break;
		case "hottie":
			message.delete();
			message.channel.send({
				file: "./src/sing.png"
			});
			message.reply("GG! You found a hidden command!")
			break;
		case "hotboy":
			message.delete();
			message.channel.send({
				file: "./src/sing.png"
			});
			message.reply("GG! You found a hidden command!")
			break;
		case "hyper":
			message.delete();
			message.channel.send({
				file: "./src/hyper.png"
			});
			message.reply("GG! You found a hidden command!")
			break;
		case "jerks":
			message.channel.send({
				file: "./src/jerks.png"
			});
			message.delete();
			break;
		case "kek":
			message.channel.send({
				file: kekarray[Math.floor(Math.random() * kekarray.length)]
			});
			message.delete();
			break;
		case "lenny":
			message.channel.send("( ͡° ͜ʖ ͡°)");
			message.delete();
			break;
		case "loreal":
			message.channel.send({
				file: "./src/loreal.png"
			});
			message.delete();
			break;
		case "nani":
			message.channel.send({
				file: "./src/nani.png"
			});
			message.delete();
			break;
		case "newcommand":
			message.channel.send({
				file: "./src/newcommand.png"
			});
			message.delete();
			break;
		case "northkinds":
			message.channel.send({
				file: "./src/northkinds.png"
			});
			message.delete();
			break;
		case "ohcrap":
			message.channel.send({
				file: "./src/ohcrap.png"
			});
			message.delete();
			break;
		case "ohno":
			message.channel.send({
				file: "./src/ohno.png"
			});
			message.delete();
			break;
		case "profanity":
			message.channel.send({
				file: "./src/profanity.png"
			});
			message.delete();
			break;
		case "rabblerabble":
			message.channel.send({
				file: "./src/rabblerabble.png"
			});
			message.delete();
			break;
		case "really":
			message.channel.send({
				file: reallyarray[Math.floor(Math.random() * reallyarray.length)]
			});
			message.delete();
			break;
		case "rekt":
			message.channel.send({
				file: "./src/rekt.png"
			});
			message.delete();
			break;
		case "ripchat":
			message.channel.send({
				file: "./src/ripchat.png"
			});
			message.delete();
			break;
		case "shhh":
			message.channel.send({
				file: "./src/shhh.png"
			});
			message.delete();
			break;
		case "shocked":
			message.channel.send({
				file: shockedarray[Math.floor(Math.random() * shockedarray.length)]
			});
			message.delete();
			break;
		case "sing":
			message.channel.send({
				file: "./src/sing.png"
			});
			message.delete();
			break;
		case "slap":
			message.channel.send({
				file: "./src/slap.png"
			});
			message.delete();
			break;
		case "smug":
			message.channel.send({
				file: smugarray[Math.floor(Math.random() * smugarray.length)]
			});
			message.delete();
			break;
		case "stupidtail":
			message.channel.send({
				file: "./src/stupidtail.png"
			});
			message.delete();
			break;
		case "topkek":
			message.channel.send({
				file: "./src/topkek.png"
			});
			message.delete();
			break;
		case "triforce":
			message.channel.send({
				file: "./src/triforce.png"
			});
			message.delete();
			break;
		case "triggered":
			message.channel.send({
				file: "./src/triggered.gif"
			});
			message.delete();
			break;
		case "wat":
			message.channel.send({
				file: "./src/wat.png"
			});
			message.delete();
			break;
		case "whoa":
			message.channel.send({
				file: "./src/whoa.png"
			});
			message.delete();
			break;
	};
	if (message.channel.type === "text") {
		if (message.member.roles.exists("name", adminRoleName)) {
			switch (args[0].toLowerCase()) {
				case "help":
					var adminHelpEmbed = new Discord.RichEmbed().setTitle('Administrator Commands for Twokinds').setDescription('Special commands intended for Admins only.').setColor(0xFFC300).addField('!wipe', '(Will only work in #welcome!) Deletes all chat messages besides the intro message.').setFooter('Trouble with commands? Please message ZenIsBestWolf#9855.', 'https://raw.githubusercontent.com/ZenIsBestWolf/maddie-bot/master/src/footer.jpg');
					message.author.send(adminHelpEmbed);
					message.author.send(hiddenCommandsEmbed);
					break;
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
		if (message.member.roles.exists("name", modRoleName)) {
			switch (args[0].toLowerCase()) {
				case "help":
					var modHelpEmbed = new Discord.RichEmbed().setTitle('Moderator Commands for Twokinds').setDescription('Special commands intended for Mods only.').setColor(0xFFC300).addField('!wipe', '(Will only work in #welcome!) Deletes all chat messages besides the intro message.').setFooter('Trouble with commands? Please message ZenIsBestWolf#9855.', 'https://raw.githubusercontent.com/ZenIsBestWolf/maddie-bot/master/src/footer.jpg')
					message.author.send(modHelpEmbed);
					message.author.send(hiddenCommandsEmbed);
					break;
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
	if (message.author.id === zen) {
		switch (args[0].toLowerCase()) {
			case "chat":
				var msg = args.join(' ').slice(args[0].length);
				message.channel.send(msg);
				message.delete();
				break;
			case "chatin":
				var targ = args[1]
				var msg = args.join(' ').slice(args[0].length + args[1].length + 1)
				client.channels.get(targ).send(msg);
				message.delete();
				break;
			case "help":
				var zenHelpEmbed = new Discord.RichEmbed().setTitle('Special Commands').setDescription('Special commands intended for Zen\'s use only.').setColor(0x8B0000).addField('!chat [message]', 'Chat [message] as Maddie in the channel that the command is sent in.').addField('!chatin [channel id] [message]', 'Chat in [channel id] with the message [message] as Maddie.').addField('!nick [nickname]', 'Sets Maddie\'s nickname in that server to [nickname].').addField('!perm [permission]', 'Checks if Maddie has [permission] in that guild.').addField('!shutdown', 'Shutdown Maddie.').setFooter('Hi Zen! :)', 'https://raw.githubusercontent.com/ZenIsBestWolf/maddie-bot/master/src/footer.jpg');
				message.author.send(zenHelpEmbed);
				message.author.send(hiddenCommandsEmbed);
				message.delete();
				break;
			case "nick":
				var nick = args.join(' ').slice(args[0].length);
				message.guild.me.setNickname(nick);
				message.delete();
				break;
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
			case "shutdown":
				process.exit();
				break;
		};
	};
});
client.login(token);
