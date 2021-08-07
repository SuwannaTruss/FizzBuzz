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

/* // Refactor
const result = [...Array(100)].map((_,i) => ((i+1)%3 === 0) ? "Fizz" : (i+1));
console.log(result); */


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

/* // Refactor
const result = [...Array(100)].map((_,i) => (((i+1)%3 === 0) && ((i+1)%5 === 0)) ? "FizzBuzz" 
    : ((i+1)%3 === 0) ? "Fizz" 
    : ((i+1)%5 === 0) ? "Buzz" 
    :(i+1));
console.log(result);
 */

/* // Stretch Goal 1: If a number is a multiple of 7, print "Bang"
//                 For numbers which are multiples of seven and three / five, 
//                 append Bang to the previous result
for(let i=1; i<101; i++) {
    let result = "";
    if ((i%3 === 0) && (i%5 === 0)) {
        result = "FizzBuzz";
    } else if (i%3 === 0) {
        result = "Fizz";
    } else if (i%5 === 0) {
        result = "Buzz";
    } 
    if (i%7 === 0)  {
        result += "Bang";
    }
    if (result === "") {
        result = i;
    }  
    console.log(result);
}  */

/* // Stretch Goal 2: If a number is a multiple of 11, print "Bong". 
//                 Only print "bong" evenif there are multiple factors for the number.
for(let i=1; i<101; i++) {
    let result = "";
    if ((i%3 === 0) && (i%5 === 0)) {
        result = "FizzBuzz";
    } else if (i%3 === 0) {
        result = "Fizz";
    } else if (i%5 === 0) {
        result = "Buzz";
    } 
    if (i%7 === 0)  {
        result += "Bang";
    }
    if (i%11 === 0)  {
        result = "Bong";
    }
    if (result === "") {
        result = i;
    }  
    console.log(result);
}  */

/* // Stretch Goal 3: If a number is a multiple of 13, print "Fezz". 
//                 For multiples of most other numbers, the Fezz goes immediately 
//                 in front of the first thing beginning with B, or at the end if 
//                 there are none. 
for(let i=1; i<201; i++) {
    let result = "";
    if (i%3 === 0) result = "Fizz";
    if (i%13 === 0) result += "Fezz";
    if (i%5 === 0) result += "Buzz";
    if (i%7 === 0) result += "Bang";
    if (i%11 === 0) result = "Bong";
    if ((i%11 === 0) && (i%13 === 0)) result = "FezzBong";
    if (result === "") result = i;

    console.log(result);
}  */

// Stretch Goal 4: If a number is a multiple of 17, reverse the order 
//                 in which any fizzes, buzzes, bangs etc. are printed. 
for(let i=1; i<301; i++) {
    let result = [];
    if ((i%3 === 0) && (i%11 !== 0)) result.push("Fizz");
    if (i%13 === 0) result.push("Fezz");
    if (i%11 === 0) result.push("Bong");
    if ((i%11 !== 0) && (i%5 === 0)) result.push("Buzz");
    if ((i%11 !== 0) && (i%7 === 0)) result.push("Bang");
    if (i%17 === 0) result.reverse();
    if (result.length === 0) result.push(i);

    console.log(result.join(""));
} 