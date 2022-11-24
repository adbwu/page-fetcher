const request = require('request');
request('http://www.example.edu/', (error, response, body) => {

  const fs = require('fs');

const content = body;

fs.writeFile('./pagesFetched/example.txt', content, err => {
  if (error) {
    console.error(error);
  }
  // file written successfully
});
});

const fs = require('fs');

const content = 'Some content!';

const name = 

fs.writeFile('/Users/joe/test.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});