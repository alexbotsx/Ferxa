let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*𝗠𝗲𝗻𝘀𝗮𝗷𝗲:* ${pesan}`
  let teks = `𓍢ִ໋  𝐅𝐞𝐫𝐱𝐚 𝐁𝐨𝐭 🐵

* 🛍️ Adquiere el bot con
wa.me/+56971531036\n\n↳ ${oi}\n\n↳ *𝗠𝗲𝗻𝘀𝗮𝗷𝗲:*\n`
  for (let mem of participants) {
  teks += `･🐵 @${mem.id.split('@')[0]}\n`}
  teks += `⇢ 𝐅𝐞𝐫𝐱𝐚 𝐁𝐨𝐭`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
  handler.admin = true
  handler.group = true
  export default handler