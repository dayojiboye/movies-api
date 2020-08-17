var express = require('express');
var router = express.Router();
const movies = require('../public/javascripts/data/movies');

module.exports.allMovies = router.get('/', (req, res, next) => {
  res.send(movies);
});

module.exports.filterMovies = router.get('/:genre', (req, res, next) => {
  if (!movies[req.params.genre] && req.params.genre !== 'all') {
    res.status(404).send('Request not found!');
    return;
  }

  if (req.params.genre === 'all') {
    res.send(movies);
    return;
  }

  res.send(movies[req.params.genre]);
});
