const mongoose = require('mongoose');
const is = require('is_js');
const { PASS_LENGTH, HTTP_CODES } = require('../../config/Enum');

const CustomError = require('../../lib/Error');
const bcrypt = require('bcrypt-nodejs');

const schema = mongoose.Schema({
    email: {type: String, require: true, unique: true},
    password: {type: String, required: true},
    is_active: {type: Boolean, default: true},
    first_name: String,
    last_name: String,
    phone_number: String
},{
    versionKey: false,
    // timestamps:true
    timestamps :{
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

class Users extends mongoose.Model {

    validPassword(password){
        return bcrypt.compareSync(password, this.password);
    }

    static validateFieldsBeforeAuth(email, password) {  // class referansıyla çağırmak için static olmalı
        if( typeof password !== "string" || password.length < PASS_LENGTH || is.not.email(email))
            throw new CustomError(HTTP_CODES.UNAUTHORIZED, "Validate Error!", "email or password wrong");
        
        return null;            
    }

}

schema.loadClass(Users);
module.exports = mongoose.model("users",schema);