const express = require('express');
const app = express();
const port = 33000;

app.get('/', (req, res) => res.send('Hamo'));

app.listen(port, () => console.log(`Hamo Is Here port = ${port}`));
let category = "1188932079044542464" // id category here
let MSG = ' > سلاو بەریز بەخیر بەیت بە بلیتی __MOON NIGHT__ داوا کەریەکەت رون بکەوە' // message to send
function _0x3222(){const _0x27c3c4=['3325880CGBWdN','3FpWVZN','discord.js-selfbot-v13','635842RnEewb','1464470XKZaDj','channelCreate','parentId','14280930cRXYDT','send','1423195wRrSHh','1971ZbvcAM','6829144RFPXcd','440CAdmeQ','6ZYxQGW'];_0x3222=function(){return _0x27c3c4;};return _0x3222();}const _0x3ee675=_0x9dd6;function _0x9dd6(_0x4538e6,_0x1b20d5){const _0x322246=_0x3222();return _0x9dd6=function(_0x9dd63a,_0x3bca37){_0x9dd63a=_0x9dd63a-0x15e;let _0x24d261=_0x322246[_0x9dd63a];return _0x24d261;},_0x9dd6(_0x4538e6,_0x1b20d5);}(function(_0xd63446,_0x1fafd5){const _0x32c0f4=_0x9dd6,_0x425628=_0xd63446();while(!![]){try{const _0x5e9859=parseInt(_0x32c0f4(0x16a))/0x1+-parseInt(_0x32c0f4(0x164))/0x2*(-parseInt(_0x32c0f4(0x162))/0x3)+-parseInt(_0x32c0f4(0x15e))/0x4+-parseInt(_0x32c0f4(0x161))/0x5*(parseInt(_0x32c0f4(0x160))/0x6)+parseInt(_0x32c0f4(0x165))/0x7+-parseInt(_0x32c0f4(0x15f))/0x8*(parseInt(_0x32c0f4(0x16b))/0x9)+parseInt(_0x32c0f4(0x168))/0xa;if(_0x5e9859===_0x1fafd5)break;else _0x425628['push'](_0x425628['shift']());}catch(_0x166c0a){_0x425628['push'](_0x425628['shift']());}}}(_0x3222,0xf2a78));const Discord=require(_0x3ee675(0x163)),client=new Discord['Client']({});client['on'](_0x3ee675(0x166),_0x686218=>{const _0x4e86fe=_0x3ee675;_0x686218[_0x4e86fe(0x167)]===category&&setTimeout(()=>{const _0x4c0823=_0x4e86fe;_0x686218[_0x4c0823(0x169)](''+MSG),0x7d0;});});
client.login(process.env.token);
