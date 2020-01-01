const EventEmitter = require('events')
const myEmitter = new EventEmitter();
let currFloor = 0;
// i need one var to set it to which direction 
var direction = 'up';

// people data
var data = [{ name: 'Jerry', destination: 4 }, { name: 'Kramer', destination: 10 },{ name: 'Newman', destination: 2 }];

// elevator moves up 1
myEmitter.on('up',function(){
    console.log('going up!');
    currFloor++;
});

// elevator moves down 1
myEmitter.on('down',function(){
    console.log('going down?');
    currFloor--;
});

// write a fuction that will determine whether the elevator should be going up or down.
// make a finction 4 the elevator go up or down
// emits trigger for function before

setInterval(function(){
    console.log(currFloor);
    if (currFloor == 0) {

        direction = 'up'

    } else if (currFloor == 10) {

        direction = 'down'

    }
    myEmitter.emit(direction);


},1000);

// myEmitter.on('elevator',function(){
//     if (currFloor == (data[2].destination)){
//         console.log('u at ur desination mr.' +''+ (data[2].name));   
//     }

//   if (currFloor == (data[2].destination)){
// // let currFloor
// //   }}