const Enum = require("../config/Enum");
const config = require("../config")
const CustomError = require("./Error");
const i18n = new (require('./i18n'))(config.DEFAULT_LANG);

class Response {
    constructor() {}

    static successResponse(data, code=200){
        return {
            code,
            data
        }
    }

    static errorResponse(error, lang){
        console.log(error);
        if(error instanceof CustomError){
            return {
                code: error.code,
                error: {
                    message: error.message,
                    description: error.description
                }
            }
        }else if(error.message.includes("E11000")){
            return {
                code: Enum.HTTP_CODES.CONFLICT,
                error: {
                    message: i18n.translate("COMMON.ALREADY_EXIST", lang), //"Already Exists!",
                    description: i18n.translate("COMMON.ALREADY_EXIST", lang), //"Already Exists!"
                }
            }
        }

        return {
            code: Enum.HTTP_CODES.INT_SERVER_ERROR,
            error: {
                message: i18n.translate("COMMON. ", lang), //"Unknown Error!",
                description: error.message
            }
        }
        
    }
}

module.exports = Response;