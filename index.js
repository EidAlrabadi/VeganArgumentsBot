const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const tokenfile = require("./token.json")

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
    console.log(`${bot.user.username} is Online !`);
    bot.user.setGame("This Server")
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);


    if(cmd === `${prefix}owner`){             //Who is the owner command
        return message.channel.send("Eid A.");
    }
});

bot.login(process.env.BOT_TOKEN);
