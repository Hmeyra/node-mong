const mongoose = require('mongoose');

const schema = mongoose.Schema({
    role_id: {type: mongoose.SchemaType.ObjectId, require: true},
    permission: {type:String, required: true},
    created_by: {type: mongoose.SchemaType.ObjectId, required: true},
},{
    versionKey:false,
    timestamps :{
        createAt: create_at,
        updateAt: update_at
    }
});

class RolePrivileges extends mongoose.Model {

}

schema.loadClass(RolePrivileges);
module.exports = mongoose.model("role_privileges",schema);