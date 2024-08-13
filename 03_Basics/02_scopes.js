// whatever we write in global scope is available in block scope also but block scope value is not available outside of scope
//scope is different when we check in browser and in code environment when we run through node  is different 
//var c= 300
let a = 300 //outside if everything is global scope 
 if(true){            // block scope
    let a = 10
    const b = 20
    // console.log("INNER:  ", a);
 }

//  console.log(a);
//  console.log(b);
//  console.log(c);

//nestedscope
function one(){
    const username ="hitesh"


    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);

   // two()// calling
}
//one()

if(true){
    const username = "Snehal"
    if(username === "Snehal"){
        const website =" youtube"
        // console.log(username +website);
    }
    //console.log(website);
}
// console.log(username);



//++++++++++++++++ interesting ++++++++++++++++++++

console.log(addone(5))
function addone(num){ // only declaration
return num + 1

}


addtwo(5)       // we are accessing before declaration
const addtwo = function(num){   // in this we have done declaration + we are hold it into a variable
    return num + 2
}


