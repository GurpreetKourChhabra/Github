var date = require('./date');
var http = require("http");
var url = require('url');
var fs = require('fs');

var events = require('events');
var eventEmitter = new events.EventEmitter();

// console.log(typeof(eventEmitter));

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');

http.createServer(function(request , response) {
    var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);
console.log(q);
}).listen(8080);
