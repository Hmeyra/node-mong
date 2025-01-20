const express = require('express');
const router = express.Router();
const { HTTP_CODES } = require('../config/Enum');
const emitter = require('../lib/Emitter');

emitter.addEmitter("notifications");    //event emitter tanımlandı

router.get('/', (req, res) => {
    //yanıt başlıkları bir kez gönder
    res.writeHead(HTTP_CODES.OK, {
        "Content-Type": "text/event-stream",
        "Connection": "keep-alive",
        "Cache-Control": "no-cache, no-transform"
    });



    const listener = (data) => {
        res.write("data: " + JSON.stringify(data) + "\n\n");    //stream oluşturmak için write
    }

    emitter.getEmitter("notifications").on("messages", listener);    //dinle ve listener fonksiyonu çalıştır

    req.on("close", () => {
        emitter.getEmitter("notifications").off("messages", listener);
    });

});

module.exports = router;
