const Discord = require('discord.js');
const client = new Discord.Client();
var token = process.env.TOKEN;

client.on('ready' ,() => {
  console.log('Online. The prefix is: ' + prefix) + '.';
  client.user.setGame('with Maeve!');
});

var prefix = '!';

client.on('message', message => {
  if (message.content === prefix + 'blanket') {
    message.delete().then(() => {
    message.channel.send('http://prntscr.com/f7kpom');
    console.log(message.author.tag + ' used ' + message.content);
    });
  }
  if (message.content === prefix + 'help') {
    message.delete().then(() => {
    message.reply('check your DMs!');
    message.author.send('Here\'s the list of commands!\n ```\n!ripchat - (Formally !ripchatimg) Sends an image grieving over the chat, from the TwoKinds community discord server.\n!blanket - If someone\'s cold, not anymore!\n!help - Display\'s THIS message.\n!triforce - The triforce of bed!\n!coffee - When someone\'s hyper.\n!triggered - If someone says \"Alot\" or any other things that trigger you, use this.\n!mocha - The saviour of lack of sleep and replenisher of energy!\n!source - Links you to the GitHub where Maddie\'s code is, since she\'s open source.\n!angrykeith - A picture of the character Keith, from TwoKinds, very angry!```These are all that have been developed. More coming on the way!');
    console.log(message.author.tag + ' used ' + message.content);
    });
  }
  if (message.content === prefix + 'triforce') {
      message.delete().then(() => {
      message.channel.send('http://prnt.sc/f893h0');
      console.log(message.author.tag + ' used ' + message.content);
    });
  }
  if (message.content === prefix + 'ripchatimg') {
    message.delete().then(() => {
    message.channel.send('https://prnt.sc/f8lyf9');
    console.log(message.author.tag + ' used ' + message.content);
    });
  }
  if (message.content === prefix + 'coffee') {
    message.delete().then(() => {
    message.channel.send('https://media.giphy.com/media/b4Lyqm2nSdUze/giphy.gif');
    console.log(message.author.tag + ' used ' + message.content);
    });
  }
  if (message.content === prefix + 'triggered') {
    message.delete().then(() => {
    message.channel.send('https://media.giphy.com/media/xUA7b7lt0fKp7wVm4o/giphy.gif');
    console.log(message.author.tag + ' used ' + message.content);
    });
  }
  if (message.content === prefix + 'mocha') {
		message.delete().then(() => {
    message.channel.send('https://prnt.sc/f9nnin');
    console.log(message.author.tag + ' used ' + message.content);
    });
	}
  if (message.content === prefix + 'source') {
      message.delete().then(() => {
      message.reply(' the source code is on GitHub and is written by Zen \(zennnnnnnnnnnnnnn#0446\) Here\'s the link to the repository: https://github.com/zennnnnnnnnnnnnnn/maddie-bot');
      console.log(message.author.tag + ' used ' + message.content);
    });
  }
  if (message.content === prefix + 'angrykeith') {
    message.delete().then(() => {
      message.channel.send('https://prnt.sc/faz890');
      console.log(message.author.tag + ' used ' + message.content);
    });
  }
});

client.login(token);
