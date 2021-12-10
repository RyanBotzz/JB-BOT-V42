let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • AXIS [+62 838-1965-4409]
│ • GOPAY: [+62 838-1965-4409]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
