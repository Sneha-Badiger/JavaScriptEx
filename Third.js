let obj = {
    name: "Sourav",
    age: 23,
    job: "Developer"
};
console.log(obj);

//using constructor
let obj1 = new Object();
obj1.name= "Sourav",
obj1.age= 23,
obj1.job= "Developer"

console.log(obj1);

//using either dot notation or bracket notation
let obj2 = { name: "Sourav", age: 23 };
// Using Dot Notation
console.log(obj2.name);
// Using Bracket Notation
console.log(obj2["age"]);
//modify obj
obj2.age = 24;
console.log(obj2);
//adding new obj
obj2.color = "Red";
console.log(obj2);
//
let obj3 = { name: "Sourav", age: 23 };
for (let key in obj3) {
    console.log(key + ": " + obj3[key]);
}
//using spread method
let ob1 = { name: "Sourav" };
let ob2 = { age: 23};
let obj4 = { ...ob1, ...ob2 };
console.log(obj4);
//To find length
let ob = { name: "Sourav", age: 23 };
console.log(Object.keys(ob).length);
