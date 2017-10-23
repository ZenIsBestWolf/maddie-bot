const Discord = require('discord.js');
const client = new Discord.Client();
var token = process.env.TOKEN;
client.on('ready', () => {
	console.log('Online. The default global prefix is: ' + prefix);
	client.user.setGame('with Landen\'s coffee!');
});
process.on('unhandledRejection', console.error);
var prefix = '!';
var zen = "183672121522782208"
var jc = "359539469231063052"
var lg = "359538295375659010"
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
	var unfilteredcommand = message.content.substring(prefix.length).split(' ')
	var command = unfilteredcommand[0].toLowerCase()
	var args = unfilteredcommand.join(' ').slice(4)
	if (command === 'help') {
		message.delete()
		message.author.send('Here\'s the list of commands!\n ```\n!ripchat - Sends an image grieving over the chat, from the TwoKinds Group Chat discord server.\n!help - Display\'s THIS message.\n!triforce - The triforce of bed!\n!coffee - When someone\'s hyper.\n!triggered - If someone says \"Alot\" or any other things that trigger you, use this.\n!source - Links you to the GitHub where Maddie\'s code is, since she\'s open source.\n!angrykeith - A picture of the character Keith, from TwoKinds, very angry!\n!smug - For when you took that extra cookie from the jar.\n!shook - Similar meaning to !triggered, but less intense.\n!embarrassedmike - Whoopsies!\n!embarrassedkat - the same as !embarrassedmike but with a different person.\n!really - Just really?\n!rekt LOL XD FREAKING REKT KIDDO\n!wat - wait wat\n!embarrassedkeith - same as !embarrassedmike, just a different character.\n!smug2 - Similar to !smug.\n!profanity - Send this to those who swear too much.\n!superhappy - HOORAY YAY OMG YAS\n!jerks - meanies >:(\n!kek - K E K\n!shhh - (3 h\'s) SHUTUP but subtle.\n!topkek - pretty much !kek but its not.\n!northkinds - Neon...?\n!lenny ( ͡° ͜ʖ ͡°)```DM ZenIsBestWolf#0446 with all of your suggestions for commands!');
		if (message.author.id === zen) {
			message.author.send("Hi Zen!\nAdministrator Commands: ```" + prefix + "shutdown - Shutdown Maddie.\n" + prefix + "chat [channel] [message] - Chats the message as this bot, in the specified channel. BE CAREFUL! Invalid channel WILL break Maddie.\n" + prefix + "nick [nickname] - Set's nickname of bot to [nickname].\n" + prefix + "perm [permission] - Checks if Maddie has [permission] in that server.```")
		};
		return;
	};
	if (command === 'shutdown') {
		if (message.author.id === zen) {
			message.reply("Process is exiting.")
			process.exit();
			return;
		}
		return;
	};
	if (command === 'chat') {
		if (message.author.id === zen) {
			var chantar = unfilteredcommand[1]
			var chtmsg = unfilteredcommand.join(' ').slice(chantar.length + 5)
			client.channels.get(chantar).send(chtmsg)
			message.delete();
			return;
		}
		return;
	};
	if (command === 'source') {
		message.reply(' the source code is on GitHub and is written by Zen \(ZenIsBestWolf#0446\) Here\'s the link to the repository: https://github.com/ZenIsBestWolf/maddie-bot');
		message.delete()
		return;
	}
	if (command === 'coffee') {
		message.channel.send({
			file: './src/coffee.gif'
		})
		message.delete()
		return;
	}
	if (command === 'triggered') {
		message.channel.send({
			file: './src/triggered.gif'
		})
		message.delete()
		return;
	};
	if (command === 'nick') {
    if(message.author.id === zen) {
    message.delete()
		message.guild.me.setNickname(args)
		return;
	}};
	if (command === 'perm') {
		if (message.author.id === zen) {
			var ch_perm = unfilteredcommand[1]
			if (message.guild.me.hasPermission(ch_perm)) {
				message.reply("True.")
				return;
			};
			message.reply("False.")
			return;
		};
		return;
	};
	if (comman === 'lenny') {
		message.channel.send('( ͡° ͜ʖ ͡°)')
		message.delete()
	}
	message.channel.send({
		file: './src/' + command + '.png'
	}).then(e => message.delete());
});
client.login(token);
