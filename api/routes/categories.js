var express = require('express');
var router = express.Router();
const isAuthhentication = false;

router.all("*", (req,res, next)=>{
    if (isAuthhentication) {
        next();
    }else{
        res.json({
            success: false,
            error:"authentication doğrulanamadı."
        })
    }
})
router.get('/',function(req, res, next){
    res.json({
        success: true,
    });
});

module.exports = router;
