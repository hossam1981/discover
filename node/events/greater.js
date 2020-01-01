const EventEmitter = require('events')
const myEmitter = new EventEmitter();

function guest1(x) {
   if(x.age < 18) {
       console.log(x.name + ", you a such a good young man.");
    }
}
function guest2(z){
if(z.age > 18) {
    console.log(z.name + ", you are welcome .");
 }
}
myEmitter.on("greating", guest1);
myEmitter.on("greating", guest2);
myEmitter.emit("greating", {name: "mike", age: 23});
myEmitter.emit("greating", {name: "Luke", age: 17});
myEmitter.emit("greating", {name: "joe", age: 42});