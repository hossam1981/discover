//steps..
// write a fuction that will determine whether the elevator should be going up or down.
// emits trigger for function before
// make a finction 4 the elevator go up or down

const EventEmitter = require('events')
const myEmitter = new EventEmitter();
let currFloor = 0;

// i need one var to set it to which direction 
// var direction = 'up'; i comment it do make different.

// 1- people data
var data = [{ name: 'Jerry', destination: 4 }, { name: 'Kramer', destination: 10 },{ name: 'Newman', destination: 2 }];

// 2- elevator moves up 1 func
myEmitter.on('up',function(){

    console.log('going up!');
    currFloor++;
});
//3-  elevator moves down 1 func
myEmitter.on('down',function(){
    console.log('going down?');
    currFloor--;
});

//  if (currFloor == 2) {
//       console.log('Newman\'s\ floor get out plz ')
//  }else if(currFloor == 4) {
//        console.log('Jerry\'s\ floor get out plz ')
//  }else if(currFloor == 10){
//     console.log('Kramer\'s\ floor get out plz ')
//  }

setInterval(function(){
    console.log(currFloor);

    if (currFloor === 0) {

        direction = 'up'

    } else if (currFloor == 2) {

        console.log('Newman\'s\ floor get out plz ')
        direction = 'down'
    
    } else if (currFloor == 4) {
        // console.log('Jerry\'s\ floor get out plz ')
        direction = 'up'
    }


// setInterval(function(){
//     console.log(currFloor);

//     if (currFloor == 0) {

//         direction = 'up'

//     } else if (currFloor == 10) {

//         direction = 'down'
       
//     }
    myEmitter.emit(direction);

},2000);