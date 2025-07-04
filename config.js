const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "DId1QayS#szwnz9YoB7DyuRZ6_xC5UcK3kIvAEmQr6zefezlDnTc", //put your session id
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/x5w7lg.jpeg",
ALIVE_MSG: process.env.ALIVE_MSG || "*👋 Hello I am VVIP MOVIE BOT*",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",  //true or false
MODE: process.env.MODE || "groups", //private or public
AUTO_VOICE:"false", //true or false
MONGODB: "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority",
CAPTION: "> *VVIP-MOVIE-HUB-TEAM*",
JIDS: [],
SUDO: ['94715203490','94765635699','94704896880']

};
