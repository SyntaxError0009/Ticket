const {Client} = require("discord.js-selfbot-v13")
const client = new Client({
checkUpdate: false,
})

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Kartalm')
})

app.listen(3000)

client.on("ready", async () => {
console.log(`${client.user.username} is Ready!`)
})

const orderrr = "1188932079044542464"

client.on("channelCreate", async channel => {
if (channel.type === "GUILD_TEXT" && channel.name.startsWith("ticket-") && channel.parent.id === orderrr) {

await new Promise(r => setTimeout(r, 2000))

channel.send(`>  **سلاو بەرێز بەخر بەیت بۆ تیکیتک
__MOON NIGHT__
> داوە کاریەکەت رون کەوە** 
 __HAMA__`)

}
});
///

client.login(process.env.token)
