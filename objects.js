let myDate = new Date();
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());


const date = new Date();
const formattedDate = new Intl.DateTimeFormat('en-US').format(date);  // Displays as month/day/year
console.log(formattedDate);

let myCreateDate = new Date("2025-01-10");
console.log(myCreateDate.toLocaleString());

let date1= new Date()
console.log(date1);
console.log(date1.getDay()+1);
console.log(date1.getMonth());
date1.toLocaleString('default' , {
    weekday: "long"
})


////Objects
const mySym = Symbol("key1")

const user = {
    name: "Sneha",
    [mySym]: "mykey1",
    age: 25,
    location:"gadag",
    email: "sneha@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

console.log(user.email)
console.log(user["email"])
console.log(user["name"])
console.log(user[mySym])

//singleton and contructor
//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sne"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser = {
    email: "snehab@gmail.com",
    fullname: {
        userfullname: {
            firstname: "akku",
            lastname: "K"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1,obj2}
const obj3 = Object.assign(obj1,obj2)
console.log(obj3);


const navbar = () => {

} 

navbar()
