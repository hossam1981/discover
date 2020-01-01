const EventEmitter = require('events')
const myEmitter = new EventEmitter();

function guest(x) {
    if (x.age < 18) {
        console.log(x.name + ", you a such a good young man.");
    } else {
        console.log(x.name + ", you are welcome.");
    }
}

myEmitter.on("greating", guest);
myEmitter.emit("greating", {name: "mike", age: 23});
myEmitter.emit("greating", {name: "Luke", age: 17});
myEmitter.emit("greating", {name: "joe", age: 42});