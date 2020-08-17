const Joi = require('joi');
var express = require('express');
var router = express.Router();
const movies = require('../public/javascripts/data/movies');

const validateMovie = (movie) => {
  const schema = {
    name: Joi.string().required(),
    duration: Joi.string().required(), // add regex to this later
    genre: Joi.string().required(),
    imgUrl: Joi.string().required(),
    desc: Joi.string().required(),
    year: Joi.string().required(),
  };

  return Joi.validate(movie, schema);
};

router.post('/', (req, res) => {
  const { error } = validateMovie(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const movie = {
    name: req.body.name,
    duration: req.body.duration,
    genre: req.body.genre,
    imgUrl: req.body.imgUrl,
    desc: req.body.desc,
    year: req.body.year,
  };
  for (let key in movies) {
    if (req.body.genre === key) {
      movies[req.body.genre].push(movie);
    }
  }

  res.send(movie);
});

module.exports = router;
