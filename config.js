const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="sylivanusmomanyi@gmail.com"
global.location="Kisii,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363180849475037@g.us"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://u4orkeulqa5b9m:pc90e97423c91d1aa0a9e1722ec790b8d753d1948a04d49e6e9da45f0ca6f40a0@ceqbglof0h8enj.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d1cogn2pmpblbr"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SilvaTechB/silva-md-bot";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/751eef74109e0e5c8916c.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ" 


global.devs = "254700143167" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254743706010";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254743706010";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254700143167, 254743706010";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://silvatech.vercel.app";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_06_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0MixcbiAgICAgICAgMTkxLFxuICAgICAgICA2MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgODEsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODIsXG4gICAgICAgIDcyLFxuICAgICAgICAzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDg0LFxuICAgICAgICAzLFxuICAgICAgICAzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA3OSxcbiAgICAgICAgODQsXG4gICAgICAgIDk4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxLFxuICAgICAgICAxNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAzMyxcbiAgICAgICAgMixcbiAgICAgICAgMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMwLFxuICAgICAgICA1OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDcyLFxuICAgICAgICA5NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTksXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA3MixcbiAgICAgICAgMTUyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM0LFxuICAgICAgICA5MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTnFmK2M4RVF2WnAxY0l2cElHWk9CQXZoRDJaMFZMM0NVQy90OXZoMy80Zz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSWhqd2RzbDdURy13c0FXV3ZhZlhYQVwiLFxuICBcInBob25lSWRcIjogXCI4MGExYzJhMy00NTBjLTRlNTctOWU3My00YmIwMGNhYTc1Y2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjQsXG4gICAgICAxNjYsXG4gICAgICAyMjEsXG4gICAgICAzMCxcbiAgICAgIDEyLFxuICAgICAgNjgsXG4gICAgICAyNTAsXG4gICAgICA0OSxcbiAgICAgIDE0NixcbiAgICAgIDMzLFxuICAgICAgMTU2LFxuICAgICAgMjQzLFxuICAgICAgMjYsXG4gICAgICAyMzIsXG4gICAgICAxNzEsXG4gICAgICAxMDQsXG4gICAgICA2NCxcbiAgICAgIDI0NixcbiAgICAgIDIyNyxcbiAgICAgIDE3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2LFxuICAgICAgNTIsXG4gICAgICA5LFxuICAgICAgNDEsXG4gICAgICAxNTEsXG4gICAgICA1NCxcbiAgICAgIDE0MCxcbiAgICAgIDE5MixcbiAgICAgIDY2LFxuICAgICAgMTQ0LFxuICAgICAgODEsXG4gICAgICA1MixcbiAgICAgIDIwMCxcbiAgICAgIDIxNCxcbiAgICAgIDM5LFxuICAgICAgMzgsXG4gICAgICAyMjEsXG4gICAgICAxODIsXG4gICAgICAyMTgsXG4gICAgICA0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLNkFUUjJGS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjc3NDc4MTUzMjY6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY0ODU3ODY1NTAzNzE6MzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2E2NTVBQ0VNNkFrclVHR0FvZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBMmhSd080QjkxZ2Y1M0ZUQkR6Q21VZVN4dFpmZnhRVTl2V2liQzQyWEcwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIldhUGM0RmZXcXRpb3F1Q24rRUVLY1ZrM1poR2Zna3o3WUE4dEdDQVRrc0p6cFlZVEFJZlBOL0ZTa21XRkg4N1FNMVVrMnNyZmgrMnRaOWdBOXF4TEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkNGUDQ5UE5GQ25mdE9jb3REZnRPN1BVYnVRZzViRk05U2ZYTXV6dGR1Q0VOVjluWFJaYmk2eEJneU9KaC8yckNQaDhXTm5XcTAvMzRJd1E2dHpxemlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NzQ3ODE1MzI2OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMDU2Nzg2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTnlrXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOeWsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmUnE1czJ2TUhvNjJKVjduYWNDeUJzZFYvNmlmZ3BVcFIwRDN2NUhJOWxZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU3MjEyMDQyMixcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsNCw3XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "『 𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ 』" , // ```『 𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ 』```", //*『𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉』*\n tiktok.com/@silva.edits6"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𝑺𝒊𝒍𝒗𝒂 𝒕𝒆𝒄𝒉",


  errorChat : process.env.ERROR_CHAT || "254700143167",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SILVA"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
