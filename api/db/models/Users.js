const mongoose = require('mongoose');

const schema = mongoose.Schema({
    email: {type: String, require: true},
    password: {type: String, required: true},
    is_active: {type: Boolean, default: true},
    first_name: String,
    last_name: String,
    phone_number: String
},{
    // timestamps:true
    timestamps :{
        createAt: create_at,
        updateAt: update_at
    }
});

class Users extends mongoose.Model {

}

schema.loadClass(Users);
module.exports = mongoose.model("users",schema);