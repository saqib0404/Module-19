// function add(num1, num2){
//     console.log(num1 ,num2);
//     var sum = num1 + num2;
//     return sum
// }
// var total = add(10,20);
// console.log(total);

// function shingara(money){
//     console.log("money given:", money);
//     var shingaraPrice = 10;
//     var shingara = money / shingaraPrice;
//     shingara = parseInt(shingara);
//     var moneyReturn = money % shingaraPrice;
//     console.log("Money returned:", moneyReturn);
//     return shingara
// }
// var shingaraGot = shingara(155);
// console.log("shingara given:", shingaraGot)

// function average(assignment1, assignment2, assignment3){
//     var sum = assignment1 + assignment2 + assignment3;
//     var average = sum / 3;
//     return average
// }
// var marks = average(60, 56, 60);
// marks = marks.toFixed(2);
// marks = parseFloat(marks)
// console.log(marks);

function add (num1, num2){
    var total =num1+ num2;
    return total;
}

var sum1 = add(10, 5);
var sum2 = add(15, 10);
var sumTotal = add(sum1 ,sum2);
console.log(sum1);
console.log(sum2);
console.log(sumTotal);