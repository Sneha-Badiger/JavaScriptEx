for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // Exits the loop when i equals 5
    }
   // console.log(i);
   console.log(i*5);
}


let randomNum = Math.floor(Math.random() * 10) + 1;
console.log("Random number: " + randomNum);
// It shows in alert
// let num1 = parseFloat(prompt("Enter first number:"));
// let num2 = parseFloat(prompt("Enter second number:"));
// let sum = num1 + num2;
// alert("The sum is: " + sum);

// let year = parseInt(prompt("Enter a year:"));

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.log(year + " is a leap year.");
// } else {
//     console.log(year + " is not a leap year.");
// }

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}

// push() method
let Anima = ["Tiger", "Giraffe", "Horse", "Deer"];
Anima.push("Zebra");
console.log(Anima);

// pop() method
let Animals = ["Tiger", "Giraffe", "Horse", "Deer"];
Animals.pop();
console.log(Animals);

// shift() method
let Animal = ["Tiger", "Giraffe", "Horse", "Deer"];
Animal.shift();
console.log(Animal);


