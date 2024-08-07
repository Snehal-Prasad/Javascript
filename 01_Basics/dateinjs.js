//dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.getHours());

// console.log(typeof myDate); //object//imp

// let myCreatedDate = new Date(2024,0,23) // month starts from 0 in js when in single digit
// let myCreatedDate = new Date(2023, 0 ,23, 5, 3)
// let myCreatedDate = new Date("2024-01-14")// month start with 1 when in 2 digit format
let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimesStamp = Date.now()

// console.log(myTimesStamp);
// console.log(myCreatedDate.getTime()); //to compare to get value in milisec from that date 

// console.log(Math.floor(Date.now()/1000));

let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);
console.log(newDate.getDay());

'${newDate.getDay()} and the time'

newDate.toLocaleString('default', { // to customize more
    weekday: "long",
})



