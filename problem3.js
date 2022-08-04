// 3) Challenging: Write a function called make_avg() which will take an array of integers and
// the size of that array and return the average of those values.


function make_array_avg(array, arrayLength){
    var sum =0;
    for(var numbers of array){
        sum += numbers;
    }
    var average = sum / arrayLength;
    return average;
}
var array =[ 1, 5, 15, 25, 100]
var getAverage = make_array_avg(array, array.length);
console.log(getAverage);