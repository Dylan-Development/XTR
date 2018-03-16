const botconfig = require("./botconfig.json");
const tokenfile = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const weather = require('weather-js');
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
const Fortnite = require('fortnite');
const stats = new Fortnite(process.env.TRN);


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity(`${bot.guilds.size} Servers!`);

});


bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args)
});

bot.login("NDIxMzg1NTA0OTMyNjI2NDMz.DYxxCA.EXPiS8s4t3Oa7OPzeYT3Fnfg4NQ");
