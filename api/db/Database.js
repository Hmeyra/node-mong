const mongoose = require('mongoose');
let instance = null;

class Database {
    constructor() {
        if (!instance) {
            this.mongoConnection = null;
            instance = this.instance;
        }
    }

    async connect(options){
        try {
            console.log(options);
            console.log("DB connecting...");
        let db = await mongoose.connect(process.env.CONNECTION_STRING);
        this.mongoConnection = db; 
        console.log("DB connected.");
        } catch (err) {
            console.error(err);
            process.exit(1);
        }
    }
}

module.exports = Database;