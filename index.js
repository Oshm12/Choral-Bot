require('dotenv').config()
const Discord = require("discord.js")
const package = require("./package.json")
const config = package.config


const bot = new Discord.Client()

bot.on('ready', () => {
    console.log(`${bot.user.username} v${package.version} is ready!`)
    console.log("Date is here: " + Date.now());

})

bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:

  member.send(`Welcome to the Dublin University Choral Society discord server, ${member}`);
  console.log("NEW MEMBER ARRIVED: ${member} ")
});

bot.on('message', msg => {
    //not doing any commands


})

bot.on('error', err => {
	console.log('Error', err)
})

// Invite link
// https://discordapp.com/oauth2/authorize?client_id=501866111017680911&scope=bot
bot.login(process.env.DISCORD_ACCESS_TOKEN);
