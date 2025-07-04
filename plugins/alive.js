const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    alias: ["menu"],
    desc: "Check bot online or no.",
    category: "main",
    react: "🎉",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `*👋Welcome,VVIP-MOVIE-HUB-MOVIE-DL-X BOT 🍟*

*╭─「 VVIP-MOVIE-HUB 」*
*│◈ 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴* : ​🇳​​🇦​​🇩​​🇪​​🇪​​🇳​-​🇲​​🇩​ ​🇲​​🇴​​🇻​​🇮​​🇪​-​🇩​​🇱​-​🇽​
*│◈ 𝙾𝚆𝙽𝙴𝚁 𝙽𝙰𝙼𝙴* : MR. HASIYA
*│◈ 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 :*  +94715203490
*╰──────────●●►*
*╭──────────●●►*
*│ Movie Search - .mv/.mvall
*│ cinesubz.co - .mv2/cine
*│ sinhalasub.lk - .mv3/.sin
*│ yts.mx - .yts/.ytsmx
*│ sinhala subtitles - .sub/.biscope
*│ google drive - .gd/.gdrive
*│ mega files - .mega/.meganz
*╰──────────●●►*

> *©POWERED BY VVIP MOVIE HUB TEAM*
`
return await conn.sendMessage(from,{image: {url: "https://files.catbox.moe/x5w7lg.jpeg"},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
