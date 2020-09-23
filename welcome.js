
const welcome =  async (member, bot) => {
    console.log(member);
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

                bot.on('messageReactionAdd', (msgReaction, member) => {

                    console.log("React added");
                    //add member role as default
                    let role = member.guild.roles.get("756476041572384790");
                    if(!role){
                         return
                    }

                    console.log("Role doesen't exist.");
                    member.addRole(role);


                });

                bot.on('messageReactionRemove', (msgReaction, member) => {

                    console.log("React Removed");
                    //add member role as default
                    let role = member.guild.roles.get("756476041572384790");
                    if(!role){
                         return
                    }

                    console.log("Role doesen't exist.");
                    member.removeRole(role);


                });
            });

}

module.exports = welcome;
