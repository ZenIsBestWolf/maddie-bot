const Discord = require('discord.js');
const client = new Discord.Client();
//const token = require("./token.json").token;
var token = process.env.TOKEN

client.on('ready' ,() => {
  console.log('Online. The prefix is: ' + prefix) + '.';
});

var prefix = '/';

client.on('message', message => {
  if (message.content === prefix + 'ripchat') {
    message.delete();
    message.channel.send('chat is ded why guys!!11!1');
    console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'james') {
    message.delete();
    message.reply('oh yeah that dude is a cool person');
    console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'blanket') {
    message.delete();
    message.channel.send('http://prntscr.com/f7kpom');
    console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'help') {
    message.delete();
    message.reply('check your DMs!');
    message.author.send('Here\'s the list of commands!\n ```\n/ripchat - Sends a message grieving over the death of chat.\n/james (temp) - A test command that will probably be removed soon. All it does is tell you that he\'s a cool person.\n/blanket - If someone\'s cold, not anymore!\n/help - Display\'s THIS message.\n/shutdown (owner only) - A command used by the dev \(zennnnnnnnnnnnnnn#0446\) to force shutdown Maddie.\n/triforce - The triforce of bed!\n/ripchatimg - Image version of /ripchat, from the TwoKinds community discord server.\n/coffee - When someone\'s hyper.\n/triggered - If someone says \"Alot\" or any other things that trigger you, use this.\n/mocha - The saviour of lack of sleep and replenisher of energy!\n/source - Links you to the GitHub where Maddie\'s code is, since she\'s open source.```These are all that have been developed. More coming on the way!');
    console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'shutdown') {
    if (message.author.tag === 'zennnnnnnnnnnnnnn#0446') {
      console.log('Shutting down on demand...');
      process.exit();
    }
    else {
      return;
    }
  }
  if (message.content === prefix + 'triforce') {
      message.delete();
      message.channel.send('http://prnt.sc/f893h0');
      console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'ripchatimg') {
    message.delete();
    message.channel.send('https://prnt.sc/f8lyf9');
    console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'coffee') {
    message.delete();
    message.channel.send('https://media.giphy.com/media/b4Lyqm2nSdUze/giphy.gif');
    console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'triggered') {
    message.delete();
    message.channel.send('https://media.giphy.com/media/xUA7b7lt0fKp7wVm4o/giphy.gif');
    console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'mocha') {
		message.delete();
    message.send('https://prnt.sc/f9nnin');
    console.log(message.author.tag + ' used ' + message.content);
	}
  if (message.content === prefix + 'source') {
      message.delete();
      message.reply(' the source code is on GitHub and is written by Zen \(zennnnnnnnnnnnnnn#0446\) Here\'s the link to the repository: https://github.com/zennnnnnnnnnnnnnn/maddie-bot)');
      console.log(message.author.tag + ' used ' + message.content);
  }
});

client.login(token);
