const express = require('express');
const app = express();

const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const PORT = process.env.PORT || 3000;

const getFinancialTip = () => {
  const tips = [
    "Track your expenses daily to avoid overspending. 💸📊",
    "Start saving at least 20% of your income each month. 💰💡",
    "Diversify your investments to minimize risk. 📈🔄",
    "Avoid impulse purchases; wait 24 hours before buying. ⏳🛒",
    "Build an emergency fund with 3-6 months of expenses. 🏦🛑"
  ];
  return tips[Math.floor(Math.random() * tips.length)];
};


bot.start((ctx) => {
  ctx.reply('Welcome to FinanceAssistantBot! 💼💰 Use /tip for financial tips 📊 or /help for a list of commands 📝.');
});


bot.command('tip', (ctx) => {
  const tip = getFinancialTip();
  ctx.reply(`💡 Financial Tip: ${tip}`);
});


bot.command('help', (ctx) => {
  ctx.reply("Available commands:\n" + "/tip 💡 - Get a random financial tip 💸\n" + "/help ❓ - List available commands 📋\n" + "/start 👋 - Introduction to the bot 🤖"

);
});


bot.on('text', (ctx) => {
  ctx.reply('I only understand commands like /tip 💡 or /help ❓. Use /start 👋 for more info.');
});

bot.launch();

console.log('FinanceAssistantBot is running...');


app.get('',(req,res)=>{
  res.send({message:"Hello World 🌍"});
})

app.listen(PORT,()=>{
  console.log("Server is Working ... 🚀");
})

