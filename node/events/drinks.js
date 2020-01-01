const EventEmitter = require('events')
const myEmitter = new EventEmitter();

function drinks(x) {
    if (x.age < 21) {
        console.log(x.name + ", you will get orange juice.");
    } else {
        console.log(x.name + ", we will serve you a beer.");
    }
}

myEmitter.on("serveDrink", drinks);
myEmitter.emit("serveDrink", {
    name: "jane",
    age: 23
});
myEmitter.emit("serveDrink", {
    name: "Luke",
    age: 17
});
myEmitter.emit("serveDrink", {
    name: "Matt",
    age: 32
});