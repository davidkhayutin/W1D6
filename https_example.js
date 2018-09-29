var http = require('https');


var options = {
  host: 'www.example.org',
  path: '/'
};

var callback = function(){
  console.log('In response handler callback!');
}

console.log("Im about to make the request");

http.request(options, callback).end();


console.log("I've made the request!");