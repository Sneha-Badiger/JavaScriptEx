let a  =  156e5;
let b =   156e-5;
console.log(a);
console.log(b);

//Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
let a1 = 999999999999999;
let b1= 9999999999999999;
console.log(a1);
console.log(b1);

let c=2;
console.log("Math.LN10: " + Math.LN10);
console.log("Math.LOG2E: " + Math.LOG2E);
console.log("Math.Log10E: " + Math.LOG10E);
console.log("Math.SQRT2: " + Math.SQRT2);
console.log("Math.SQRT1_2: " + Math.SQRT1_2);
console.log("Math.LN2: " + Math.LN2);
console.log("Math.E: " + Math.E);
console.log("Math.PI: " + Math.PI);


console.log("Math.abs(-4.7): " + Math.abs(-4.7)); 
console.log("Math.ceil(4.4): " + Math.ceil(4.4)); 
console.log("Math.floor(4.7): " + Math.floor(4.7)); 
console.log("Math.sin(90 * Math.PI / 180): " +
        Math.sin(90 * Math.PI / 180)); 
console.log("Math.min(0, 150, 30, 20, -8, -200): " +
        Math.min(0, 150, 30, 20, -8, -200)); 
console.log("Math.random(): " + Math.random());

console.log("ceil :" + Math.ceil(9.6));
console.log("floor :" + Math.floor(9.6));
console.log("round :" + Math.round(9.6));
console.log("sine :" + Math.sin(30));
console.log("cosine :" + Math.cos(30));
console.log("min :" + Math.min(30, 40));
console.log("max :" + Math.max(30, 40));
console.log("sign :" + Math.sign(-40));
console.log("abs :" + Math.sign(-40));

// Return PI value(3.141592653589793) 
console.log(Math.PI);

//maps
const company = new Map();
company.set("name", "GFG");
company.set("no_of_employee", 200);
company.set("category", "education");
function print(key, values) {
    console.log(values + "=>" + key);
}
company.forEach(print);

//sets
// using an array
let s1 = new Set([10, 30, 30, 40, 40]);
console.log(s1);
let s2 = new Set(["gfg", "gfg", "geeks"]);
console.log(s2);
// using string
let s3 = new Set("fooooooood");
console.log(s3);
// an empty set
let s4 = new Set();
console.log(s4);

let s = new Set();
s.add(10);
s.add(20);
// As this method returns
// the set object hence chaining 
// of add method can be done.
s.add(30).add(40).add(50);
console.log(s);
console.log(s.size);

const mySet = new Set();
mySet.add("Virat");
mySet.add("Rohit");
mySet.add("Rahul");
for (const value of mySet) {
    console.log(value);
}

const Data = new Set();
Data.add("Delhi");
Data.add("Noida");
Data.add("Gurgaon");
Data.forEach(function (value) {
    console.log(value);
});





