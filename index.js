const {
  default: makeWASocket,
  useSingleFileAuthState,
  DisconnectReason,
  delay
} = require("@adiwajshing/baileys");
const P = require('pino');
const fs = require('fs');
const axios = require("axios")
const { Storage } = require('megajs');
const chalk = require("chalk");
async function removesession() {
  await fs.unlinkSync('session.json');
}


console.log(
  `
╔═══════════【 👸 𝚀𝚄𝙴𝙴𝙽 𝙳𝙸𝙰𝙽𝙰 👸 】═══════════╗ 

${chalk.blue.bold('>> Follow this steps to connect whatsapp 👇')}
${chalk.magenta.italic('• Use latest version of WhatsApp')}
${chalk.magenta.italic('• Open whatsApp in your device')}
${chalk.magenta.italic('• Click on three dots ')}${chalk.whiteBright('⋮')}
${chalk.magenta.italic('• Choose "Linked Devices"')}
${chalk.magenta.italic('• Now Click "LINK A DEVICE" and focus to QR in the screen below')}
`
);

console.log(` ${chalk.greenBright.italic(`
 ██████╗ ██████╗      ██████╗ ██████╗ ██████╗ ███████╗
██╔═══██╗██╔══██╗    ██╔════╝██╔═══██╗██╔══██╗██╔════╝
██║   ██║██████╔╝    ██║     ██║   ██║██║  ██║█████╗  
██║▄▄ ██║██╔══██╗    ██║     ██║   ██║██║  ██║██╔══╝  
╚██████╔╝██║  ██║    ╚██████╗╚██████╔╝██████╔╝███████╗
 ╚══▀▀═╝ ╚═╝  ╚═╝     ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝
                                                      `)}`)







const startMultiDeviceQrGen = () => {


  const { saveState, state } = useSingleFileAuthState('session.json');


  const sock = makeWASocket({
    logger: P({ level: 'fatal' }),
    printQRInTerminal: true,
    browser: ['QUEEN DIANA MD', 'SAFARI', 'v5'],
    auth: state
  });



  sock.ev.on('connection.update', async (update) => {
    let _a, _b;
    let connection = update.connection, lastDisconnect = update.lastDisconnect;



    if (connection == 'connecting') { console.log('') };

    if (connection == 'open') {


      console.log('📡Successfully connected to WhatsApp Web\n');
      console.log('🔗 Genarating your session...\n');

      async function upfile() {
        const storage = await new Storage({
          email: 'xxxxxxx@gmail.com',
          password: 'xxxx'
        }).ready

        const file = await storage.upload(`${sock.user.id}.json`, fs.readFileSync('session.json')).complete


        const link = await file.link()



        const SESDIANA = link.replace('https://mega.nz/file/', '')

        const base64 = SESDIANA;
        const tey = Buffer.from(base64, 'utf-8');
        const dianses = tey.toString('base64');


        console.log(`DIANA;;;${dianses}`)
        console.log(`
        ${chalk.yellowBright.italic(`\nHERE IS YOUR SESSION. IF YOU CANT COPY THIS. THIS MASSAGE AVALABLE IN YOUR WHASAPP LOG NUMBER.PLEASE CHECK WHATSAPP\n\n\n`)}`);
        

sock.sendMessage(sock.user.id, { text: `DIANA;;;${dianses}` })

        sock.sendMessage(sock.user.id, {text:`
╔═══════【👸】═══════╗        
                𝚀𝚄𝙴𝙴𝙽 𝙳𝙸𝙰𝙽𝙰
     〘QUEEN DIANA QR CODE〙

            HERE IS YOUR SESSION
           DONT SHARE THIS CODE
                WITH ANYONE
           THANK FOR JOIN
                  WITH US
  
╚════════●●●════════╝ 


Use this link to deploy our bot 👇

https://www.github.com/kavishkaya/Queen-Diana
`})
        





        await delay(600 * 3)
        removesession()
        await process.exit(0);

      }



      upfile()




    }




    if (connection == 'close') {

      if (((_b = (_a = lastDisconnect.error) === null || _a === void 0 ? void 0 : _a.output) === null || _b === void 0 ? void 0 : _b.statusCode) !== DisconnectReason.loggedOut) {

        startMultiDeviceQrGen()

      } else {

        console.log("❌ Couldn't connect to whatsapp!");

        await fs.unlink('./session.json', (err => { }));

        await delay(600);
        process.exit(0);
      };

    };

  });
  sock.ev.on('creds.update', saveState)
};

startMultiDeviceQrGen()
