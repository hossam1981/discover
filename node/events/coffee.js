const EventEmitter = require('events')
const myEmitter = new EventEmitter();
let packsOfSuger = 0;

function adding() {
    packsOfSuger++;
    console.log(packsOfSuger + " pack(s) of suger adding");
    if (packsOfSuger == 2) {
        myEmitter.removeListener("addSuger", adding);// // trigger(event) , function
    }
}

myEmitter.on("addSuger", adding); //emitter.on(eventName, listener)
myEmitter.emit("addSuger"); //trigger
myEmitter.emit("addSuger"); //trigger
myEmitter.emit("addSuger"); //trigger
