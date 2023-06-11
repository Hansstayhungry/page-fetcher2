const request = require('request');
const fs = require('fs');

const args = process.argv;
const url = args[2];
const path = args[3];

const downloader = function(url, path) {
  request(url, (error, response, body) => {
    if (error) {
      console.log('error: ', error);
    } else {
      fs.writeFile(path, body, err => {
        if (err) {
          console.error('Error writing files: ', err);
        } else {
          console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ./index.html`);
        }
      })
    }
  })
};

downloader(url, path);