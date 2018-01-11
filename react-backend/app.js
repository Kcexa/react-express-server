const express = require('express'),
      app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

/*-- Routes */
const index = require('./api/routes/index');
const historyRoute = require('./api/routes/history');

/*-- DB*/
const mongoose = require('mongoose'),
      HistoryModel = require('./api/models/history');

/*-- Init MongoDB */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TestHistory');

/*-- Parsers, loggers and others */
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))); // uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*-- Routes */
app.use('/', index);
historyRoute(app);

/*-- Catch 404 and forward to error handler */
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/*-- Error handler */
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;