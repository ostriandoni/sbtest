const sql = require("./db.js");

const MovieLog = (movieLog) => {
  this.endpoint = movieLog.endpoint;
  this.querystring = movieLog.querystring;
};

MovieLog.create = (movieLog, result) => {
  sql.query("INSERT INTO movie_logs SET ?", movieLog, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created log:", { id: res.insertId, ...movieLog });
  });
};

module.exports = MovieLog;
