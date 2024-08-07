//array

const myArr =[ 0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "naagraj"]

const myArr2= new Array(1, 2, 3, 4)
//console.log(myArr[1]);

//Arrays Methods

// myArr.push(6) // to add value
// myArr.push(7)
// myArr.pop() //removes last element

// myArr.unshift(9) // add element at first
// myArr.shift()// to delete from beginning + we don't give any argument

// console.log(myArr.includes(9)); // to check 9 is there or not
// console.log(myArr.indexOf(3));


// const newArr= myArr.join() // it changes the type into string + it binds the array

// console.log(myArr);
// console.log(newArr); 

//slice, splice
console.log("A ",myArr);

const myn1 = myArr.slice(1,3 )
console.log(myn1);

console.log("B ", myArr);

const myn2= myArr.splice(1,3)// manipulate the original array
console.log("C",myArr);
console.log(myn2);


