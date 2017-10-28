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
	var embarrassedarray = ["./src/embarrassed/embarrassedkat.png", "./src/embarrassed/embarrassedmike.png", "./src/embarrassed/embarrassedkeith.png"];
	var kekarray = ["./src/kek/kekzen.png" // This is so in the future when I get more KEK images, I can just add them with ease.
	];
	var smugarray = ["./src/smug/smugzen.png", "./src/smug/smugflora.png"];
	switch (args[0]) {
		case "angrykeith":
			message.channel.send({
				file: "./src/angrykeith.png"
			});
			message.delete();
			break;
		case "coffee":
			message.channel.send({
				file: "./src/coffee.gif"
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
			messgae.channel.send({
				file: "./src/happy.png"
			});
			message.delete();
			break;
		case "help":
			message.author.send("```!angrykeith\n!coffee\n!embarrassed\n!happy\!help\!jerks\n!kek\n!northkinds\n!profanity\n!really\n!rekt\n!ripchat\n!shhh\n!shook\n!smug\n!source\n!topkek\n!triforce\n!triggered\n!wat```\nHave suggestions? DM them to ZenIsBestWolf#0446!");
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
		case "smug":
			message.channel.send({
				file: smugarray[Math.floor(Math.random() * smugarray.length)]
			});
			message.delete();
			break;
		case "source":
			message.reply("Maddie is open sourced bot by ZenIsBestWolf, and is free to modify on GitHub. Check her repository out here: https://github.com/ZenIsBestWolf/maddie-bot.");
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
			messgae.channel.send({
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
	if (message.author.id === zen) {
		switch (args[0]) {
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
