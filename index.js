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
var modRoleName = "The Masks (Mods)";
var introMSGID = "363037157272846336";
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
	var embarrassedarray = [
		"./src/embarrassed/embarrassedkat.png",
		"./src/embarrassed/embarrassedmike.png",
		"./src/embarrassed/embarrassedkeith.png"
	];
	var kekarray = [
		"./src/kek/kekzen.png",
		"./src/kek/kekkaren.png"
	];
	var smugarray = [
		"./src/smug/smugzen.png",
		"./src/smug/smugflora.png",
		"./src/smug/smugkeith.png"
	];
	switch (args[0].toLowerCase()) {
		case "about":
			var aboutEmbed = new Discord.RichEmbed()
			.setThumbnail(client.user.avatarURL)
			.setTitle('Maddie')
			.setColor(0xEE9A00)
			.setDescription('Maddie is a simple bot that mostly sends really bad furry memes, but can do some other stuff too.')
			.addField('Source Code', 'Maddie can be found on GitHub here: https://github.com/ZenIsBestWolf/maddie-bot')
			.addField('Commands', 'Run !help to get a list of commands. Run !aboutcreator for more information on Zen, the creator of Maddie.')
			.setFooter('Created by ZenIsBestWolf#0446', 'https://cdn.discordapp.com/avatars/183672121522782208/98140e3be987939a4c527235a7f57fb0.webp')
			message.channel.send(aboutEmbed)
			message.delete();
			break;
		case "aboutcreator":
			var creatorEmbed = new Discord.RichEmbed()
			.setThumbnail('https://cdn.discordapp.com/avatars/183672121522782208/98140e3be987939a4c527235a7f57fb0.webp')
			.setTitle('About the Creator')
			.setDescription('Everything to know about the creator.')
			.setColor(0x8B0000)
			.addField('Zen', 'ZenIsBestWolf#0446')
			.addField('Why I made Maddie.', 'I wanted to try to make a Discord bot of my own after seeing someone elses bot in another server that has similar functions.')
			.addField('About Zen', '***no***')
			.setFooter('DM ZenIsBestWolf with questions or command ideas!', 'https://cdn.discordapp.com/avatars/183672121522782208/98140e3be987939a4c527235a7f57fb0.webp')
			message.channel.send(creatorEmbed)
			break;
		case "angrykeith":
			message.channel.send({
				file: "./src/angrykeith.png"
			});
			message.delete();
			break;
		case "beg":
			message.channel.send({
				file: "./src/beg.png"
			});
			message.delete();
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
		case "happy":
			message.channel.send({
				file: "./src/happy.png"
			});
			message.delete();
			break;
		case "help":
			var helpEmbed1 = new Discord.RichEmbed()
			.setTitle('Command List (1/2)')
			.setDescription('These commands are able to be used by everyone!')
			.setColor(0x468499)
			.addField('!about', 'Everything you need to know about Maddie.')
			.addField('!aboutcreator', 'Stuff about Zen.')
			.addField('!angrykeith', 'Keith is angry, and so are you.')
			.addField('!beg', '*pwease* can i has one more cookie?')
			.addField('!boi', 'When someone does something *that* stupid.')
			.addField('!coffee', 'MUST. HAVE. COFFEE!!!')
			.addField('!cuddles', 'low impact consensual cuddling')
			.addField('!embarrassed', 'Did I send that...? Woops...')
			.addField('!happy', 'Hooray!')
			.addField('!help', 'Know the commands. It sends this very message!')
			.addField('!jerks', 'Talk about rude!')
			.addField('!kek', '\"I kek.\" - Aran Tukasko, 2017 (LOL but better!)')
			.addField('!lenny', '( ͡° ͜ʖ ͡°)')
			.addField('!newcommand', 'For that good reaction.')
			.setFooter('DM ZenIsBestWolf#9855 with suggestions for more commands!', 'https://cdn.discordapp.com/avatars/183672121522782208/bc9da12fc6355e6a9a828b026762530b.webp')
			var helpEmbed2 = new Discord.RichEmbed()
			.setTitle('Command List (2/2)')
			.setDescription('These commands are able to be used by everyone!')
			.setColor(0x468499)
			.addField('!northkinds', 'Neon...?')
			.addField('!profanity', 'WATCH YOUR PROFANITY!!!')
			.addField('!really', 'Really? Just really?')
			.addField('!rekt', 'REKT BOI XDXDXDXDXD')
			.addField('!ripchat','Recognize the chat being dead with this gravestone.')
			.addField('!shhh', 'Be quiet, young one.')
			.addField('!shook', 'Woah wait what just happened!?')
			.addField('!slap', 'When someone does something ***so*** dumb, they need a slap in the face!')
			.addField('!smug', 'You took an extra cookie from the cookie jar and you KNOW IT!')
			.addField('!topkek', '!kek but different in one way or another. It\'s all preference.')
			.addField('!triforce', 'The triforce of bed will tuck you in goodnight.')
			.addField('!triggered', 'REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE')
			.addField('!wat', 'Wait what?')
			.setFooter('DM ZenIsBestWolf#9855 with suggestions for more commands!', 'https://cdn.discordapp.com/avatars/183672121522782208/bc9da12fc6355e6a9a828b026762530b.webp')
			message.author.send(helpEmbed1)
			message.author.send(helpEmbed2)
			message.delete();
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
		case "profanity":
			message.channel.send({
				file: "./src/profanity.png"
			});
			message.delete();
			break;
		case "really":
			message.channel.send({
				file: "./src/really.png"
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
		case "shook":
			message.channel.send({
				file: "./src/shook.png"
			});
			message.delete();
			break;
		case "slap":
			message.channel.send({
				file: "./src/slap.png"
			});
			message.delete()
			break;
		case "smug":
			message.channel.send({
				file: smugarray[Math.floor(Math.random() * smugarray.length)]
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
	};
	if (message.member.roles.exists("name",modRoleName)) {
		switch(args[0].toLowerCase()) {
			case "help":
				var modHelpEmbed = new Discord.RichEmbed()
				.setTitle('Moderator Commands')
				.setDescription('Special commands intended for Moderator use only.')
				.setColor(0xFFC300)
				.addField('!wipe', '(Will only work in #welcome!) Deletes all chat messages besides the intro message.')
				.setFooter('Trouble with commands? Please message ZenIsBestWolf#9855.','https://cdn.discordapp.com/avatars/183672121522782208/bc9da12fc6355e6a9a828b026762530b.webp');
				message.author.send(modHelpEmbed)
				break;
			case "wipe":
				if (message.channel.id != '359538465542504448') {
					message.reply("That command is only available in the #welcome channel.").then(e => setTimeout(function() {
						e.delete()
						message.delete()
					}, 10000));
					return;
				};
				message.channel.fetchMessages({after: introMSGID})
				.then(messages => {
					message.channel.bulkDelete(messages);
				});
				break;
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
				var zenHelpEmbed = new Discord.RichEmbed()
				.setTitle('Special Commands')
				.setDescription('Special commands intended for Zen\'s use only.')
				.setColor(0x8B0000)
				.addField('!chat [message]', 'Chat [message] as Maddie in the channel that the command is sent in.')
				.addField('!chatin [channel id] [message]', 'Chat in [channel id] with the message [message] as Maddie.')
				.addField('!nick [nickname]', 'Sets Maddie\'s nickname in that server to [nickname].')
				.addField('!perm [permission]', 'Checks if Maddie has [permission] in that guild.')
				.addField('!shutdown', 'Shutdown Maddie.')
				.setFooter('Hi Zen! :)', 'https://cdn.discordapp.com/avatars/183672121522782208/bc9da12fc6355e6a9a828b026762530b.webp');
				message.author.send(zenHelpEmbed);
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
