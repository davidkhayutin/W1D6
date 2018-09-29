var http = require('https');


var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};

var callback = function(response){
  console.log('In response handler callback!');

  response.on('data', function(chunk){
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + '--]')
    console.log(chunk.toString());
  });
}

console.log("Im about to make the request");

http.request(options, callback).end();


console.log("I've made the request!");