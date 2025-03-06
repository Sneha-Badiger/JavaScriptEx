 //Square of numbers
 function square(a) {
    return a*a;
 }
 console.log(square());

//write a 5 names in array

a= ["pen","pencil","cat","dog","tiger"];
function fun(name) {
    if(a.indexOf(name) == -1) {
        return "not found";
    }
    else {
        return a.indexOf(name) +1;
    }
}
console.log(fun("chill"));
console.log(fun("dog"));
console.log(fun("bye"));

let c="Sneha Badiger"
console.log(c.length);
console.log(c.split(" ")[0]);

const currentDate = new Date()
//date object's string value
const currentDate_String = currentDate.toString()
console.log("Date Object's String Value: " + currentDate_String)

//today date convert it into dd/mm/yyyy
const today = new Date();
const day = today.getDate();
const month = today.getMonth()+1;
const year = today.getFullYear();
//const formattedDate = `${day}/${month}/${year}`;
//console.log(formattedDate);
console.log(`${day}/${month}/${year}`);
//using function
function getFormattedDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
}
console.log("Present date: "+getFormattedDate()); // Example output: 14/02/2025

//add
function sumOfTwoNumbers(a, b) { 
    return a + b; 
} 
console.log(sumOfTwoNumbers(2,4));

//even
function isEven(num) {
    if(num % 2){
        return "number is even"
    }
    else {
        return "number is odd"
    }
}
console.log(isEven(5));

//positive number
function isPositive(arr) {
    let positives = [];
    let negatives = [];
    for (let i=0; i<arr.length; i++) {
    if(arr[i] > 0) {
        positives.push(arr[i]);
    } else {
        negatives.push(arr[i]);
    }
}
console.log("Positive Numbers: ", positives.join(", "));
console.log("Negative Numbers: ", negatives.join(", "));
}
isPositive([1,2,-1,6]);

//reverse a string using function
function reverse(str) {
    return str.split("").reverse().join("");
}
console.log(reverse("hello"));

//palindrome
function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}
console.log(isPalindrome("gadag")); // Output: true
console.log(isPalindrome("hello")); // Output: false

//maximum value
function findMax(arr) {
    return Math.min(...arr);
}
console.log(findMax([10, 20, 50, 30])); // Output: 50

//remove duplicates
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]

//sum of array
function sumArr(arr) {
    let sum = 0;
    for(i=0; i<arr.length ;i++){
        sum += arr[i];
    }
    return sum;
}
console.log(sumArr([1,2,3,4]));
