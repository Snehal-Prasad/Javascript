// this => currentcontext
const user = {
    username: "snehal",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username =" sam"
// user.welcomeMessage()

// console.log(this); // inside node environment this is referring an empty object

//earlier js can be executed inside browser only becoz the engine is found only in browser
// then later we got our own standalone engine
// inside browser window is largest global object and in node environment we have empty object

// function chai(){
//     let username ="snehal"
//     console.log(this.username); // this is undefined bcoz  as this context works only in object not function
// }
// chai()



// const chai = fucntion(){
//     let username =" snehal"
//     console.log(this.username);

// }

const  chai = () => {
    let username =" hitesh"
    console.log(this);

}

//chai()

// const addtwo =( num1, num2) => {   // Basic arrow function or explicit return
//     return num1 +num2
// }

// const addtwo =(num1, num2) =>  num1 +num2        //Impicit return
// const addtwo =(num1, num2) => ( num1 +num2 )        // if it is wraped in () we don't need to write return but if we wrap in{} we need to write return
const addtwo =(num1, num2) => ( {username : " snehal"}) // even if we want to return object we need to wrap it in () 
console.log(addtwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()