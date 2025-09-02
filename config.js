const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "DARK-NOVA-XMDeyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1BvQnpTenNzKzBWNm5vUXBPOXl2RW0ycnQ1eTFVcExHZU05SmlyMTQzaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1FMcTdqRWZyYkVWRHg0WG1qcmF5eUVuQklTQmtRMGdOVVVoTmRYRUgzWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQ1ZHRytwQXlGV1Zhd3ZMamxTRW5wNjdXd012dm5aRmRldGZXTE9nam5vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSanRta3BkQ0JKMUxDcmFrLytpdjVwa2dWLzZOUlppczVqdHp2cGNmQmxjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndFM2VzYnFSTEx5TmF1clhsMzhkR0FtRzJud25IajA0eVBPUzRUekR5a0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZYSjhvSEhjd0tkNkVSaURvRjRTZkxxRkJ3dTdTZTNZd0lEMDFLSUJHRDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkFQeHBBdEQ3QTNuTVBORkpKdE95dmRSY2xTUDhaeTJqRGJFQm9qdmlVQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiejdYRS9tSkRxNURCS2NtZ1RwWk9UZDJBaEFLeUFZd09TUmZXTnRRNnVsaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFjYWxUM1p1N0I1eGFaYzFueUVydGxhSWxOMFdWQ3RUdTU0b2pLTjMzZ093Tlc3ODdmaDJDNyt4ajZ5MGdEMnJvTUVIUWVEWU1XNXBKaW5zVzJQckNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE5LCJhZHZTZWNyZXRLZXkiOiIxSkVQMjgzdisxaE44MEluajk4a2VTbGVFOGdkMFFPR3FnOVM5aThCMWs0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzUyOTc4MjM3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk1MkY4QTdDRDhFQkVGQ0ZBMTg5NUJFOTlCMTIyREY5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY4MTg1ODJ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzUyOTc4MjM3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQ5MkE3RTA2MkUxRDc0Rjk3QkUxOTNCREE1QzdDN0JGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY4MTg1ODJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pEem1Zc0NFSS9aMjhVR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkhNbHpCcEF5SEpyekJteWFYTy9pdzg2OWhlZk5EOWRqWUM3NUIzY1VvQ009IiwiYWNjb3VudFNpZ25hdHVyZSI6IjA1MTJYd1I4dUJwU01Rbk5WT3QyZEpaWTgzbFlKUlZDYURHY0JSZHlFVGp3RTd0U1NYTm41Q0FCbW1icU1lVTUwYzBZSEhKQW95czRUaTBIYzh6cEJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxdDc3Z0lzbDVseUdreFhTUFBZcDNaTzBRVlZrNjlkYjJZV1RPYWoydVl3WVkzZ1FkbUM2UkxmbE9PL2FiZUFuK0tqUTcyLzExN0VCNDZYTmh0OXZDUT09In0sIm1lIjp7ImlkIjoiOTQ3NTI5NzgyMzc6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJjYWtlcyIsImxpZCI6IjY0Nzk0NTE0MjEwODU0OjJAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzUyOTc4MjM3OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUnpKY3dhUU1oeWE4d1pzbWx6djRzUE92WVhuelEvWFkyQXUrUWQzRktBaiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2ODE4NTc5LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU12cSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY DARK-NOVA-XMD 🤍*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://github.com/dula9x/DARK-NOVA-XMD-V1-WEB-PAIR/blob/main/images/WhatsApp%20Image%202025-08-15%20at%2017.22.03_c520eb7b.jpg?raw=true",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "DARK-NOVA-XMD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "DARK-NOVA-XMD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94752978237",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "DARK-NOVA-XMD",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ DARK-NOVA-XMD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/dula9x/DARK-NOVA-XMD-V1-WEB-PAIR/blob/main/images/WhatsApp%20Image%202025-08-15%20at%2017.22.03_c520eb7b.jpg?raw=true",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || ">Iam Alive Now!! DARK-NOVA-XMD  🤭💗 ආහ් පැටියෝ කොහොමද ?🌝*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94752978237",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
};
