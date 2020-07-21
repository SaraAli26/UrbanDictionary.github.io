const Definition = require("../models/definitions.model.js");

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
  
    // Create a Definitions
    const definition = new Definition({
        word: req.body.word,
        definition: req.body.definition,
        author: req.body.author,
        thumbsUp: req.body.thumbsUp,
        thumbsDown:req.body.author.thumbsDown
    });
  
    // Save Customer in the database
    Definition.create(definition, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Definition."
        });
      else res.send(data);
    });
  };