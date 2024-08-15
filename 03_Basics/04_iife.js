// Immediately Invoked Function Expressions(IIFE)
//reason to use this- 1)we don't want pollution from global scope so we make our own separate scope
// 2) to immediately invoked

(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
})(); // we face problem from global scope problem, soto remove global scope varibles or pollution we use iife

// ()=> function defination ()=> execution call

((name) => {
console.log(`DB CONNECTED TWO ${ name}`);
})('snehal')