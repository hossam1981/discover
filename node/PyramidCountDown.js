let countUp = 11;
function showIncreasingStr(str) {
    countUp--;
    return str.repeat(countUp); // sting repeat method
}

var startUp = setInterval(function () {
    console.log(showIncreasingStr("*"));
}, 1000);

// << to stop the increase of the count up 10000 = 10 times repeat

setTimeout(function () {
    clearInterval(startUp);
}, 10000);

// console.log("*") not