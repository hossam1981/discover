const EventEmitter = require('events'); // 
const myEmitter = new EventEmitter(); //constracter use it to creat objet


// myEmitter.on('sometrigger', function(x){
//     console.log("Hey! I heard the trigger " +  x.name);
// });
// myEmitter.emit('sometrigger', {name:'MalakAmar'});

function jubilee(x){
    console.log("buy me lunch for $" + x.money + " of " + x.food);
}
myEmitter.on('buy Food' , jubilee);
// myEmitter.once('buy Food' , jubilee);  //this listen once for the frist one onle
myEmitter.emit('buy Food', {money:10, food: 'sandwich'});
myEmitter.emit('buy Food', {money:20, food: 'apple'});
myEmitter.emit('buy Food', {money:30, food: 'orange'});
// myEmitter.emit('buy Food', {money:20});
// myEmitter.on('buy drink' , jubilee);
// myEmitter.emit('buy drink', {money:20});