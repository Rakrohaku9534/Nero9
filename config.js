import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6285786539008', 'fahrul.me', true],
  ['6285786539008'], 
  ['6285786539008'],
  ['6285786539008']
] // Nomor Owner

global.mods = ['6285786539008'] 
global.prems = ['6285786539008', '6285786539008', '6285786539008']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.betabotz.org': 'isi_dulu'
}

// Harus di isi kalo mau ada fitur openai atau remini daftar atau login di sini : https://api.betabotz.org/
global.lann = 'https://api.betabotz.org/api/checkkey?apikey=chuDEfcB'

// Sticker WM
global.nans = 'BY'
global.packname = 'fahrul.me' 
global.author = '@fahrul.me' 
global.fgig = '▢ Ikuti saya di Instagram \nhttps://www.instagram.com/fahrul_mt\n' 
global.dygp = 'https://chat.whatsapp.com/EpcKMQYyG3N4Tz5Qcuv2N9'
global.fgsc = 'https://github.com/rakrohaku9534' 
global.fgyt = 'http://fahrull.me/'
global.fgpyp = '-'
global.fglog = 'https://i.ibb.co/Csp01NQ/nero-thumbnail.jpg'
global.thumb = 'https://i.ibb.co/y0vgNPT/20230723-112852.jpg'

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})