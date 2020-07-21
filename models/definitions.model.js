const sql = require("./db.js");

// constructor
const Definition = function(definition) {
  this.word = definition.word;
  this.definition = definition.definition;
  this.author = definition.author;
  this.thumbsUp = definition.thumbsUp;
  this.thumbsDown = definition.thumbsDown;
};

Definition.create = (newDefinition, result) => {
  sql.query("INSERT INTO worddefinitions SET ?", newDefinition, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Definition: ", { id: res.insertId, ...newDefinition });
    result(null, { id: res.insertId, ...newDefinition });
  });
};


module.exports = Definition;