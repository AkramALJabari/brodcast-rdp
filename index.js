const { Client, MessageEmbed, Intents, Permissions } = require(`discord.js`);
const client = new Client({ intents: [
Intents.FLAGS.GUILDS,
Intents.FLAGS.GUILD_MESSAGES,
Intents.FLAGS.DIRECT_MESSAGES,
Intents.FLAGS.DIRECT_MESSAGE_TYPING,
Intents.FLAGS.GUILD_MEMBERS,
Intents.FLAGS.GUILD_BANS,
Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
],
partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
client.setMaxListeners(0);
client.login(`OTU0ODM0MTAyMjMyNjk0ODA1.GJyfMR.Wmw14P0rsI4vAddKNybGwqI9MgNzagntFYrj1I`)



client.on("ready", () => {
    console.info(client.guilds.cache.map(guild => guild.name))
    console.info(`${client.user.tag} is ready`)
});

let prefix = "!"
client.on("messageCreate", async (message) => {
    if(message.content.startsWith(prefix + "bc")){
        let allMembers = [];
		if(message.author.id !== `725669950303371325` && message.author.id !== `740725814907240509` && message.author.id !== `678517905150836757` && message.author.id !== `608224231322419202`)return;
        //if(!message.member.permissions.has(Permissions.FLAGS.ADMINISTATOR))return message.channel.send({ content: "Invalid Permission....." });
        if(!message.content.split(" ")[1]) return message.channel.send({ content: "Nothing to say....." })
        let args = message.content.split(" ").slice(1);
        let members = await message.guild.members.fetch();
        members.forEach(member => {
            allMembers.push(member)
        })
        let x = 0;
        let success = 0;
        let error = 0;
        allMembers = allMembers.filter(member => !member.user.bot)
        try {
        while (x < allMembers.length){
            let user = await client.users.fetch(allMembers[x].user.id);
            user.send(args.join(" ") + "\n<@" + user+">")
                .then(async () => {
                    client.channels.cache.get("959469394872922132").send({ content: "\`\`\`Successfully send to " + user.username + "\`\`\`" })
					/*Console.log('A')
					success++;
					console.log('D')*/
                })
                .catch(err => {
                    client.channels.cache.get("959469394872922132").send({ content: "\`\`\`I can't send to " + user.username + "\`\`\`" })
            })
            x++
			await console.log(success)

        }
        setTimeout(async() => {
            message.channel.send({ content: `Successfully Send \`${args.join(" ")}\`` })
        },5000)
		//await client.channels.cache.get("959469394872922132").send({ content: `Successfully send to ${allMemberssendmsg.length}` })
    } catch (err){
            console.log(err)
        }
    }
})

/*
client.on("messageCreate" , async(message) => {
    if(message.content.startsWith(prefix + "newbc")){
        let allMembers = [];
        if(!message.member.permission.has(Permissions.FLAGS.ADMINISTATOR)) return message.channel.send("Invalid Permission.....")
        if(!message.content.split(" ")[1]) return message.channel.send("Nothing to say.....")
        let args = message.contnet
        .split(" ")
        .slice(1)
        .join(" ");
        let noargs = new Discord.MessageEmbed()
            .setAuthor(
                message.author.username,
                message.author.displayAvatarURL({ dynamic: true })
            )
            .addField(`Error :x:`, `Please type your broadcast message !`)
            .setTimestamp()
            .setFooter(
                message.author.username,
                message.author.displayAvatarURL({ dynamic: true })
            );
        if (!args) return message.lineReply(message.author, noargs);
        let choiceembed = new MessageEmbed()
    }
});*/