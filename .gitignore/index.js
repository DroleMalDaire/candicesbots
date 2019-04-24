const Discord = require('discord.js');
var bot = new Discord.Client();

bot.on("ready", function() {
	bot.user.setActivity('CandiceBOT, !help');
	console.log("le bot a bien été connecté")
})

bot.login("NTcwNjM1MTkyODIyMzk4OTc2.XMCGmw.z_5rVt9ZvSqfduaU8ru2pCi62iI")

bot.on('message', message => {
	if(message.content.startsWith('!help')) {
		message.channel.send('salut')
		consol.log("le bot a bien été connecté")
	}
})
