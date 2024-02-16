const BOT_TOKEN = "6449149756:AAHvt-pzRdd7aBSDLAH_m-0GFCL1dJFVS04";
import TelegramBot from "node-telegram-bot-api";
import path from "path";
const imagePath = path.join(process.cwd(), "images", "shohijahon.jpg");
const bot = new TelegramBot(BOT_TOKEN, { polling: true });
const everyoneGetToKnow = "Barchasi bilan tanishib chiqtim ! ✔"
let contacts = {};
let myBotQuestions = {
  myDataQuestion: "Shohijahon aslida kim ?",
  myKnowledgeQuestion: "Shohijahonning bilimi ?",
  myWhereToStudyQuestion: "U qayerda dasturlashni o'rgangan ?",
  myExperienceQuestion: "Ish tajribasi haqida"
}
const handleSendKnowledge = (userID) => {
    bot.sendMessage(userID, "* 2023-yil sarhisobi bilan Shohijahon hozirda Web Dasturlashning Frontend yo'nalishini biladi va aynan hozirda uning bilimi HTML, CSS, Sass, Bootstrap, Javascript, Typescript, React, Redux, Firebase, Redux/toolkit lardan tashkil topgan Va hozirda Beckend ya'ni Javascript yo'nalishida Node.js ni o'rganishda davom etmoqda *", {
        parse_mode: "Markdown",
    });
};
const handlePhoneNumber = (chat_id) => {
  bot.sendMessage(chat_id, "*Avvalambor kontaktingzini jo'nating *", {
    parse_mode: "MarkdownV2",
    reply_markup: {
      resize_keyboard: true,
      keyboard: [
        [{ text: "Kontakt ni jo'natish !", request_contact: true }],
      ],
      one_time_keyboard: true,
    },
});
}
const handleProgrammingData = (chat_id) => {
  bot.sendMessage(chat_id, "<strong>Shohijahon 2022-yil Samarqand shahri IT parkda dasturlashning  Frontend yo'nalishi bo'yicha tahsil oladi Undan keyin <a href='https://www.instagram.com/samytpuz'>Samarqand Davlat Yoshlar Texnoparki</a> da 5 oylik muvaffaqiyatli amaliyotni amalga oshiradi. Shundan so'ng esa u Toshkent ga kelib <a href='https://www.instagram.com/najottalim'>Najot ta'lim</a> da Frontend Bootcamp yo'nalishida Abdulaziz Kalandarov va Shuhratbek Qobulov qo'llarida o'z bilimlarini mustahkamlaydi. Shundan so'ng  Samarqand ga qaytib <a href='https://www.instagram.com/programmer.uz/'> Programmer.uz </a>  kombaniyasida 2 oy amaliyot o'taydi va <a href='https://www.instagram.com/empireitacademy/'>Empire It  Academy</a> da o'z bilimlarini boshqalar bilan bo'lishadi Hozirda Node.js yo'nalishida tahsil olmoqda. </strong>", {
    parse_mode: "HTML"
  })
}
const handleExperience = (chat_id) => {
  bot.sendMessage(chat_id, "<strong>Shohijahon ning jamiyki hisobga olganda <a href='https://www.instagram.com/samytpuz'>Samarqand Davlat Yoshlar Texnoparki</a> va <a href='https://www.instagram.com/programmer.uz/'> Programmer.uz </a> markaz hamda o'quv markazlari hamda <a href='https://www.instagram.com/empireitacademy/'>Empire It  Academy</a> dagi ish tahribasi bilan yohud 7 oy amaliyot va 11 oy ish tajribasiga ega dasturchi. Amaliyot va ish tajribasi hisoblanganda 1.5 yil tajribasi bor deya olish mumkin. U real loyihalarda 4 marotaba qatnashgan bo'lib ularning hech biri afsuski production ga chiqmagan. Ammo Shohijahon aynan bu real loyihalarda o'z ishini mas'uliyat bilan bajargan ! Uning git hub profilida Uzum, Iticket, Amazon, Github, Instagram, Texnomart, Countries.uz va shunga o'hshash saytlarni clone versiyalarini ko'rishingiz mumkin. Ularning hech biri multi Page emas ya'ni hammasi single Page application lar hisoblanadi. Ba'zilari Typescript(TSX) yoki React(JSX) Redux(state management) lar ustida qurilgan. Barchasida o'zlari ishlaydigan server lari ham mavjud. Siz ularni barchasini Shohijahonning Github profilidan  topishingiz mumkin. \n \n <a href='https://github.com/shokhDeveloper' target='blank'> Shohijahonning Github porfili. </a></strong>", {
    parse_mode: "HTML",
    disable_web_page_preview: true
  })
}
const handleRequests = (chat_id) => {
  bot.sendMessage(
    chat_id,
    "<code>Shohijahon_dev haqida nimalarni bilmoqchisiz ?</code>",
    {
      parse_mode: "HTML",
      reply_markup: {
        resize_keyboard: true,
        one_time_keyboard: false,
        keyboard: [
          [{ text: myBotQuestions.myDataQuestion }],
          [{ text: myBotQuestions.myKnowledgeQuestion }],
          [{ text: myBotQuestions.myWhereToStudyQuestion }],
          [{ text: myBotQuestions.myExperienceQuestion }],
          [{text: everyoneGetToKnow}]
        ],
      },
    }
  );
}
bot.on("contact", (message) => {
    contacts[message.from.id] = {
        firstName: message.contact.first_name,
        lastName: message.contact.last_name,
        phoneNumber: message.contact.phone_number,
    };
    handleRequests(message.chat.id)
  });
  // 82850406M!@#m
  bot.on("message", (msg) => {
    const chat_id = msg.chat.id;
    const text = msg.text;
    const userId = msg.from.id
  if (text == "/start") {
    bot
      .sendMessage(chat_id, "*Assalomu aleykum, Xush kelibsiz*", {
        parse_mode: "MarkdownV2",
      })
      .then(() => {
        setTimeout(() => {
         handleRequests(chat_id)
        }, 1000);
      });
  }
  if (text == myBotQuestions.myDataQuestion) {
    bot.sendPhoto(
      chat_id,
      imagePath,
      {
        caption:
          "<strong>Assalomu aleykum tanishing Shohijahon Musinkulov ! </strong> <i>Frontend va bo'lajak fullstack dasturchi Samarqand shahrida 200* yil 23-iyulda Musinkulovlar oilasida tavallud topgan.</i> <strong>Oilaviy malumotlar sir tutiladi.</strong> <i>Hobbylari (Boks, Futbol, eFootball, She'r yozish) va musiqa tinglash.</i> <i>Asosan dasturlashga Algoritmik masalalar va shaxsiy qiziqish sabab kirib kelgan </i> <i> Dasturlashdagi muammosi ma'lum bir Package yoki Libary va FreamWork larda aynan o'shani ohirigacha o'rganmagunicha o'rganaveradi.</i> <i>Yoqtirgan Futbol clubi <strong>'FC Barcelona'</strong></i>. <i>Yoqtirgan futbol o'yinchi Leo Messi.</i> <i>Maqsadi aynan o'zi tanlagan sohada yetuk va yengilmas mutahasis bo'lib chiqish.</i> <i>Tanlagan asosiy dasturlash tili <strong>(Javascript, Typescript)</strong></i> <i>Yoqtirgan kompaniyalari 'Apple, Asus'</i> <i>Hayotdagi maqsad <strong>Shunchaki to'htab qolmaslik</strong></i> \n \n <a href='https://www.instagram.com/shokhijakhon_dev/' target='blank'> Shohijahonning Instagram profili </a> \n <a href='https://t.me/shokhijakhon_dev' target='blank'> Shohijahonning shaxsiy telegram profili. </a> \n <a href='https://t.me/shokhDeveloper' target='blank'> Shohijahonning shaxsiy blogi </a> \n <a href='https://github.com/shokhDeveloper' target='blank'> Shohijahonning Github porfili. </a>",
        parse_mode: "HTML",
        disable_web_page_preview: true,
      },
      { filename: "shohijahon.jpg" }
    );
  }
  if (text === myBotQuestions.myKnowledgeQuestion) {
    if(contacts[userId]){
        handleSendKnowledge(userId)
    } else{
        handlePhoneNumber(chat_id)
    }
  }
  if(text ===  myBotQuestions.myWhereToStudyQuestion){
    if(contacts[userId]){
      handleProgrammingData(chat_id)
    }else{
      handlePhoneNumber(chat_id)
    }
  }
  if(text == myBotQuestions.myExperienceQuestion){
    if(contacts[userId]){
      handleExperience(chat_id)
    }else{
      handlePhoneNumber(chat_id)
    }
  }
  if(text == everyoneGetToKnow){
    if(contacts[userId]){
      bot.sendMessage(chat_id, "*Hurmatli bot foydalanuvchisi, botdan foydalanganingiz uchun alohida tashakkur*",{
        parse_mode: "MarkdownV2",
        disable_notification: false,
        reply_to_message_id: msg.message_id,
        reply_markup: {
          resize_keyboard: true,
          one_time_keyboard: true,
          keyboard: [
            [{text: "Arzimaydi"}]
          ]
        }
      }) 
    }else{
      handlePhoneNumber(chat_id)
    } 
}
if(text === "Arzimaydi"){
  if(contacts[userId]){
    bot.sendMessage(chat_id, "✊")
  }else{
    handlePhoneNumber(chat_id)
  }
}
});