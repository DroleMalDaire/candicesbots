const Discord = require('discord.js');
var bot = new Discord.Client();

bot.on("ready", function() {
	bot.user.setActivity('CandiceBOT, !help');
	console.log("le bot a bien été connecté")
})

bot.login("NTcwNjM1MTkyODIyMzk4OTc2.XMCGmw.z_5rVt9ZvSqfduaU8ru2pCi62iI")

client.on('message', message => {
	if(message.content.startsWith(prefix + 'bill')) {
		const embed = new Discord.RichEmbed()
		.setFooter("demandé par " + message.author.username, message.author.avatarURL)
		.setImage(ChapiNarkuss)
		.setColor(0xE31212)
		.setDescription(`ça c'est Bill, et son ami Billy 
		Bill et Billy sont copains et ne s'insulte jamais 
		Bill et Billy jouent à lol ensemble 
		Bill et Billy sont les champions de France de lol et les champions du monde d'europe avec leurs équipes
		Bill et Billy sont des copains 
		Sois comme Bill et Billy`)
		return message.channel.send({embed})
		}
}
);
