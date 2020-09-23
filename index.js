require('dotenv').config()
const Discord = require("discord.js")
const package = require("./package.json")
const config = package.config

const welcome = require("./welcome.js")



const bot = new Discord.Client()


bot.on('ready', () => {
    console.log(`${bot.user.username} v${package.version} is ready!`)
    console.log("Date is here: " + Date.now());


});

bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  //console.log(member);
  let guild = member.guild
  const member_role = member.guild.roles.get("756476041572384790");
  const soprano_role = member.guild.roles.get("757617954111356978");
  const alto_role = member.guild.roles.get("757617933349552208");
  const tenor_role = member.guild.roles.get("757617910305914911");
  const bass_role = member.guild.roles.get("757617888130629712");

  console.log(member_role);
  //welcome(member, bot);
  console.log("NEW MEMBER ARRIVED: ${member} ");
  member.send(`Welcome to the Dublin University Choral Society discord server, ${member}.
               We'll use this through the semmester for fun online events.`);

  member.send(`At the moment you cannot see most of the server channels, click on one of the "SATB" reacts (letters) beneath this message,
                S for a Soprano, A for an Alto, T for a Tenor and B for Bass. If you do not know, click on the "O".`)
      .then(sentEmbed => {
                sentEmbed.react("🇸")
                sentEmbed.react("🇦")
                sentEmbed.react("🇹")
                sentEmbed.react("🇧")
                sentEmbed.react("🅾️")

              console.log("Reacts added");

              bot.on('messageReactionAdd', (reaction, user) => {


                      if (user.bot) return;

                      console.log("Removing Role");

                      member.addRole(member_role);

                      if(reaction.emoji.name === "🇸" ) {
                          console.log("WOULD ADD s");
                          member.addRole(soprano_role);
                      }
                      if(reaction.emoji.name === "🇦" ) {
                          console.log("WOULD ADD a");
                          member.addRole(alto_role);
                      }

                      if(reaction.emoji.name === "🇹" ) {
                          console.log("WOULD ADD t");
                          member.addRole(tenor_role);
                      }

                      if(reaction.emoji.name === "🇧" ) {
                          console.log("WOULD ADD b");
                          member.addRole(bass_role);
                      }

                      if(reaction.emoji.name === "🅾️" ) {
                          console.log("Not adding anymore");

                      }

                      member.send("Welcome to the server, you can see all now. If you choose the wrong role un-react to the mistaken role and then re-choose")


              });

              bot.on('messageReactionRemove', (reaction, user) => {

                  if (user.bot) return;

                  console.log("Removing Role");
                  member.removeRole(member_role);

                  if(reaction.emoji.name === "🇸" ) {
                      console.log("WOULD remove s");
                      member.removeRole(soprano_role);
                  }
                  if(reaction.emoji.name === "🇦" ) {
                      console.log("WOULD remove a");
                      member.removeRole(alto_role);
                  }

                  if(reaction.emoji.name === "🇹" ) {
                      console.log("WOULD  remove t");
                      member.removeRole(tenor_role);
                  }

                  if(reaction.emoji.name === "🇧" ) {
                      console.log("WOULD remove b");
                      member.removeRole(bass_role);
                  }

                  if(reaction.emoji.name === "🅾️" ) {
                      console.log("Not adding anymore");

                  }


              });
          });


});

bot.on('message', message => {
    //not doing any commands


});

bot.on('error', err => {
	console.log('Error', err)
});

// Invite link
// https://discordapp.com/oauth2/authorize?client_id=501866111017680911&scope=bot
bot.login(process.env.DISCORD_ACCESS_TOKEN);
