const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
var prefix = "?";
const config = require('./config.json');

client.login('NTcwNjM1MTkyODIyMzk4OTc2.XMCGmw.z_5rVt9ZvSqfduaU8ru2pCi62iI');

client.on('ready', () => {
	console.log(`Connetion effectuer avec ${client.user.tag} !`);
});
