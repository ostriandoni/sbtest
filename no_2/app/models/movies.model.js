const sql = require("./db.js");

const Movie = (movie) => {
  this.title = movie.title;
  this.year = movie.year;
  this.movieId = movie.movieId;
  this.type = movie.type;
  this.poster = movie.poster;
};

Movie.findById = (movieId, result) => {
  sql.query(
    `SELECT * FROM movies WHERE movie_id = '${movieId}'`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found movie: ", res[0]);
        result(null, res[0]);
        return;
      }

      result({ kind: "not_found" }, null);
    }
  );
};

Movie.getAll = (result) => {
  sql.query("SELECT * FROM movies", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("movies: ", res);
    result(null, res);
  });
};

module.exports = Movie;
