//  A function that calls itself is called recursive. 
// Recursion allows some functions to be written in a different style
//These are useful to complete some mathematical calculations

function fact(n) {
if(n==1)
  return 1;
else
  return n * fact(n-1);
}
let result = fact(4);
console.log(result);  

//4 * factorial(3)
//4 * 3 * factorial(2)
//4 * 3 * 2 * factorial(1)
//4 * 3 * 2 * 1 = result

function power(base, exponent) {
  if (exponent === 0) return 1; // Base case
  return base * power(base, exponent - 1); // Recursive case
}

console.log(power(4, 1)); // 4* 4^1
