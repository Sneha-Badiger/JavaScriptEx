//In JavaScript, an array is a built-in data structure that allows you to store 
//and manipulate collections of values. Instead of using a string like "2 3 5 7 11",
//which would require extra steps to extract individual numbers, you can use an array
//to store numbers in a more structured and efficient way.
//Arrays in JavaScript can store different types of values, not just numbers,
//and they come with built-in methods for adding, removing, and manipulating data efficiently.


// Creating an Array and Initializing with Values
let b = [10, 20, 30];
console.log(b);

// Creating an Array and Initializing with Values
let a = ["HTML", "CSS", "JS"];

// Accessing First Array Elements
let fst = a[0];
console.log("First Item: ", fst);
// Accessing last Array Elements
let lst = a[a.length - 1];
console.log("First Item: ", lst);

// Creating an Array and Initializing with Values
// Add Element to the end of Array
a.push("Node.js");
// Add Element to the beginning
a.unshift("Web Development");
console.log(a);
// Removes and returns the last element
lst = a.pop();
console.log("After Removing the last: " + a);

// Removes and returns the first element
fst = a.shift();
console.log("After Removing the First: " + a);

// Removes 2 elements starting from index 1
a.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + a);
let len = a.length;
console.log("Array Length: " + len);


let c = ["HTML", "CSS", "JS"];
// Iterating through for loop
for (let i = 0; i < c.length; i++) {
    console.log(c[i])
}
// Iterating through forEach loop
c.forEach(function myfunc(x) {
    console.log(x);
});
// Concatenate both arrays
let concateArray = a.concat(c);
console.log("Concatenated Array: ", concateArray);
// Convert array ot String
console.log(c.toString());

let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);// → 5
console.log(listOfNumbers[0]);// → 2
console.log(listOfNumbers[2 - 1]);// → 3

function reverseArray(arr) {
    return arr.slice().reverse(); //arr.slice() creates a copy of the original array.
                                // This is important because we don’t want to change the original array.
}
let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray)); // → ["C", "B", "A"]
console.log(myArray); // → ["A", "B", "C"]
