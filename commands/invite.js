const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  var invite = new Discord.RichEmbed()

  .setColor("#FFB82B")
  .addField("**BOT AUTHENTICATION**", "**https://discordapp.com/api/oauth2/authorize?client_id=421385504932626433&permissions=8&scope=bot**")
  
  message.author.send(invite);
message.reply("**Our bot authentication has been sent to your DM!**");
}
    module.exports.help = {
    name: "invite"
  }