const prompt = require('prompt-sync')();
 
const max = prompt('Input the maximum number: ');
console.log("Please type 'yes' if you would like to apply these rules.\n");
const ruleThree = prompt("Print 'Fizz' whenever the number is a multiple of 3: ");
const ruleFive = prompt("Print 'Buzz' whenever the number is a multiple of 5: ");
const ruleSeven = prompt("Print 'Bang' whenever the number is a multiple of 7: ");
const ruleEleven = prompt("Print 'Bong' whenever the number is a multiple of 11: ");
const ruleThirteen = prompt("Print 'Fezz' whenever the number is a multiple of 13: ");
const ruleSeventeen = prompt("Print the reverse order whnever the number is a multiple of 17: ");

for(let i=1; i<=max; i++) {
        let result = [];
        if ((i%3 === 0) && (ruleThree === "yes")) result.push("Fizz");
        if ((i%13 === 0) && (ruleThirteen ==="yes")) result.push("Fezz");
        if ((i%11 === 0) && (ruleEleven === "yes")) result.push("Bong");
        if ((i%5 === 0) && (ruleFive === "yes")) result.push("Buzz");
        if ((i%7 === 0) && (ruleSeven === "yes")) result.push("Bang");
        if ((i%11 === 0) && (i%13 !== 0) && (ruleEleven === "yes") && (ruleThirteen === "yes")) result = ["Bong"];
        if ((i%17 === 0) && (ruleSeventeen === "yes")) result.reverse();
        if (result.length === 0) result.push(i);
    
        console.log(result.join(""));
    } 