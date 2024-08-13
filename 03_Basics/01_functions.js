

// function sayMyName(){
//     console.log("S");
//     console.log("N");
//     console.log("E");
//     console.log("H");
//     console.log("A");
//     console.log("L");
// }

// sayMyName // reference sayMyName()- excecution
// function addTwoNumbers(number1, number2){ //parameters
//    console.log( number1 + number2);
   
// }

function addTwoNumbers(number1, number2){ //parameters
//  let result = number1 + number2
//  return result

return number1 + number2

}

 const result = addTwoNumbers(3,8) // argumnents

//  console.log("Result: ", result);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}


// // console.log(loginUserMessage("Snehal"));
// console.log(loginUserMessage("Snehal"));

function calculateCartPrice(val1,val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 600, 5000));


const user ={
    username: "Snehal",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
  
}
// handleObject(user)
handleObject({          //passing objects
    username: "Sam",
    prices:399
})

const myNewArray= [200, 400, 100, 600]


function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));