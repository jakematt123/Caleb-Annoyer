const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]});

bot.once('ready', () => {
	console.log('Ready!');
});

bot.on('message', async(message) => {
    if(message.author.id === '229608429050789888') {
        console.log('jesus')
        await message.react("jesusmeetsjesus:965477578938916864")
    } else {
        console.log('not jesus')
    }
})

bot.login(token);