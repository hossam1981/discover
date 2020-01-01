
// we parse the strings to num
var num1 = parseInt(process.argv[3]);
var num2 = parseInt(process.argv[4]);
// set ops as var so to check either add or sub.
var ops = process.argv[2];

// create a func to marke the opration of adding.
var add = function(input1, input2){
console.log(input1 + input2);
}// create another function to marke the opration of sub
var sub = function(input1, input2){
  console.log(input1 - input2);
}
// the condition to check if var ops is = to +
if(ops == "+"){
  add(num1,num2);// we calling the func add() for the var we need to add
}else{
  sub(num1,num2);
}
