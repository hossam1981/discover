function shopAmazon(selectedItem, haveKindle, callback) {
    // if (!selectedItem === "ebook" && haveKindle === false) {  // or
        if (!selectedItem === "ebook" && !haveKindle) { // !haveindle means is not
        callback("you need to have a kandle");         // condition 1
                        
    } else {                                         // condition 2
        // setTimeout(function () {
            callback('thank you for buying ${selectedItem} from Amazon')      
        // }, 1000)
    }
}
// shopAmazon("ebook", false, function(message){
//     console.log(message);
// }) 
//-----------------------or----Use-Es6 -----
shopAmazon("ebook", true, message=> console.log(message))