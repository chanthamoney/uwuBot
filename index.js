require("dotenv").config(); //initialize dotenv
const Discord = require("discord.js"); //import discord.js
const Uwuifier = require("uwuifier"); // import uwu

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const uwuifier = new Uwuifier({
  spaces: {
    faces: 0.5,
    actions: 0.004,
    stutters: 0.1,
  },
  words: 1,
  exclamations: 1,
});
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.author.username !== "uwu owo") {
    msg.reply(uwuifier.uwuifySentence(msg.content));
  }
});

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token
