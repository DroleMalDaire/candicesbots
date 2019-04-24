const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
var prefix = "?";
const config = require('./config.json');

client.login(config.token);

client.on('ready', () => {
	console.log(`Connetion effectuer avec ${client.user.tag} !`);
});
