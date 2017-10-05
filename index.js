const Discord = require('discord.js');
const client = new Discord.Client();
var token = process.env.TOKEN;
client.on('ready' ,() => {
  console.log('Online. The default global prefix is: ' + prefix);
  client.user.setGame('with Landen\'s coffee!');
});
process.on('unhandledRejection', console.error);
var prefix = '!';

client.on('message', message => {
  var unfilteredcommand = message.content.substring(prefix.length).split(' ')
  var command = unfilteredcommand[0].toLowerCase()
  var args = unfilteredcommand.join(' ').slice(4)
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;
  if (command === 'help') {
    message.delete()
    message.author.send('Here\'s the list of commands!\n ```\n!ripchat - Sends an image grieving over the chat, from the TwoKinds Group Chat discord server.\n!blanket - If someone\'s cold, not anymore!\n!help - Display\'s THIS message.\n!triforce - The triforce of bed!\n!coffee - When someone\'s hyper.\n!triggered - If someone says \"Alot\" or any other things that trigger you, use this.\n!source - Links you to the GitHub where Maddie\'s code is, since she\'s open source.\n!angrykeith - A picture of the character Keith, from TwoKinds, very angry!\n!okevals - The good ol\' OK from Evals!\n!plottwister - Hey, watch it! That\'s my exposition!\n!beaned - friccin beaned kiddo.\n!smug - For when you took that extra cookie from the jar.\n!boi - U WAT BOI!?\n!shook - Similar meaning to !triggered, but less intense.\n!embarrassedmike - Whoopsies!\n!embarrassedkat - the same as !embarrassedmike but with a different person.\n!really - Just really?\n!derp - herpa derp\n!rekt LOL XD FREAKING REKT KIDDO\n!wat - wait wat\n!embarrassedkeith - same as !embarrassedmike, just a different character.\n!smug2 - Similar to !smug.\n!profanity - Send this to those who swear too much.\n!invite - DMs you an invite link to add me to your server!\n!ches - no one!!1!\n!superhappy - HOORAY YAY OMG YAS\n!testserver  - Recieve an invite to the testing server, ask an admin for perms!\n!jerks - meanies >:(\n!kek - K E K\n!shhh - (3 h\'s) SHUTUP but subtle.\n!topkek - pretty much !kek but its not.\n!call - for all types of calls!```DM ZenIsBestWolf#0446 with all of your suggestions!');
    if (message.author.id === "183672121522782208") {
      message.author.send("Hi Zen!\nAdministrator Commands: ```" + prefix + "shutdown - Shutdown Maddie.\n" + prefix + "chat [channel] [message] - Chats the message as this bot, in the specified channel. BE CAREFUL! Invalid channel WILL break Maddie.\n" + prefix + "log [message] - Logs the message into the logs.```")
    };
    return;
  };
  if (command === 'shutdown') {
    if (message.author.id === "183672121522782208") {
    process.exit();
    return;
  }
  return;
};
  if (command === 'chat') {
    if (message.author.id === "183672121522782208") {
    message.delete();
    var chantar = unfilteredcommand[1]
    var chtmsg = unfilteredcommand.join(' ').slice(chantar.length + 5)
    client.channels.get(chantar).send(chtmsg)
    return;
  }
  return;
};
  if (command === 'log') {
    if (message.author.id === "183672121522782208") {
    message.delete();
    console.log(args);
  return;
};
  return;
  };
  if (command === 'invite') {
    message.delete()
	  message.reply(' check your DMs for an invite link!')
	  message.author.send('If you want to get ME in YOUR server, go HERE: https://discordapp.com/oauth2/authorize?client_id=362327458554445865&scope=bot&permissions=125952\nPlease don\'t change the perms, I need these to run properly!')
    return;
  }
  if (command === 'source') {
    message.delete()
    message.reply(' the source code is on GitHub and is written by Zen \(ZenIsBestWolf#0446\) Here\'s the link to the repository: https://github.com/ZenIsBestWolf/maddie-bot');
    return;
  }
  if (command === 'coffee') {
    message.delete()
    message.channel.send({file: './src/coffee.gif'})
    return;
  }
  if (command === 'triggered') {
    message.delete()
    message.channel.send({file: './src/triggered.gif'})
    return;
  }
  if (command === 'testserver') {
    message.delete()
    message.reply(' check your DMs for more information!')
    message.author.send('To join the test server, simply click here and tag one of the admins! https://discord.gg/Vbr8n7R')
    return;
  }
  message.channel.send({file: './src/' + command + '.png'})
    .then(messsage => message.delete());
});
client.login(token);
