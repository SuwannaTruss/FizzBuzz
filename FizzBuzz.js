/* // Part 1: 
console.log("Hello World\n"); */

/* //Part 2:
[...Array(100)].forEach((_,i) =>console.log(i+1));
console.log("\n"); */

// Part 3: print “Fizz“ whenever the number is a multiple of 3
for(let i=1; i<101; i++) {
    let result;
    if (i%3 === 0) {
        result = "Fizz";
    } else {
        result = i;
    }
    console.log(result);
}
