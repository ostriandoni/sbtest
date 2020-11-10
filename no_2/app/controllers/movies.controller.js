const axios = require("axios");
const MovieLog = require("../models/movie_logs.model.js");
const BASE_URL = "http://www.omdbapi.com/";
const API_KEY = "faf7e5bb";

exports.findAll = async (req, res) => {
  try {
    if (req.query.title == {}.a) {
      res.status(404).send("Please specify a title");
    } else {
      const page = req.query.page ? req.query.page : 1;
      const response = await axios.get(
        `${BASE_URL}?apikey=${API_KEY}&s=${req.query.title}&page=${page}`
      );

      if (response && response.data) {
        const uri = req.originalUrl.split("?");
        await MovieLog.create({
          endpoint: uri[0],
          querystring: uri[1] || null,
        });
        res.json({ movies: response.data });
      } else {
        res.status(404).send("No data found");
      }
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
};

exports.findOne = async (req, res) => {
  try {
    if (req.query.imdb_id == {}.a) {
      res.status(404).send("Please specify an imdb id");
    } else {
      const response = await axios.get(
        `${BASE_URL}?apikey=${API_KEY}&i=${req.query.imdb_id}`
      );

      if (response && response.data) {
        const uri = req.originalUrl.split("?");
        await MovieLog.create({
          endpoint: uri[0],
          querystring: uri[1] || null,
        });
        res.json({ movies: response.data });
      } else {
        res.status(404).send("No data found");
      }
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
};
