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
    message.delete()
    message.channel.send('http://prntscr.com/f7kpom');
    console.log(message.author.tag + ' used ' + message.content);
    }
  if (message.content === prefix + 'help') {
    message.delete()
    message.reply('check your DMs!');
    message.author.send('Here\'s the list of commands!\n ```\n!ripchat - (Formally !ripchatimg) Sends an image grieving over the chat, from the TwoKinds community discord server.\n!blanket - If someone\'s cold, not anymore!\n!help - Display\'s THIS message.\n!triforce - The triforce of bed!\n!coffee - When someone\'s hyper.\n!triggered - If someone says \"Alot\" or any other things that trigger you, use this.\n!mocha - The saviour of lack of sleep and replenisher of energy!\n!source - Links you to the GitHub where Maddie\'s code is, since she\'s open source.\n!angrykeith - A picture of the character Keith, from TwoKinds, very angry!\n!okevals - The good ol\' OK from Evals!\n!plottwister - Hey, watch it! That\'s my exposition!\n!beaned - friccin beaned kiddo.\n!blush - Oh the flattery!\n!smug - For when you took that extra cookie from the jar.\n!boi - U WAT BOI!?\n!shook - Similar meaning to !triggered, but less intense.\n!embarrassedmike - Whoopsies!\n!embarrassedkatvals - the same as !embarrassedmike but with a different person.\n!really - Just really?\n!excusemewat - bruh watchu say???\n!saywatnow - Similar to !excusemewat.\n!brainfart - Quick! I need some brain-fart laxitive!\n!rekt LOL XD FREAKING REKT KIDDO\n!anyonethere - Hello. It\'s me. I was wonderin if anyone was here after all these minutes.\n!embarrassedkeith - same as !embarrassedmike, just a different character.\n!smug2 - Similar to !smug.\n!satisfaction - When you\'re all too satisfied.\n!profanity - Send this to those who swear too much.```More coming!');
    console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'triforce') {
      message.delete()
      message.channel.send('http://prnt.sc/f893h0');
      console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'ripchatimg') {
    message.delete()
    message.channel.send('https://prnt.sc/f8lyf9');
    console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'coffee') {
    message.delete()
    message.channel.send('https://media.giphy.com/media/b4Lyqm2nSdUze/giphy.gif');
    console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'triggered') {
    message.delete()
    message.channel.send('https://media.giphy.com/media/xUA7b7lt0fKp7wVm4o/giphy.gif');
    console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'mocha') {
		message.delete()
    message.channel.send('https://prnt.sc/f9nnin');
    console.log(message.author.tag + ' used ' + message.content);
	}
  if (message.content === prefix + 'source') {
      message.delete()
      message.reply(' the source code is on GitHub and is written by Zen \(zennnnnnnnnnnnnnn#0446\) Here\'s the link to the repository: https://github.com/zennnnnnnnnnnnnnn/maddie-bot');
      console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'angrykeith') {
    message.delete()
      message.channel.send('https://prnt.sc/faz890');
      console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'plottwister') {
    message.delete()
      message.channel.send('https://prntscr.com/fbafp0');
      console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'okevals') {
    message.delete()
      message.channel.send('https://prntscr.com/fbahjb');
      console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'blush') {
    message.delete()
      message.channel.send('https://prntscr.com/fbb992');
      console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'smug') {
    message.delete()
      message.channel.send('https://prntscr.com/fbbd5i');
      console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'beaned') {
    message.delete()
      message.channel.send('https://prntscr.com/fbbdze');
      console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'boi') {
    message.delete()
      message.channel.send('https://prntscr.com/fbbev1');
      console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'shook') {
    message.delete()
      message.channel.send('https://prntscr.com/fbbgi0');
      console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'embarrassedmike') {
    message.delete()
      message.channel.send('https://prntscr.com/fbbgmx');
      console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'embarrassedkatvals') {
    message.delete()
      message.channel.send('https://prntscr.com/fbbhfp');
      console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'really') {
    message.delete()
      message.channel.send('https://prntscr.com/fbbiaj');
      console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'excusemewat') {
    message.delete()
      message.channel.send('https://prntscr.com/fbbj65');
      console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'brainfart') {
    message.delete()
      message.channel.send('https://prntscr.com/fbbzkk');
      console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'anyonethere') {
    message.delete()
      message.channel.send('https://prntscr.com/fbbzmu');
      console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'smug2') {
    message.delete()
      message.channel.send('https://prntscr.com/fbbzov');
      console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'embarrassedkeith') {
    message.delete()
      message.channel.send('https://prntscr.com/fbbzrh');
      console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'saywatnow') {
    message.delete()
      message.channel.send('https://prntscr.com/fbbzw6');
      console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'satisfaction') {
    message.delete()
      message.channel.send('https://prntscr.com/fbbzzy');
      console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'rekt') {
    message.delete()
      message.channel.send('https://prntscr.com/fbc02j');
      console.log(message.author.tag + ' used ' + message.content);
  }
  if (message.content === prefix + 'profanity') {
    message.delete()
      message.channel.send('https://prntscr.com/fbcth1');
      console.log(message.author.tag + ' used ' + message.content);
  }
});

client.login(token);
