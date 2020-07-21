const sql = require("./db.js");

// constructor
const Tweet = function(tweet) {
  this.content = tweet.content;
  this.likes = tweet.likes;
  this.retweets = tweet.retweets;
};

Tweet.create = (newTweet, result) => {
  sql.query("INSERT INTO tweets SET ?", newTweet, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created tweet: ", { id: res.insertId, ...newTweet });
    result(null, { id: res.insertId, ...newTweet });
  });
};

Tweet.findById = (tweetId, result) => {
  sql.query(`SELECT * FROM Tweets WHERE id = ${tweetId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found tweet: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Tweet.getAll = result => {
  sql.query("SELECT * FROM tweets", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tweets: ", res);
    result(null, res);
  });
};

Tweet.updateById = (id, tweet, result) => {
  sql.query(
    "UPDATE tweets SET content = ?, likes = ?, retweets = ? WHERE id = ?",
    [customer.content, customer.likes, customer.retweets, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated tweet: ", { id: id, ...tweet });
      result(null, { id: id, ...tweet });
    }
  );
};

Tweet.remove = (id, result) => {
  sql.query("DELETE FROM tweets WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted tweet with id: ", id);
    result(null, res);
  });
};

Tweet.removeAll = result => {
  sql.query("DELETE FROM tweets", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} tweets`);
    result(null, res);
  });
};

module.exports = Tweet;