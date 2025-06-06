//  Камень, Ножницы, Бумага
// Создайте файл stone.js и добавьте следующий код:
// Это приложение использует библиотеку grammY для создания бота Telegram.
// Вам нужно будет установить библиотеку grammY с помощью npm: `npm install grammY`.
// Затем запустите бота с помощью команды `node stone.js`.
// Бот будет играть в игру 'Камень, Ножницы, Бумага' с пользователем.

const { Bot } = require('grammy');

// Замените 'YOUR_BOT_TOKEN' на токен Вашего бота, который Вы получили от BotFather
const bot = new Bot('7127121269:AAFoUQhOm4QRkHCxLTbh9YKUL_AcwRyL6DM');

// Опции игры
const options = ["камень", "ножницы", "бумага"];

// Команда /start
bot.command('start', (ctx) => {
    ctx.reply("Добро пожаловать в игру 'Камень 💎 , Ножницы ✂️, Бумага 📜'! Выберите: камень, ножницы или бумага.");
});

// Обработка текстовых сообщений
bot.on('message:text', (ctx) => {
    // Получаем выбор пользователя и приводим его к нижнему регистру
    const userChoice = ctx.message.text.toLowerCase();
// Проверяем, что пользователь выбрал допустимый вариант и выполняем игру
// Если пользователь выбрал недопустимый вариант, отправляем сообщение с предложением выбрать допустимый вариант
    // Если пользователь выбрал допустимый вариант, выполняем игру и отправляем результат
    if (options.includes(userChoice)) {
        const botChoice = options[Math.floor(Math.random() * options.length)];
        let result;

        if (userChoice === botChoice) {
            result = "Ничья! 🤝";
        } else if (
            (userChoice === "камень" && botChoice === "ножницы") ||
            (userChoice === "ножницы" && botChoice === "бумага") ||
            (userChoice === "бумага" && botChoice === "камень")
        ) {
            result = "Вы выиграли! 🎉";
        } else {
            result = "Вы проиграли! 😢";
        }

        ctx.reply(`Вы выбрали: ${userChoice}\nБот выбрал: ${botChoice}\n${result}`);
    } else {
        ctx.reply("Пожалуйста, выберите: камень, ножницы или бумага.");
    }
});

// Запуск бота
bot.start();