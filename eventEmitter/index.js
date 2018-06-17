// importing the events module

var events = require('events');

// creating the object where we put the emitter

var eventEmitter = new events.EventEmitter();

// creating an event handler

var connectHandler = function connected(){
  console.log('connection successful');
  eventEmitter.emit('data_received');
}
// bind the connection event with the handler

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_received', function(){
console.log('data received correctly')
} );

eventEmitter.emit('connection');

console.log("program Ended.")

// example 2 

var listner1 = function listner1(){
	console.log('listner1 executed');
}
var listner2 = function listner1(){
	console.log('listner2 executed');
}
// add a listener with the addListner method
eventEmitter.addListener('connection', listner1);
// add a listener with the on method
eventEmitter.on('connection',listner2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');

console.log(eventListeners + " Listner(s) listening to connection event");

eventEmitter.emit("connection");

//remove a binding
eventEmitter.removeListener('connection', listner1);
console.log("listner1 is not listen now")

//fire the connection event again
eventEmitter.emit("connection");


eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + "Listner(s) listening to connection event");

console.log("Program Ended");
