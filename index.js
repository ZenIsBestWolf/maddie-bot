const Discord = require('discord.js');
const client = new Discord.Client();
const token = require("./token.json").token

client.on('ready' ,() => {
  console.log('Online.');
})

var prefix = '/'
var unifix = 'm/'

client.on('message', message => {
  if (message.content === '/ripchat') {
    message.delete()
    message.channel.send('chat is ded why guys!!11!1');
    console.log(message.author.tag + ' used ' + message.content)
  }
  if (message.content === '/james') {
    message.delete()
    message.reply('oh yeah that dude is a cool person');
    console.log(message.author.tag + ' used ' + message.content)
  }
  if (message.content === '/blanket') {
    message.delete()
    message.channel.send('http://prntscr.com/f7kpom');
    console.log(message.author.tag + ' used ' + message.content)
  }
  if (message.content === prefix + 'help') {
    message.delete()
    message.reply('check your DMs!')
    message.author.send('The commands are, blanket, james, ripchat, and help! Use these with your prefix.')
    console.log(message.author.tag + ' used ' + message.content)
  }
  if (message.content === prefix + 'shutdown') {
    if (message.author.tag === 'zennnnnnnnnnnnnnn#0446') {
      console.log('Shutting down on demand...');
      process.exit()
    }
    else {
      return;
    }
  }
  if (message.content === prefix + 'triforce') {
      message.delete()
      message.channel.send('http://prnt.sc/f893h0')
      console.log(message.author.tag + ' used ' + message.content)
  }
  if message.content === (prefix + 'ripchatimg') {
    message.delete()
    message.channel.send('https://prnt.sc/f8lyf9')
    console.log(message.author.tag + ' used ' + message.content)
  }
  if message.content === (prefix + 'coffee') {
    message.delete()
    message.channel.send('https://media.giphy.com/media/b4Lyqm2nSdUze/giphy.gif')
    console.log(message.author.tag + ' used ' + message.content)
  }
});

client.login(token);
