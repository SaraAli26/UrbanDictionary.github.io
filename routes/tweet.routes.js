module.exports = app => {
    const tweets = require("../controllers/tweet.controller.js");
  
    // Create a new tweet
    app.post("/tweets", tweets.create);
  
    // // Retrieve all tweets
    // app.get("/tweets", tweets.findAll);
  
    // // Retrieve a single tweet with tweetId
    // app.get("/tweets/:tweetId", tweets.findOne);
  
    // // Update a tweet with tweetId
    // app.put("/tweets/:tweetId", tweets.update);
  
    // // Delete a tweet with tweetId
    // app.delete("/tweets/:tweetId", tweets.delete);
  
    // // Create a new tweet
    // app.delete("/tweets", tweets.deleteAll);
  };