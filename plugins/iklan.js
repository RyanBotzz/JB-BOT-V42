let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╔═════════❖••❖════════╗
    *OPEN EDIT BY ERIK GANZ*
╚═════════❖••❖════════╝

*_DAFTAR BARANG_*


*_- LOGO JB_*
*_- LOGO ANIME_*
*_- LOGO GAMING_*
*_- LOGO GUILD_*
*_- LOGO SQUAD_*
*_- LOGO PRIBADI_*

*_- E - SERTIFIKAT_*
*_- ALL POSTER_*
*_-JASA SPAM VIRTEX 3K_*
*_-JUAL DM FF MURAH LEGAL DARI AXIS NET_*
*_-TUTOR SCAM_*
*_-TUTOR KENONIN IG AGAK KEDIP_*
*_-TUTOR RAMEIN FOLL IG_*
*_-TUTOR BALIKIN IG KENON_*
*_-TUTOR BIAR IG GAK KENON_*
*_-TUTOR UBAH SESI S71 JADI TTL_*
*_-TUTOR SESI S71_*
*_-TUTOR SESI TTL_*
*_-TUTOR ALL SESI 3K_*
*_-TUTOR CE ANTI SESI_*
*_-TUTOR DM ILLEGAL_*
*_-TUTOR KIRIM VIRUS_*
*_-TUTOR BUAT WEB P_*
*_-TUTOR RESET HP JARAK JAUH_*
*_-TUTOR UP GOPAY_*
*_-TUTOR NEBAR WEB P_*
*_-TUTOR NEBAR WEB P DI TIK TOK_*
*_-TUTOR RAMEIN BUYYER_*
*_-TUTOR OUT IN OWNER FF_*
*_-TUTOR HD IN POTO_*
*_-TUTOR CARA LIAT POTO YANG LAMA BANGET_*

*_SATU TUTOR NYA 3K AJA MURAH KAN YA JELAS AMANAH_*
*_TAKE ALL 10K AJA MURAH_*

*BAWA DANA : 0 - 5K*
*VIA💳:GOPAY*
_*HASIL?BAGUS*_



╔═════════❖••❖════════╗
*OPEN TUTORIAL BY ERIK GANZ*
NO:http://Wa.me/+6283819654409?text=Assalamualaikum+Kak
╚═════════❖••❖════════╝
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(iklan)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

