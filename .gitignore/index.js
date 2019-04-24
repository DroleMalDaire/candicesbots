const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('NTcwNjM1MTkyODIyMzk4OTc2.XMCGmw.z_5rVt9ZvSqfduaU8ru2pCi62iI');

bot.on('ready', () => {
	console.log(`Connetion effectuer avec ${client.user.tag} !`);
});
