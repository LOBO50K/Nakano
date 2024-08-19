let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
- ᴀᴘᴏʏᴀ ᴀᴍɪ ᴄʀᴇᴀᴅᴏʀ :3
ᴀᴠᴇᴄᴇꜱ ʟᴏꜱ ꜱᴇʀᴠɪᴅᴏʀᴇꜱ ɴᴏꜱ ᴄᴜᴇꜱᴛᴀɴ :c
- PAYPAL
• *Link :* https://www.paypal.me/BenjaBarreto
- MERCADO PAGO
• *cvu :* 0000003100078317676333
ᴘᴏʀ ꜱᴜ ᴀᴘᴏʏᴏ ʟᴇꜱ ᴏᴛᴏʀɢᴀʀᴇᴍᴏꜱ ᴘʀᴇᴍɪᴜᴍ
ʏ ᴜɴ ᴀᴄᴄᴇꜱᴏ ᴀʟ ʙᴏᴛ ᴀ ᴄᴜᴀʟQᴜɪᴇʀ ɢʀᴜᴘᴏ.
`
let img = 'https://telegra.ph/file/99f6a3fc5f94dca595380.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m, null,)
//conn.sendPayment(m.chat, '2000', 'USD', don, m.sender, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
