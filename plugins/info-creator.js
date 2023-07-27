function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:fahrul.me\nitem1.TEL;waid=6285786539008:6285786539008\nitem1.X-ABLabel:\nJangan Spam Kak\nURL;My Web:https://fahrul.me\nEMAIL;Email Owner:rakrohaku@gmail.com\nORG: NOT A BOT + NOT CALL\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler