const { Telegraf } = require('telegraf');

const bot = new Telegraf('YOUR_BOT_TOKEN'); // replace with your token

bot.start((ctx) => {
  ctx.reply("Welcome! 👋 Click the button below to apply for graphics design jobs.", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '📄 Apply Now',
            web_app: {
              url: 'https://hailukd-cloud.github.io/Graphics-Design-Jobs'
            }
          }
        ]
      ]
    }
  });
});

bot.launch();
console.log("Bot running...");