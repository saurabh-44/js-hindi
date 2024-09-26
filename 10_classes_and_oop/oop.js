/*--------------------------------------------oops----------------------------------------------------*/
// JavaScript does have classes and it was introduce with ES6. and it is a prototype-based language. it's not a object oriented programming.
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);            // directly didn't understand which username so .this will refers to the user object
        console.log(this);                                    // this will refers to current context means current object
    }

}
console.log(user.username)        // hitesh
console.log(user.getUserDetails());   // object
console.log(this);                     // it's refers to the globel context or object then output will be {} empty object. and it we check this line of code
// on browser console then it will refers to the window object which is globel object


/*-------------------------------------------constructor function-------------------------------------------
=> it will give you a copy in which chages will be yours and do not override */
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}
// const userOne =  User("hitesh", 12, true)
// const userTwo =  User("ChaiAurCode", 11, false)
//console.log(userOne);     => if we execute over two line then userOne will update with userTwo because of override

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
