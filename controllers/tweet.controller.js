const Tweet = require("../models/tweet.model.js");

// Create and Save a new Definition
exports.create = (req, res) => {
  
};

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Customer
    const tweet = new Tweet({
      content: req.body.content,
      likes: req.body.likes,
      retweets: req.body.retweets
    });
  
    // Save Customer in the database
    Tweet.create(tweet, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tweet."
        });
      else res.send(data);
    });
  };