/* // Part 1: 
console.log("Hello World\n"); */

/* //Part 2:
[...Array(100)].forEach((_,i) =>console.log(i+1));
console.log("\n"); */

/* // Part 3: print "Fizz" whenever the number is a multiple of 3
for(let i=1; i<101; i++) {
    let result;
    if (i%3 === 0) {
        result = "Fizz";
    } else {
        result = i;
    }
    console.log(result);
} */
// const result = [...Array(100)].map((_,i) => ((i+1)%3 === 0) ? "Fizz" : (i+1));
// console.log(result);


/* //Part 4: add rule - print “Buzz” whenever the number is a multiple of 5
for(let i=1; i<101; i++) {
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
} */

const result = [...Array(100)].map((_,i) => (((i+1)%3 === 0) && ((i+1)%5 === 0)) ? "FizzBuzz" 
    : ((i+1)%3 === 0) ? "Fizz" 
    : ((i+1)%5 === 0) ? "Buzz" 
    :(i+1));
console.log(result);

