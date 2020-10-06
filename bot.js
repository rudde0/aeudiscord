const Discord = require('discord.js');
const client = new Discord.Client();
const activities = require('./assets/activities');

client.on('ready', () => {
	console.log(`Bot, ${client.user.tag} adiyla baslatildi. Kimlik: ${client.user.id}`);
	client.setInterval(() => {
		const activity = activities[Math.floor(Math.random() * activities.length)];
		client.user.setStatus('available')
		client.user.setPresence({
			game: {
				name: activity.text,
				type: activity.type
			}
		});
    }, 60000);
});
client.on('error', console.error);

client.on('guildMemberAdd', member => {
	member.addRole(`761605971067797534`);
});

client.login(process.env.bot_tokeni);
