import { triggerAsyncId } from 'async_hooks';

const EventEmitter = require('events')
const myEmitter = new EventEmitter();

let NumOfRing = 0;

function adding() {
    NumOfRing++;
    console.log(NumOfRing + " number of phone ring");
    if (NumOfRing == 3) {
        myEmitter.removeListener("ringing", adding); // trigger , function
    }
}

myEmitter.on("ringing", adding); //emitter.on(eventName, listener)
myEmitter.emit("ringing"); //trigger
myEmitter.emit("ringing"); //trigger
myEmitter.emit("ringing");  //trigger
myEmitter.emit("ringing");  
myEmitter.emit("ringing");