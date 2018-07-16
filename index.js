const Discord = require('discord.js');
const client = new Discord.Client();
const commandList = require("./commands.json");
var token = process.env.TOKEN
//Startup
client.on('ready', () => {
  console.log('Online and ready to go! Bot running with prefix ' + prefix);
  client.user.setActivity('squashing bugs... Prefix is ' + prefix);
});
process.on('undhandledRejection', console.error);
//Variables
var prefix = '!';
var zen = "183672121522782208";
var hydra = "248558529336705026";
var owner = "169157856195641345";
var jc = "359539469231063052";
var lg = "359538295375659010";
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
//OnMessage
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;
  var args = message.content.substring(prefix.length).split(" ");
  var command = commandList[args[0].toLowerCase()];
  //Check if the command exists.
  if (command === undefined) return;
  var userPermLevel = 0
  if (message.channel.type === "text") {
    if (message.member.roles.exists("name", "Basitin Exiles (Mods)") || message.member.roles.exists("name", "The Masks (Admins)")) userPermLevel = 1
  };
  if (message.author.id === owner) userPermLevel = 2
  if (message.author.id === zen || message.author.id === hydra) userPermLevel = 3
  if (command.IsAutomatedCommand == true){
    if (!command.Array) {
      message.channel.send({
        file: "./src/" + args[0].toLowerCase() + "." + command.Type
      });
    } else {
      message.channel.send({
        file: "./src/" + args[0].toLowerCase() + "/" + command.Array[Math.floor(Math.random() * command.Array.length)]
      })};
      if (command.IsHidden == true) message.reply("GG! You found a hidden command!")
      if (message.channel.type === "text") message.delete();
    };
  switch (args[0].toLowerCase()) {
    case "about":
      var aboutEmbed = new Discord.RichEmbed().setThumbnail(client.user.avatarURL).setTitle('About Maddie').setColor(0xEE9A00).setDescription('Maddie is a bot specfically built for the Twokinds server.').addField('GitHub', 'Maddie can be found on GitHub here: https://github.com/ZenIsBestWolf/maddie-bot').addField('Prefix', 'Prefix is !').setFooter('Created by ZenIsBestWolf#0446. Co-Developed by RadioactiveHydra#2570', 'https://raw.githubusercontent.com/ZenIsBestWolf/maddie-bot/master/src/footer.jpg');
      message.channel.send(aboutEmbed)
      if (message.channel.type === "text") message.delete();
      break;
    case "chat":
      if (userPermLevel < 3) {
        message.reply("You cannot use this command! This command is Level 3. You are Level " + userPermLevel + ".").then(e => setTimeout(function() {
          if (message.channel.type === "text") {
            e.delete();
            message.delete();
          };
        }, 10000));
        return;
      };
      var msg = args.join(' ').slice(args[0].length)
      message.channel.send(msg);
      if (message.channel.type === "text") message.delete();
      break;
    case "go":
      if (userPerm < 3) return;
      message.delete();
      message.guild.leave();
      break;
    case "help":
  		var helpMessages = 0
  		for (i = 0; Object.keys(commandList).length > i; i++) {
  			if (Object.values(commandList)[i].IsHidden == false) {
					helpMessages++
  			};
  		};
  		var helpPages = Math.ceil(helpMessages / 25)
  		var currentHelpPage = 1
			var tempHelpNum = 0
  		var helpEmbed = []
  		for (i = 0; helpPages > i; i++) {
  			helpEmbed[i + 1] = new Discord.RichEmbed().setTitle('Command List (' + (i + 1) + '/' + helpPages + ')').setDescription('These commands are able to be used by everyone!').setColor(0x468499)
			};
  		for (i = 0; Object.keys(commandList).length > i; i++) {
  			if (Object.values(commandList)[i].IsHidden == false && Object.values(commandList)[i].Permission == 0 && tempHelpNum < 25) {
					helpEmbed[currentHelpPage].addField(prefix + Object.keys(commandList)[i], Object.values(commandList)[i].HelpMessage)
  				tempHelpNum++
  			} else if (Object.values(commandList)[i].IsHidden == false && Object.values(commandList)[i].Permission == 0 && tempHelpNum >= 24) {
  				currentHelpPage++
  				helpEmbed[currentHelpPage].addField(prefix + Object.keys(commandList)[i], Object.values(commandList)[i].HelpMessage)
  				tempHelpNum = 1
  			};
        if (userPermLevel > 0) {
          if (Object.values(commandList)[i].IsHidden == true || Object.values(commandList)[i].Permission == 1 && tempHelpNum < 25) {
            helpEmbed[currentHelpPage].addField(prefix + Object.keys(commandList)[i], Object.values(commandList)[i].HelpMessage)
            tempHelpNum++
          } else if (Object.values(commandList)[i].IsHidden == true || Object.values(commandList)[i].Permission == 1 && tempHelpNum >= 24) {
            currentHelpPage++
            helpEmbed[currentHelpPage].addField(prefix + Object.keys(commandList)[i], Object.values(commandList)[i].HelpMessage)
            tempHelpNum = 1
          };
        };
        if (userPermLevel > 1) {
          if (Object.values(commandList)[i].Permission == 2 && tempHelpNum < 25) {
            helpEmbed[currentHelpPage].addField(prefix + Object.keys(commandList)[i], Object.values(commandList)[i].HelpMessage)
            tempHelpNum++
          } else if (Object.values(commandList)[i].Permission == 0 && tempHelpNum >= 24) {
            currentHelpPage++
            helpEmbed[currentHelpPage].addField(prefix + Object.keys(commandList)[i], Object.values(commandList)[i].HelpMessage)
            tempHelpNum = 1
          };
        };
        if (userPermLevel > 2) {
          if (Object.values(commandList)[i].Permission == 3 && tempHelpNum < 25) {
            helpEmbed[currentHelpPage].addField(prefix + Object.keys(commandList)[i], Object.values(commandList)[i].HelpMessage)
            tempHelpNum++
          } else if (Object.values(commandList)[i].Permission == 3 && tempHelpNum >= 24) {
            currentHelpPage++
            helpEmbed[currentHelpPage].addField(prefix + Object.keys(commandList)[i], Object.values(commandList)[i].HelpMessage)
            tempHelpNum = 1
          };
        };
  		};
  		for (i = 0; i < helpPages; i++) {
  			message.author.send(helpEmbed[i + 1])
  		};
      if (message.channel.type === "text") {
        message.delete();
      };
			break;
    case "lenny":
      message.channel.send("( ͡° ͜ʖ ͡°)")
      if (message.channel.type === "text") message.delete();
      break;
    case "wipe":
      if (userPermLevel < 1) {
        message.reply("This command is not available for your level.").then(e => setTimeout(function() {
          e.delete();
        }, 10000));
      };
      if (message.channel.id != introChannel) {
        message.reply("That command is only available in the #welcome channel.").then(e => setTimeout(function() {
          e.delete();
          message.delete();
        }, 10000));
        return;
      };
      message.channel.fetchMessages({
        after: introMSGID
      }).then(messages => {
        message.channel.bulkDelete(messages);
      });
      break;
    case "nick":
      if (userPermLevel < 2) {
        message.reply("This command is not available for your level.").then(e => setTimeout(function() {
          e.delete();
          message.delete();
        }, 10000));
      };
      var nick = args.join(' ').slice(args[0].length);
      message.guild.me.setNickname(nick);
      message.delete();
      break;
  };
});
client.login(token);
