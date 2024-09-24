/*--------------------------------------------Example-1----------------------------------------------*/
// const tinderUser = new Object()     => 1st method to create an object
const tinderUser = {}                  // 2nd method to create an object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);
console.log(Object.keys(tinderUser));                   // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));                 // [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser));                // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn'));   // true


/*--------------------------------------------Example-2----------------------------------------------*/
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "saurabh",
            lastname: "yadav"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);  // saurabh


/*--------------------------------------------Example-3----------------------------------------------*/
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 }           // obj1 and obj2 will merge with an object in which obj1 , obj2 will be key and their object will be value with new object
const obj3 = Object.assign({}, obj1, obj2, obj4)   // obj1, obj2 and obj4 will assign to the empty object {}

const obj3 = {...obj1, ...obj2}       // obj1 and obj2 will spread out in obj3 object 
console.log(obj3);


/*--------------------------------------------Example-4----------------------------------------------*/
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "s@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },
]

console.log(users[1].email)   // s@gmail.com => indexing 1 will execute


/*--------------------------------------------Example-5----------------------------------------------*/
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

course.courseInstructor
const {courseInstructor: instructor} = course   // we can change the key accordingly 

console.log(courseInstructor);          // give error because now it is instructor
console.log(instructor);                // hitesh



// JSON formate
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}


// Can pass many objects within an array
[
    {},
    {},
    {}
]

