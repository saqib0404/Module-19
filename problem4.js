/*
 4) Write a function called odd_even() which takes an integer value and tells whether this
value is even or odd. You need to do it in 4 ways:
● Has return + Has parameter
● No return + Has parameter
 */
function odd_even(num){
    if(num <= 0 ){
        console.log("unnatural number")
    }
    else if(num % 2 == 1){
        console.log("Odd number")
    }
    else{
        console.log("even number")
    }
}
odd_even(1);