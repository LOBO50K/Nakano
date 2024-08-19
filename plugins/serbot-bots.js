import axios from 'axios';

async function handler(m, { conn, usedPrefix }) {
  try {
    const connectedUsers = new Set();
    const addedNumbers = new Set();
    global.conns
      .filter(conn => conn.user && conn.state !== "close")
      .forEach(user => {
        const userJid = user.user.jid.replace(/[^0-9]/g, "");
        if (!addedNumbers.has(userJid)) {
          addedNumbers.add(userJid);
          const userName = user.user.name || "ʀᴇᴍ-ᴄʜᴀᴍ-ʙᴏᴛ";
          connectedUsers.add(`Wa.me/${userJid}?text=${usedPrefix}menu (${userName})`);
        }
      });

    const connectedUserCount = connectedUsers.size;
    if (connectedUserCount > 0) {
      const imageBuffer = await axios.get("https://telegra.ph/file/4b59e9b1264db9bd79df7.jpg", { responseType: "arraybuffer" });
      await conn.sendFile(m.chat, imageBuffer.data, 'image.jpg', '⌛ _𝘾𝘼𝙍𝙂𝘼𝙉𝘿𝙊..._▰▰▰▱▱▱▱▱-𝘉𝘖𝘛𝘚');

      const userList = [...connectedUsers].join(`\n`);
      await m.reply(`𝕰𝖘𝖙𝖔𝖘 𝖘𝖔𝖓 𝖑𝖔𝖘 𝖘𝖚𝖇 𝖇𝖔𝖙 𝖆𝖈𝖙𝖎𝖛𝖔𝖘 𝖉𝖊 𝖓𝖆𝖐𝖆𝖓𝖔:\n${userList}`);
    } else {
      await m.reply("𝕹𝖔 𝖍𝖆𝖞 𝖓𝖎𝖓𝖌𝖚𝖓 𝖘𝖚𝖇 𝖇𝖔𝖙 𝖆𝖈𝖙𝖚𝖆𝖑𝖒𝖊𝖓𝖙𝖊 𝖆𝖈𝖙𝖎𝖛𝖔");
    }
  } catch (error) {
    console.error("Error:", error);
    await m.reply("Ocurrió un error al procesar la solicitud.");
  }
}

handler.command = ["listjadibot", "bots"];
handler.help = ["bots"];
handler.tags = ["serbot", "jadibot"];

export default handler;
