// for of 

// ["", "", ""]
// [{}, {}, {}]
// const arr = [ 1,2,3,4,5,]
//                    // objects = where we want to add loop
// for (const num  of arr) {
//     console.log(num);
    
// }

// const greetings = " hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${ greet}`)
// }

//maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United state of america")
map.set('Fr', "france")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value)
}

// const myObject ={ // not working for objects
//     'game1' : 'NFS',
//     'game2' : 'spierman'
// }
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);

    
// }