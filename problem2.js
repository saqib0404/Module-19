// Write a function called make_avg() which will take an three integers and return the
// average of those values.

function make_avg( num1, num2, num3){
    var sum = num1 + num2 + num3;
    var average = sum / 3;
    return average;
}

var getAverage = make_avg(10, 20, 30);
console.log(getAverage);