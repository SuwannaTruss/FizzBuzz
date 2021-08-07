/ for loop to increment through 
// ch eck if they are multiples of 3 and return fizz
// check if they are multiples of 5 and return buzz
// if they do both then return fizzbuzz
// use console.log to print to the console.

// console.log(test);
// test = 2;
// let test;
// console.log(test);

//var result = 1000;


for (let i=1; i<101; i++) {
    let result;
    if ((i%3 === 0) && (i%5 === 0)) {
        result = "FizzBuzz";
    } else if (i%3 === 0) {
        result = "Fizz";
    } else if (i%5 === 0) {
        result = "Buzz";
    } else {
        result = i;
    }
    console.log(result);
}