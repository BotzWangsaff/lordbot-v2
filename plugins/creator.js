let handler = function (m) {
  // this.sendContact(m.chat, '6285810172953', 'KiritoBot (Bot Whatsapp)', '6285810172953', 'KiritoBot (Owner Real) 'm)
  let contacts = []
  for (let owner of Object.entries(global.Owner).filter(v => v[1].isCreator)) {
    contacts.push(...[owner[0], (owner[1].name || conn.getName(owner[0]) || '')])
  }
  if (contacts.length < 3) return this.sendContact(m.chat, contacts[0], contacts[1], m)
  this.sendContactArray(m.chat, contacts, m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
