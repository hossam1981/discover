function concertPass(age, haveTicket, callback) {
    if (!haveTicket) {
        callback("please buy a ticket"); // condition 1
    } else if (age < 18) {    //if is not equal to "911"
        callback("stop acting so grown"); // condition 2
    } else {
        // setTimeout(function () {
            callback("please enter and take a seat")          // condition 3
        // }, 1000)
    }
}      //-----------------this---------
// function gateCheck(message){
//     console.log(message)
// }
// concertPass(21, true, gateCheck);
    // 
//                 ------------------or----------
// concertPass(21, true, function(message){  
//     console.log(message); 
// })
// --------------------------------or----Use  Es6 -----
concertPass(21 , true, message => console.log(message));