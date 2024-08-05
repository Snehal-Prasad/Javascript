// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2 !=1)

// console.log("2">1);
// console.log("02"> 1);

console.log(null>0);
console.log(null==0);
console.log(null>=0);
// the reason is that an equality check== and comparision >< >= <= work differently.
// Comparisons convert null to a Number, treating it as 0.
// That's why(3)null>=0 is true and (1) null is false

console.log(undefined==0);
console.log(undefined >0);
console.log(undefined <0);

//===

console.log("2" ===2); // it also  check datatype if same then only it convert