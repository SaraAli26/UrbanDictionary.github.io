const express = require("express");
const bodyParser = require("body-parser");
var path = require("path");
const app = express();
const DictionaryAPI = require("./dictionary");
const AddToDBAPI = require("./addtodb");

    // parse requests of content-type: application/json
    app.use(bodyParser.json());

    // parse requests of content-type: application/x-www-form-urlencoded //you can retrieve data from ajax 
    app.use(bodyParser.urlencoded({ extended: true }));
    

    //Route for Main Page of TheProject
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname + '/index.html'));
    });

    //Route For About Route
  app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname + '/about.html'));
  });

  //Route To implement the Search, Recives Srting form the user and then send back the results after being recived ftom the API.
  app.post('/searchstring', async (req, res) => {    
    const y = req.body.h.toString();
    const result = await DictionaryAPI.getMeanings(y);

    //My Faild try To insert the results into the DB
    var t = result.data.list;
    for(var i = 0; i < t.length ; i++){
    AddToDBAPI.add(t[i].word, t[i].definition, t[i].author, t[i].thumbs_up, t[i].thumbs_down);
    }
    
     res.json(result.data.list);
    
  });


app.use(express.static(__dirname + '/CSS'));
require("./routes/definition.routes.js")(app);


// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});