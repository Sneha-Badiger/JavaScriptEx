//these are collections of key-value pairs where the keys are strings (or symbols) and the
//values can be any type, including other objects arrays, functions,or primitive types

let myDate = new Date();
console.log(myDate.toDateString()); 
console.log(myDate.toLocaleString());


const date = new Date();
const formattedDate = new Intl.DateTimeFormat('en-US').format(date);  // Displays as month/day/year
console.log(formattedDate);

let myCreateDate = new Date("2025-01-10");
console.log(myCreateDate.toLocaleString());

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
//const obj3 = {obj1,obj2}
const obj3 = Object.assign(obj1,obj2)
console.log(obj3);

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
  };
  console.log(day1.squirrel);
  // → false
  console.log(day1.wolf);
  // → undefined
  day1.wolf = false;
  console.log(day1.wolf);
  // → false


let anObject = {left: 1, right: 2};
console.log(anObject.left);// → 1
delete anObject.left;
console.log(anObject.left);// → undefined
console.log("left" in anObject);//The in operator checks if a property exists in an object."left" in anObject returns false because we deleted left.
// → false
console.log("right" in anObject);// → true

//using let
let x = 10;//x and y are independent because numbers are stored by value, not reference.
let y = x;
x = 20;
console.log(y); // 10

//using objects
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 == object2);// → true since object2 references the same object as object1,they are equal(true).
console.log(object1 == object3);// → false object3 has the same values as object1, but it is a different object in memory.
//In JavaScript, objects are compared by reference, not by value.Since object1 and object3 are stored separately in memory,
object1.value = 15;
console.log(object2.value);// → 15
console.log(object3.value);// → 10

//JSON :-JSON is a way to store and share data. It looks like a JavaScript object, but it’s just text.
//JSON (JavaScript Object Notation) is a format used to store and send data.
//It looks like a JavaScript object but is actually a string.
//Why Use JSON?
//Easy to read and used everywhere.
//Used for APIs (sending and receiving data).Lightweight and fast.

//1. Convert JSON to JavaScript Object (Read Data)
//When you get JSON data (as a string), you need to convert it into a JavaScript object using JSON.parse().
const jsonString = '{"name": "John", "age": 25}'; // JSON data as a string
const obj = JSON.parse(jsonString); // Convert to JavaScript object
console.log(obj.name); // Output: John
console.log(obj.age);  // Output: 25

//2. Convert JavaScript Object to JSON (Send Data)
//If you want to send JavaScript data to a server, you convert it into JSON format using JSON.stringify().
const person = { name: "Alice", age: 30 }; // JavaScript object
const jsonString2 = JSON.stringify(person); // Convert to JSON string
console.log(jsonString2);
// Output: '{"name":"Alice","age":30}'


const jsonArray = `[
    { "name": "John", "age": 25 },
    { "name": "Alice", "age": 30 }
  ]`;

const people = JSON.parse(jsonArray); // Convert JSON string to JavaScript array
console.log(people[0].name); // Output: John
console.log(people[1].age);  // Output: 30


//telusko
let group = {
  fname : 'sneha',
  lname : 'Badiger',
  place : 'gadag'
}
console.log(group.fname);

const regularUser = {
  email: "snehab@gmail.com",
  fullname: {
      userfullname: {
          firstname: "akku",
          lastname: "K"
      }
  }
}
delete regularUser.fullname.userfullname.lastname;
console.log(regularUser.fullname.userfullname.lastname);
console.log(regularUser);

const object = {1: "a", 2: "b"};
const object4 = {3: "a", 4: "b"};
const object5 = {5: "a", 6: "b"};

const obj5 = Object.assign(object, object4, object5)
console.log(obj5);

//const tinderUser = new Object();
const tinderUser = {}
tinderUser.id = "abc123"
tinderUser.name = "Sneha"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const users = [
  {
    id: 1,
    email: "sneha@gmail.com"
  },
  {
    id: 2,
    email: "sneha12@gmail.com"
  },
  {
    id: 3,
    email: "sneha@gmail.com"
  },

]
users[1].email
console.log(users);
console.log(tinderUser);
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));