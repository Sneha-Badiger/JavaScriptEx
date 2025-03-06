//Instead of writing the same code multiple times, 
//you can define a function once and call it whenever needed.

//Defining a function
const square = function(x) {
    return x * x;
  };
console.log(square(12)); // → 144

function calculateArea(width, height) {
    return width * height;
}
console.log(calculateArea(5, 10));//50
console.log(calculateArea(5, 15)); //75

//usin const
const makeNoise = function() {
    console.log("Pling!");
};
makeNoise();// → Pling!

const roundTo = function(n, step) {
    let remainder = n % step; // remainder = 23%10 => 3
    return n - remainder + (remainder < step / 2 ? 0 : step); //it checks 3<10/2 ? 0: 10); => so 3<5 true//0
}; // then it returns 23-3+0 => 20
console.log(roundTo(23, 10));// → 20

const halve = function(n) {
    return n / 2;
  };
console.log(halve(100)); //50

const hummus = function(factor) { // hummus function 
    const ingredient = function(amount, unit, name) { // ingradient is nested function n it takes 3 parameters
      let ingredientAmount = amount * factor; 
      if (ingredientAmount > 1) {
        unit += "s";
      }
      console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas"); //calling the ingradient function
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};
hummus(2);

//function declaration
//A function declaration is when you define a function using the function
//keyword with a name, but without assigning it to a variable.
function sum(x, y) { 
    return x + y; 
}
console.log(sum(6, 9));


//A function definition is the actual code that specifies what the function does. 
//Every function must have a definition, but it can be written in different forms, such as:
//Function Declaration ,Function Expression,and Arrow Function Expression

//Arrow function
const roundTo1 = (n, step) => {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
  };
console.log(roundTo1(27, 10));//

//The call stack
function greet(who) {
    console.log("Hello " + who);
}
greet("Harry");

//Optional Arguments
function squares(x) { return x * x; }
console.log(squares(4, true, "hedgehog"));

function minu(a, b) {
    if (b === undefined) return -a;
    else return a - b;
  }
console.log(minu(10));
//This function takes two parameters, a and b.It checks if b is undefined:
//If b is not provided, it returns -a.Otherwise, it returns the result of a - b.

//ex
function min(a, b) {
  return Math.min(a, b);
}
console.log(min(4,6));

//Properties
//Think of properties as pieces of information or functions that
//belong to a value (like a string, number, object, etc.).

let myString = "hello";
console.log(myString.length); // Output: 5

let myArray = [10, 20, 30, 40, 50];
console.log(myArray.length); // Output: 5

let numbers = [5, 1, 7];
console.log(Math.max(...numbers)); //7

