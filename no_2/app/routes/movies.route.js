module.exports = (app) => {
  const movies = require("../controllers/movies.controller.js");

  // Retrieve all Movies
  app.get("/search", movies.findAll);

  // Retrieve a single Movie with movieId
  app.get("/detail", movies.findOne);
};
