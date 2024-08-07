// Stack(primitve)-you get a copy of value, heap(-Primitive)- you get reference means any changes you make is in original value

let myYoutubename="Snehal-Insights"

let anothername= myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne={
    email:"snehal@gmail.com",
    upi: "user@ybl"

}
let usertwo = userOne

usertwo.email="snehal@google.com"

console.log(userOne.email);
console.log(usertwo.email);