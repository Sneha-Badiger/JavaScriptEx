console.log(typeof 4.5)
console.log(typeof "x")

console.log(- (10 - 2))

console.log(3 > 2)
console.log(3 < 2)

console.log("Garnet" != "Ruby")
console.log("Pearl" == "Amethyst")

//NaN (Not-a-Number) is a special value in JavaScript that represents an invalid or unrepresentable number.
console.log(NaN == NaN) //false
//JavaScript treats every NaN as a unique, invalid value. The language follows a rule: 
//NaN is not equal to anything, even itself.So when you compare NaN == NaN, 
//JavaScript says "I don't know what these NaNs are, they might be different," and returns false.
console.log(isNaN(NaN));  // true bcs it is not a number
console.log(isNaN("hello"));  // true (Not ideal because "hello" is not a number)


console.log(true && false)
console.log(true && true)

console.log(false || true)
console.log(false || false)

console.log(true ? 1 : 2);//1
//condition is true since true is truthy, it chooses first value.
console.log(false ? 1 : 2);//2
console.log(5 > 3 ? "Yes" : "No");//yes
console.log(10 === 20 ? "Equal" : "Not Equal"); //not equal

console.log(8 * null)
console.log("5" - 1)
console.log("5" + 1)
console.log("five" * 2)//NaN
//JavaScript tries to convert the string "five" into a number.Since "five" is not a valid number,
//the conversion fails.When JavaScript fails to convert something into a number, it returns NaN (Not-a-Number).
console.log(false == 0)

console.log(null == undefined);//true

console.log(null || "user")//null is falsy and JS ignores it moves to user which is truthy
console.log("Agnes" || "user")//agnes

console.log(0 || 100);//100
console.log(0 ?? 100);//0 it only chcks for null or undefined, not falsy values like 0,since 0 is not null
console.log(null ?? 100);// 100

let ten = 10;
console.log(ten * ten);

let mood = "light";
console.log(mood);
mood = "dark";
console.log(mood);

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);

let one = 1, two = 2;
console.log(one + two);

//using var
var y = 10;
var y = 20; // No error, but not recommended
console.log("y= "+y); // 20

let x = 30;
console.log("the value of x is", x);

//using const
const PI = 3.14159;
console.log(PI); // 3.14159
//PI = 3.14; // Error: Assignment to constant variable
//const using objects
const person = { name: "Alice", age: 25 };
person.age = 26;  // Allowed: modifying properties
console.log(person.age); // 26
//const with arrays
const numbers = [1, 2, 3];
numbers.push(4);  // Allowed
console.log(numbers);



console.log(Math.max(2, 4));//4

//prompt("Enter passcode");

console.log(Math.min(2, 4) + 100); //102

//control flow

// let theNumber = Number(prompt("Pick a number"));
// console.log("Your number is the square root of " +
//         theNumber * theNumber); 

// let number = Number(prompt("Pick a number"));
//     if (!Number.isNaN(number)) {
//         console.log("Your number is the square root of " +
//             number * number);
//         }
//number = Number("5") → 5
//Number.isNaN(5), since 5 is a valid number (not NaN), it returns false.
//!Number.isNaN(5) → true, so the if condition runs.
//Logs: "Your number is the square root of 25".

//while loop
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}

//for loop
for (let number = 0; number <= 12; number = number + 3) {
    console.log(number);
  }

//
for (let current = 20 ; ; current = current + 1) {
    if (current % 7 == 0) {
      console.log(current);
      break;
    }
  }

//switch statement
//   switch (prompt("What is the weather like?")) {
//     case "rainy":
//       console.log("Remember to bring an umbrella.");
//       break;
//     case "sunny":
//       console.log("Dress lightly.");
//       break;
//     case "cloudy":
//       console.log("Go outside.");
//       break;
//     default:
//       console.log("Unknown weather type!");
//       break; 
//   }

//# ex
let triangle = "";
for (let i = 1; i <= 7; i++) {
  triangle += "#";
  console.log(triangle);
}

