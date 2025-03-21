const i18n = require('../i18n');

class I18n {
    constructor(lang) {
        this.lang = lang ;
    }
    
    translate(text, lang = this.lang, params = []){
        let arr = text.split("."); //COMMON.VALIDATION_ERROR_TITLE => ['COMMON', 'VALIDATION_ERROR_TITLE']
        
        let val = i18n[lang][arr[0]];   // text[EN][COMMON]

        for (let i = 1; i < arr.length; i++) {
            val = val[arr[i]];  // i=1 için; val["VALIDATION_ERROR_TITLE"] 
            
        }

        val = val + ""; // bu string ekleme yapıldığı için memory de farklı bir alanı temsil etmiş olacak {} değiştirmiş olmayacak 

        for (let i = 0; i < params.length; i++) {
            val = val.replace("{}", params[i]);
            
        }

        return val || "";
    }
}

module.exports = I18n;