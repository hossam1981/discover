function refillDrink(drinkType, hasIce, callback) {
    if (drinkType == "lemonade" && !hasIce) {
        setTimeout(function () {                    
            return callback('No ice on your drink!');
        }, 500);
    } else if (drinkType == null) {
        callback("what kind of drink you want");
    } else {
        setTimeout(function () {
            callback("you drink is important 4 us")
        }, 500);
    }
}
      //--------------------------
refillDrink("lemonade", false, function(message) {  
    console.log(message);                  
                                        
}) 
