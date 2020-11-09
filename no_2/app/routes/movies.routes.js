module.exports = (app) => {
  const movies = require("../controllers/movies.controller.js");

  // Retrieve all Movies
  app.get("/movies", movies.findAll);

  // Retrieve a single Movie with movieId
  app.get("/movies/:movieId", movies.findOne);
};
