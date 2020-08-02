require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

function outputToJSON(json, path) {
    const data = JSON.stringify(json);
    fs.writeFile(path, data, 'utf-8', err => {
        if (err) {
            console.log(err);
        }
        console.log('The file is saved!');
    });
}

(async () => {
    console.log('Fetching emoji lists...!');
    axios.get(`https://emoji-api.com/emojis?access_key=${process.env.EMOJI_API}`)
        .then((res) => {
            return res.data;
        }).then(data => outputToJSON(data, 'emoji.json'))
})();