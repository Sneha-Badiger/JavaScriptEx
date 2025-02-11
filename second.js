let number = 10;
if (number > 5) {
    console.log("Number is greater than 5");
}

function greet(name) {
    return "Hello, " + name;
}

console.log(greet("Alisha"));

function add(x, y) {
    return x + y;
}
let result = add(5, 3); // result will be 8

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // Exits the loop when i equals 5
    }
   // console.log(i);
   console.log(i*2);
}

// JavaScript program to illustrate If statement
let i = 20;

if (i > 15) console.log("10 is less than 15");

// This statement will be executed
// as if considers one statement by default
else
console.log("I am Not in if");

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName); // Output: Wednesday

for (let i = 1; i < 6; i++) {
    if (i == 4) break;
    console.log(i);
}