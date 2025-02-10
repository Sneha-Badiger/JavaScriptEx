function sum(x, y) { 
    return x + y; 
}
console.log(sum(6, 9));

// Function Definition
function welcomeMsg(name) {
    return ("Hello " + name + " welcome to Javascript course");
}
let nameVal = "Sneha";
// calling the function
console.log(welcomeMsg(nameVal));

// Using Arrow Functions
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
const a2 = a.map(function (s) {
    return s.length;
});
console.log("Normal way ", a2);
const a3 = a.map((s) => s.length);
console.log("Using Arrow Function ", a3);

//callback function
function num(n, callback) {
    return callback(n);
}
const double = (n) => n * 2;
console.log(num(5, double));
// num is a higher-order function because it takes another function (callback) as an argument.
// It accepts two parameters:
// n → A number.
// callback → A function that processes n.
// It calls the callback function and passes n to it.
// Finally, it returns the result of calling callback(n).
//double is an arrow function that takes n and returns n * 2, effectively doubling the input.
//num(5, double) calls num, passing:
// 5 as the value of n
// double as the callback function
// Inside num, callback(n) is executed,

//Anonymous Functions
setTimeout(function () {
    console.log("Anonymous function executed!");
}, 1000);

let add1 = function (a, b) {
    return a + b;
}
console.log(add1(15, 4));

//Nested functions
function outerFun(a) {
    function innerFun(b) {
        return a + b;
    }
    return innerFun;
}
const addTen = outerFun(20);
console.log(addTen(5));

//ex-2
function msg(firstName) {
    function hey() {
        console.log("Hey " + firstName);
    }
    return hey();
}
msg("Ak");

//pure function
function pureAdd(a, b) {
    return a + b;
}
console.log(pureAdd(2, 3));

//Named function
function add(a, b) {
    return a + b;
}
console.log(add(5, 4));

//JavaScript Function Call Examples
// function that returns product of two numbers 
function product(a, b) {
    return a * b;
}
// Calling product() function
let result = product.call(this, 20, 5);

console.log(result);

//ex-2
let employee = {
    details: function (designation, experience) {
        return this.name
            + " "
            + this.id
            + designation
            + experience;
    }
}

// Objects declaration
let emp1 = {
    name: "A",
    id: "123",
}
let emp2 = {
    name: "B",
    id: "456",
}
let x = employee.details.call(emp2, " Manager ", "4 years");
console.log(x);