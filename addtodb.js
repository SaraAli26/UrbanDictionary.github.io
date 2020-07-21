const axios = require("axios");

module.exports = {
    add: (word , def , auth, up , down) => axios(
        {
            method: 'post',
            url: 'localhost:3000/Definitions',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : {
            "word":word,
            "definition": def,
            "author":auth,
            "thumbsUp":up,
            "thumbsDown":down
        }
          }
    )
        .then(function (response) {
    // console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
  console.log(error);
})
}
