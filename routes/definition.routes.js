module.exports = app => {
    const definitions = require("../controllers/definition.controller.js");
  
    // Create a new tweet
    app.post("/Definitions", definitions.create);
  
    
  };