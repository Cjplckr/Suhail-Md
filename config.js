const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9738cb1e6c265d35d819b.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "255613800989" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255613800989";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9738cb1e6c265d35d819b.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_14_05_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MixcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDk1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU1LFxuICAgICAgICA4MyxcbiAgICAgICAgMzksXG4gICAgICAgIDcyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDksXG4gICAgICAgIDUzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA3LFxuICAgICAgICA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTczLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NixcbiAgICAgICAgMjA0LFxuICAgICAgICA2MixcbiAgICAgICAgMTgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNyxcbiAgICAgICAgODIsXG4gICAgICAgIDExLFxuICAgICAgICAyMTgsXG4gICAgICAgIDU1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg1LFxuICAgICAgICA4NixcbiAgICAgICAgMTMzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA4NixcbiAgICAgICAgNzksXG4gICAgICAgIDc0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDcyLFxuICAgICAgICAxLFxuICAgICAgICA2NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODksXG4gICAgICAgIDI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3OCxcbiAgICAgICAgOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjEzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA0MixcbiAgICAgICAgNTksXG4gICAgICAgIDE4NixcbiAgICAgICAgNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJEWlJESnZjNzFMVlY1MmxONXVOWGFDR2lwVy9hdW5NRGo0c285cXJMaFB3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsZ0pFZnk3clJvLXVOaEpwblVIV1NnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA0Y2VkMjBiLTJjNGEtNGJkZi04MmYzLWE2ZjE5ODEyMjFhMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDIsXG4gICAgICAxOTMsXG4gICAgICAxOTcsXG4gICAgICAyMjIsXG4gICAgICA3LFxuICAgICAgMjUzLFxuICAgICAgMjA2LFxuICAgICAgMTI0LFxuICAgICAgMTAwLFxuICAgICAgMTIzLFxuICAgICAgMTI0LFxuICAgICAgMjMxLFxuICAgICAgMTY1LFxuICAgICAgMjMyLFxuICAgICAgMjM5LFxuICAgICAgMTM2LFxuICAgICAgNjYsXG4gICAgICAxOTgsXG4gICAgICAxNDUsXG4gICAgICAxMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU3LFxuICAgICAgMjMyLFxuICAgICAgMjI0LFxuICAgICAgMjUyLFxuICAgICAgMjM5LFxuICAgICAgMTg5LFxuICAgICAgMTQyLFxuICAgICAgNjksXG4gICAgICAxNjEsXG4gICAgICA5NCxcbiAgICAgIDU5LFxuICAgICAgNTksXG4gICAgICAxMDQsXG4gICAgICAxODcsXG4gICAgICAzOCxcbiAgICAgIDI2LFxuICAgICAgMTYwLFxuICAgICAgMjM0LFxuICAgICAgMjAxLFxuICAgICAgMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNVdHNVc5WFhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTYxMzgwMDk4OTozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFub255bW91c1wiLFxuICAgIFwibGlkXCI6IFwiMjQ4OTMyNDEyMjE5NTMzOjMxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xXYnluVVE3YWJvc2dZWUFpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSnNPckd6U0Rka2pPRFlSNk5wSmM0SnpFTnpVRUw4Uk1rdWdWbjZVL1lTdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3UmJTTzY1VHcyVlRtaFVIMGFuOHg4V0lFYndQWEFXbS9uNWRYV0l4ZDQ3U0FsMWNzeGxmazdUcmw0cjlYY1NMZmhaOUdRT3VSbkR5ZDVKU1phT2pEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJvWUQ3K2JVUUY2bGk0K1FZRi8rVFJIRnorZ3J4K3pxbXVjT092cXQrMGhQaVJhTGV1MWRmcUFFbHAxbGg2REo5WHNISzFTQzBtRGViRVoxU2VqNHpEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2MTM4MDA5ODk6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MTc5MjQ5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQWZSXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBZlIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCU0tvakp1a2NWalZPa0ExRFZTaURibWtOUHhrT2VkYVNXUUFoNW9PK2VRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI0NjU4MjcwOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzExNzYyNjI4ODI2XCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©ahmada²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "ahmada-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "AHMADA-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "AHMADA cj",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-zlNk9EFoqrmN48qkmyUqT3BlbkFJxm46dMLKOI8JuA2VIEi3",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
