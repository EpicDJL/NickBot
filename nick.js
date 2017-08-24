const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
console.log('I am ready!');
});

client.on("message", (message) => {
  if (message.content.startsWith("changeNick")) {
    if (message.guild.members.get(bot.user.id).hasPermission("MANAGE_NICKNAMES") && message.guild.members.get(bot.user.id).hasPermission("CHANGE_NICKNAME")) {
            message.guild.members.get(bot.user.id).setNickname("It Worked(declan)");
        } else {
            console.log("I dont have the permissons to change my nickname in this server.");
        }
  }
});

client.on("ready", () => {
  console.log("I am ready!");
});

client.login('token');
