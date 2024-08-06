//primitive
// 7 types : string, Number, Boolean, Null, undefined, symbol, BigInt 
// these are callbyvalue- whenever we call then original data reference we don't get tat instead  they copy that then give it.


const score= 100// number
const scoreValue=100.3 //number

const isLoggedIn =false // boolean
const outsideTemp = null //null
let userEmail;//undefined

const id=Symbol('123')//symbol=unique
const anotherId=Symbol('123')

//console.log(id=== anotherId);

const BigNumber=2345509638833674883n //BigInt


//Reference (Non primitive)
//Arrays, Objects, Functions

const heros=["shaktiman", "naagraj","doga"]; //array

let myObj ={ //objects inside {}
    name : "snehal",
    age: 21,
}
const myfunction= function(){
    console.log("hello world");
}

console.log(typeof myfunction
    
 );


