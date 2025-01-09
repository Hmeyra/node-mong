const mongoose = require('mongoose');

const schema = mongoose.Schema({
    role_id: {type: mongoose.SchemaType.ObjectId, require: true},
    user_id: {type: mongoose.SchemaType.ObjectId, required: true},
},{
    versionKey:false,
    timestamps :{
        createAt: create_at,
        updateAt: update_at
    }
});

class UsersRoles extends mongoose.Model {

}

schema.loadClass(UsersRoles);
module.exports = mongoose.model("users_roles",schema);