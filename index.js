const { 
    Telegraf, 
    Markup 
} = require('telegraf');

require('dotenv').config()
const text = require('./library')
const bot = new Telegraf(process.env.BOT_TOKEN);


bot.start((ctx) => ctx.reply(`Добро пожаловать в телеграм бот ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'}!`));
bot.help((ctx) => ctx.reply(text.commands));

bot.command('film', async (ctx) => {
    try {
      await ctx.replyWithHTML('<b>Жанры</b>', Markup.inlineKeyboard(
        [
          [Markup.button.callback('Триллер', 'btn_1'), Markup.button.callback('Драма', 'btn_2'), Markup.button.callback('Боевик', 'btn_3')],
          [Markup.button.callback('Гангстерский фильм', 'btn_4'), Markup.button.callback('Детектив', 'btn_5'), Markup.button.callback('Мелодрама', 'btn_6')],
          [Markup.button.callback('Музыкальный фильм', 'btn_7'), Markup.button.callback('Фэнтези', 'btn_8'), Markup.button.callback('Исторический фильм', 'btn_9')],
          [Markup.button.callback('Военный', 'btn_10'),  Markup.button.callback('Вестерн', 'btn_11')],
        ]
      ))
    } catch (e) {
      console.error(e)
    }
  })

  function addActionBot(id_btn, src_img, text, preview,) {
    bot.action(id_btn, async (ctx) => {
      try {
        await ctx.answerCbQuery()
        if (src_img !== false) {
          await ctx.replyWithPhoto({
            source: src_img
          })
        }
        await ctx.replyWithHTML(text, {
          disable_web_page_preview: preview
        })
      } catch (e) {
        console.error(e)
      }
    })
  }
  addActionBot('btn_1', './img/1.jpg', text.text1, true)
  addActionBot('btn_2', './img/2.jpg', text.text2, true)
  addActionBot('btn_3', './img/3.jpg', text.text3, true)
  addActionBot('btn_4', './img/4.jpg', text.text4, true)
  addActionBot('btn_5', './img/5.jpg', text.text5, true)
  addActionBot('btn_6', './img/6.jpg', text.text6, true)
  addActionBot('btn_7', './img/7.jpg', text.text7, true)
  addActionBot('btn_8', './img/8.jpg', text.text8, true)
  addActionBot('btn_9', './img/9.jpg', text.text9, true)
  addActionBot('btn_10', './img/10.jpg', text.text10, true)
  addActionBot('btn_11', './img/11.jpg', text.text11, true)

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));