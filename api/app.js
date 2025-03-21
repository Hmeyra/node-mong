if(process.env.NODE_ENV != "production" ){
  require('dotenv').config();// productionda kullanma
}

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

//console.log("ENV => ",process.env);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req,res,next) => {
// console.log("Appjs içerisinde tanımlanmış bir middleware ");
// next();
// });

app.use('/api', require('./routes/index'));  //http://localhost:3000/
// app.use('/users', require('./routes/users'));   //http://localhost:3000/users
// app.use('/auditlogs', require('./routes/auditlogs')); //http://localhost:3000/auditlogs

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
