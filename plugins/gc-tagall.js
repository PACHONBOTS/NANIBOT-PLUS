const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`;
  let teks = `*🐒𝗔𝗣𝗔𝗥𝗘𝗖𝗘 𝗠𝗔𝗟𝗗𝗜𝗧𝗢 𝗔𝗗𝗢𝗥𝗡𝗢🐒*\n\n❏ ${oi}\n\n❏ *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`;
  for (const mem of participants) {
    teks += `┣➥🐢 @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└*🔥𝗡𝗔𝗡𝗜 𝗕𝗢𝗧 𝗗𝗢𝗠𝗜𝗡𝗔 𝗔𝗟𝗩🔥\n\n*▌│█║▌║▌║║▌║▌║▌║█*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
