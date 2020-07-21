const axios = require("axios");

module.exports = {
    getMeanings: (word) => axios({
    "method":"GET",
    "url":"https://mashape-community-urban-dictionary.p.rapidapi.com/define",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"mashape-community-urban-dictionary.p.rapidapi.com",
    "x-rapidapi-key":"ab1ba4284bmsh0e8ddbcf337ee15p1206dbjsn13f7409a5fec",
    "useQueryString":true
    },"params":{
    "term": word
    }
    })    
}
    