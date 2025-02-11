//example
// Multiple line of code
const great = (a, b) => {
    if (a > b)
        return "a is greater";
    else
        return "b is greater";
}
console.log(great(3, 5));

//difference between functions and methods
function func(a, b) {
    let sum = a + b;
    return sum;
}
console.log(func(1, 2));

//The following example shows the method that is invoked with an object called employee.
let employee = {
    empname: "Rahul",
    department: "sales",
    details: function () {
        return this.empname +
            " works with Department " +
            this.department;
    }
};
console.log(employee.details());

//EX-This example shows the use of a function constructor in Javascript.
// Creating the function
function Person(name, age) {
	this.name = name;
	this.age = age;
}

// Calling the function 
let person = new Person("Vikah", 22);

console.log(person.name);
console.log(person.age);

