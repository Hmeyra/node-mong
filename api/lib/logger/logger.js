const { format, createLogger, transports } = require("winston");
 
const { LOG_LEVEL } = require("../../config");

const formats = format.combine(
    format.timestamp({format: "YYYY-MM-DD HH:mm:ss.SSS"}),
    format.simple(), //string format olacak
    format.splat(),
    format.printf(info => `${info.timestamp} ${info.level.toUpperCase()}: [email:${info.message.email}] [location:${info.message.location}] [procType:${info.message.procType}] [log:${info.message.log}]`) 
);

//  "2025-01-16 12:12:12 INFO: [email:asd] [procType:asd] [log:{}] "

const logger = createLogger({
    level: LOG_LEVEL,   //hangi level a kadar log basılacağı bilgisi
    transports: [
        new (transports.Console)({format: formats}) //consola basılsın ex. file, stream, http
    ]
});

module.exports = logger;

