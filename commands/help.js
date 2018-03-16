const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var help = new Discord.RichEmbed()

    .addBlankField(true)
    .addField("**General:**")
.addField("**-Report**", "This Will Log The Reported User In A Report Channel For A Server Admin To Then View!")
.addField("**-Invite**", "This Will Give You The Bots Invite Link!")
.addField("**-Help**", "This Will Gives A List Of All Available Commands!")
.addField("**-Botinfo**", "This  Will Give You Certain Details Of This Bot!")
.addBlankField(true)
.addField("**Admin:**")
.addField("**-Ban**", "This Will Ban A Mentioned User From Your Discord")
.setColor("#FFB82B")
.setFooter("XTR-Bot made by Rain & xExtreme")
.setTitle(message.author.username + " - Bot Help");

//msg.channel.sendEmbed(help);
message.author.sendEmbed(help);
message.reply("Please check your DM");
//sendEmbed(help);
}


module.exports.help = {
    name: "help"
  }