const marvel_heros =["thor", "Ironman","spiderman"]
const dc_heros =["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)// to add new element in existing array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);// third element is itsef is a array , to acces inside we are using[1]

// const allHeros =marvel_heros.concat(dc_heros)// returns new array
// console.log(allHeros);

const all_new_heros =[...marvel_heros, ...dc_heros]// spread-out method - we will get indiviual element
//console.log(all_new_heros);

const another_array =[1, 2, 3,[4, 5, 6], 7,[6, , 7,[ 4, 5]]]
                                              //depth
const real_another_array = another_array.flat(Infinity)// return a new array with  all sub-array elementsconcatemated into it recursively up to the specified depth.

console.log(real_another_array);

console.log(Array.isArray("Snehal"))
console.log(Array.from("snehal"))// convert it into array
console.log(Array.from({name: "snehal"}))//interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

