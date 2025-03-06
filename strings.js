const str1 = new String("Sneha");
const str2 = "Sneha";
console.log(str1 == str2);

// Define a string variable 
let A = 'SnehaBadiger';
// Use the slice() method to extract a substring
let b = A.slice(0, 5);
let c = A.slice(6, 9);
let d = A.slice(10);
// Output the value of variable
console.log(b);
console.log(c);
console.log(d);

// Define a string variable
let str = "Mind, Power, Soul";
// Use the substring() method to extract a substring 
let part = str.substring(6, 11);
// Output the value of variable
console.log(part);
// Use the replace() method to replace the substring
part = str.replace("Power", "Space");
// Output the resulting string after replacement
console.log(part);
// Use the replaceAll() method to replace all occurrences
//of "Power" with "Space" in the string 'str'
part = str.replaceAll("Power", "Space");
// Output the resulting string after replacement
console.log(part);

// Define a string variable
let gfg = 'AKKu ';
// Define another string variable 
let geeks = 'akku-aks';
// Convert the string 'geeks' to uppercase using the toUpperCase() method
console.log(gfg.toUpperCase());
console.log(gfg.toLowerCase());
console.log(gfg.concat(geeks));
// Storing new object of string
// with removed white spaces
let newGfg = gfg.trim();
// Old length
console.log(gfg.length);
// New length
console.log(newGfg.length)

// Define a string variable 
let str3 = "  Soul  ";
// Output the original value of the string 
console.log(str3);
// Use the trimStart() method to remove leading whitespace from the string 'str'
let part1 = str3.trimStart();
// Output the resulting string after removing leading whitespace
console.log(part1);
let part2 = str3.trimEnd();
// Output the resulting string after removing leading whitespace
console.log(part2);

// Date Object having date and time
const currentDate = new Date()
// date object's string value
const currentDate_String = currentDate.toString()
console.log("Date Object's String Value: " + currentDate_String)


let kim = "Kim";   // Step 1
kim.age = 88;      // Step 2
console.log(kim.age); // Step 3
//kim is a string, which is a primitive value in JavaScript.
//Primitive values (like strings, numbers, and booleans) are NOT objects.
//Here, we're trying to attach a property (age = 88) to the string "Kim".
//But strings (and other primitive values) can't store properties!


