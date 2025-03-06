function fun(user) {
  return `Hello ${user}`
}
let user = "Sneha"
console.log(fun(user));

//convert object to array
function objToArr(ob) {
return Object.entries(ob);//Inside the function, we use the built-in Object.entries()
//method to convert the object into an array of its key-value pairs.
}
console.log(objToArr({ a: 1, b: 2, c: 3 }));

//merge two objects
function objMerge(ob1, ob2){
  return {...ob1,...ob2};
}
console.log(objMerge({d:4,c:5}, {b:3,a:2}));

//create an Object and Print All Keys
function printKeys(ob) {
  return Object.values(ob);
}
console.log(printKeys({name: "Alice", age: 25, city: "New York" }));

function pkey(ob) {
console.log("Print all keys: " + Object.keys(ob));
console.log("checking empty: "+ Object.keys(ob).length===0);//check null
}
pkey({name: "Alice", age: 25, city: "New York"});

function sum(c,d){
  return c+d;
}
console.log(sum(2,4));

function rev(arr) {
  return arr.reverse();
}
console.log(rev([1,2,3,4,5]));

function reverseStr(str){
  return str.split("").reverse().join("");
}
console.log(reverseStr("Hello"));


//In Javascript write a function that will remove the matching double auctes (")
//  or single quotes at the beginning and end of a string if they are present. For example if the string
//'stringl' is passed in, it will return stringl, if stringi is passed in, it returns
//'stringi (quote not removed).

// function removeQuote(str) {
//   const firstChar = str[0];
//   const lastChar = str.length-1;
//   if ((firstChar == '"' && lastChar == '"') || (firstChar == "'" && lastChar == "'")) {
//     return str.slice(1, -1);
//   }
// return str;
// }
// console.log(removeQuote("'stringl'"));
// console.log(removeQuote('"stringl"'));

function removeQuotes(str) {
  if ((str.startsWith('"') && str.endsWith('"')) || (str.startsWith("'") && str.endsWith("'"))) {
    return str.slice(1, -1);
  }
  return str;
}
console.log(removeQuotes("'stringl'")); // Output: stringl
console.log(removeQuotes('"stringl"')); // Output: stringl
console.log(removeQuotes("'stringi"));   // Output: 'stringl


















