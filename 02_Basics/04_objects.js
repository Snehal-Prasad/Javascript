//const instaUser = new Object()
const instaUser ={}

instaUser.id ="123abc"
instaUser.name = "Sammy"
instaUser.isLoggedIn = false

// console.log(instaUser);

const regularUser ={
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "snehal",
            lastname: "prasad"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);// this is who we acess

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}
// const obj4 ={5:"a", 6:"b"}

// const obj3 ={ obj1, obj2} // to combine- it will be objectinside object
// const obj3 = Object.assign({},obj1, obj2)// it return a new object// copies properties from one or more source objects to a target object.

//Syntax is Object.assign(target[it will be new object that we will be returning so, obj1... will be consider as source and they will get merged into first{empty object}])

const obj3 ={...obj1, ...obj2}
//console.log(obj3);



const users =[ // array of objects we get if we are taking data from  database

    {
        id: 1,
        email:"S@gmail.com"
    },
    
    {
        id: 1,
        email:"S@gmail.com"
    },
    
    {
        id: 1,
        email:"S@gmail.com"
    },

]

users[1].email
// console.log(instaUser);
// console.log(Object.keys(instaUser));//returns an array with the keys of an object, method does not change the original object.
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));//returns a array of key/value of an object

// console.log(instaUser.hasOwnProperty('isLoggedIn'));


// Destructuring 

const course = {
    course: "js course",
    price:"999",
    courseInstructor:"Sanjay"

}

//course.courseInstructor
const {courseInstructor: instructor} = course


//console.log(courseInstructor);
console.log(instructor);

{                   // this is json key\values are in stirng
    "name": "snehal",
    "coursename": "Javascript",
    "price":"free"
}

[
    {},
    {},
    {}
]

