console.log("Apna college")

let fullName="AK";
let age="31";
let totalPrice=200;

console.log(fullName)
console.log(age)
console.log(totalPrice)

const student = {
    fullName : "AK",
    age :"31",
    totalPrice :200,
    isPass : true ,
};

console.log(student);
student["age"] = student["age"] + 1;
console.log(student[age]);

{
    let a = 5;
    console.log(a); 
}

const profile = {
    username: "@Sneha",
    isFollow: false,
    followers: 123,
    following: 123
};

console.log(typeof profile["username"]);

//Arithmati operatrs
let a=3;
let b=7;

console.log("a+b =",a+b);
console.log("a*b =",a*b);
console.log("a**b =",a**b);

//unary operators
let c=5;
let d=2;

console.log("c++ =",c++);
console.log("++c =",++c);