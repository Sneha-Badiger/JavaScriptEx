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


//Examples
// JavaScript Program Demonstrating Various Array Operations

// 1. Find the Largest Number in an Array
function findLargest(arr) {
    return Math.max(...arr);
}

// 2. Sum of All Elements in an Array
function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

// 3. Reverse an Array
function reverseArray(arr) {
    return arr.slice().reverse();
}

// 4. Filter Even Numbers from an Array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// 5. Sort an Array in Ascending Order
function sortArray(arr) {
    return arr.slice().sort((a, b) => a - b);
}

// 6. Remove Duplicates from an Array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// 7. Merge Two Arrays
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

// 8. Find an Element in an Array
function findElement(arr, element) {
    let index = arr.indexOf(element);
    return index !== -1 ? `Element found at index ${index}` : "Element not found";
}

// 9. Find the Second Largest Number in an Array
function secondLargest(arr) {
    let uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueSorted.length > 1 ? uniqueSorted[1] : "No second largest number";
}

// 10. Check if an Array is Empty
function isArrayEmpty(arr) {
    return arr.length === 0;
}

// Sample Array for Testing
let numbers = [10, 45, 78, 23, 89, 100, 67, 23, 45];

// Testing the functions
console.log("Largest Number:", findLargest(numbers));
console.log("Sum of Array Elements:", sumArray(numbers));
console.log("Reversed Array:", reverseArray(numbers));
console.log("Even Numbers:", filterEvenNumbers(numbers));
console.log("Sorted Array:", sortArray(numbers));
console.log("Array without Duplicates:", removeDuplicates(numbers));
console.log("Merged Array:", mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(findElement(numbers, 78));
console.log("Second Largest Number:", secondLargest(numbers));
console.log("Is Array Empty?", isArrayEmpty([]));
