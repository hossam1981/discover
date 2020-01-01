function makeCall(contactInfo, isPhoneCharged, callback) {
    if (!isPhoneCharged) {
        callback("you need to charge your phone"); // condition 1
    } else if (contactInfo !== '911') {    //if is not equal to "911"
        callback("you need the emergency number"); // condition 2
    } else {
        setTimeout(function () {
            callback("call 911...")          // condition 3
        }, 1000)
    }
}      //--------------------------
makeCall("911", true, function(message) {   // function (message) = callback finction
    console.log(message);                  // true  = isPhoneCharged
                                         // "911" = contactInfo
})     //-------or    -----

// function calling(message){    // here the function has a name
//     console.log(message); 
// }
// makeCall("911", true, calling); 
