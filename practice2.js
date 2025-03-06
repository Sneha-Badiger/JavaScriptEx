// function isGreater(arr) {
//     for(i=0; i<arr[i].length; i++) {
//         if(arr[i] > )
//     }
// }

function swap(a, b) {
    [a, b] = [b, a];
    return [a, b];
}
console.log(swap(3, 5)); // Output: [5, 3]

//1-> Reverse Array
function reverseArr(arr){
    console.log("original array: " + arr);
    console.log("reversed array: " + arr.reverse());
}
reverseArr([1,2,3,4,5]);

//2-> Find the Maximum and Minimum in an Array
function maxMin(arr) {
    console.log("Maximum num: " + Math.max(...arr));
    console.log("Minimum num: " + Math.min(...arr));
}
maxMin([3, 0, 7, 2, 9, 4]);

//3-> Find the Sum of All Elements in an Array
function sumNum(arr) {
    let sum = 0;
    for(i=0; i<arr.length; i++){
        sum += arr[i];
    }
    console.log("Sum of Array is: "+ sum);
}
sumNum([3, 5, 7, 9]);

//4->Find the Index of an Element in an Array
function indexArr(arr){
        const num = 2;
        return arr.indexOf(num) + 1;
}
console.log(indexArr([2,4,5,8,9]));

//5->Reverse a String
function reverseStr(str){
    return str.split("").reverse().join("");
}
console.log(reverseStr("Hello"));

//6->palindrome
function reverseStr1(str){
    let reversed = str.split("").reverse().join(""); 
    return str == reversed;
}
console.log(reverseStr1("madam"));

//7->Count the Number of Vowels in a String
function isVowel(char) {
    return "aeiouAEIOU".includes(char);
}

console.log(isVowel("b")); // Output: true

//8->Title Case
function toTitleCase(str) {
    return str.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
console.log(toTitleCase("hello world sneha")); // Output: "Hello World"

//9->  merge array
function mergeSortedArrays(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}
console.log(mergeSortedArrays([1, 2, 3, 5], [2, 3, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]

//10-> Find the First Non-Repeating Character in a String
function nonRepeat(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
    return null;
}
console.log(nonRepeat("aabbccdee"));

function sub(a,b) {
let total = a-b;
console.log("sub of : "+total);
}
sub(9,6);

