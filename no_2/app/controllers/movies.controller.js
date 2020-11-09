const Movie = require("../models/movies.model.js");

exports.findAll = (req, res) => {
  Movie.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving movies.",
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
  Movie.findById(req.params.movieId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Movie with id ${req.params.movieId}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Movie with id " + req.params.movieId,
        });
      }
    } else res.send(data);
  });
};
