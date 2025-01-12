const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: {type: String, require: true},
    is_active: {type: Boolean, default: true},
    created_by: {type: mongoose.SchemaTypes.ObjectId}
},{
    versionKey:false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

class AuditLogs extends mongoose.Model {

}

schema.loadClass(AuditLogs);
module.exports = mongoose.model("categories",schema);