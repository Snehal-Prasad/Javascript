//singleton- whenever we make object through constructor it is singleton
//Object.create- constructor method

//object literals

const mySym = Symbol("key1")

const Jsuser={
    name: "Snehal", // keys-value
    "full name": "Snehal Prasad",
    [mySym]: "myKey1",// symbol datatype syntax
    age : 18,
    location: "Jaipur",
    email: "Snehal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondays", "Saturday"]

}
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"])
// console.log(Jsuser[mySym])

Jsuser.email ="snehal@chatgpt.com" // to over-write value
// Object.freeze(Jsuser)//no changes will be added
Jsuser.email = "snehal@microsoft.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello Js user");

}
Jsuser.greetingTwo = function(){
    console.log('Hello Js User, ${this.name}');//string interpolation
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());