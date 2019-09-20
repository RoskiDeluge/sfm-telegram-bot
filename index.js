var TelegramBot = require('node-telegram-bot-api'),
    // Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
    telegram = new TelegramBot("888863258:AAEzSYgUDW77KgMvJjlAwFN_m60MHUuDuDA", { polling: true });

telegram.on("text", (message) => {
  telegram.sendMessage(message.chat.id, "Hello world");
});

telegram.on("inline_query", (query) => {
    telegram.answerInlineQuery(query.id, [
      {
        type: "article",
        id: "testarticle",
        title: "Hello world",
        input_message_content: {
          message_text: "Hello, world! This was sent from my super cool inline bot."
        }
      }
    ]);
  });