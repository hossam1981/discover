import Prescription from './prescription'

let rx = new Prescription('amoxicillin',30);
console.log(rx.getDrug());


//run  node prescription-main on one terminal and 
// on main file babel-demo
//use another terminal and run this => ./node_modules/.bin/babel src -d lib --watch
