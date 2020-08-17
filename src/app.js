var createError = require('http-errors');
var express = require('express');
const serverless = require('serverless-http');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
var movies = require('../routes/movies');
var addMovie = require('../routes/addMovie');
var deleteMovie = require('../routes/deleteMovie');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://dummy-movies-api.netlify.app/.netlify/functions/app/movies'
  );
  res.setHeader('Access-Control-Allow-Methods', '*');
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/.netlify/functions/app/movies', movies.allMovies);
app.use('/.netlify/functions/app/movies', movies.filterMovies);
app.use('/.netlify/functions/app/movies', addMovie);
app.use('/.netlify/functions/app/movies', deleteMovie);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports.handler = serverless(app);
