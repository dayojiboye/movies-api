var express = require('express');
var router = express.Router();
const movies = require('../public/javascripts/data/movies');

router.delete('/:movie', (req, res, next) => {
  let movie = [];

  for (let key in movies) {
    let found = movies[key].find((movie) => {
      return movie.name === req.params.movie;
    });

    if (found) {
      movie.push(found);
    }

    movies[key] = movies[key].filter((movie) => {
      return movie.name !== req.params.movie;
    });
  }

  if (movie.length === 0) {
    res.status(404).send('Request not found!');
    return;
  }

  res.send(movie);
});

module.exports = router;
