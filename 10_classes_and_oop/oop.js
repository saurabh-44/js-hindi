/* 1--------------------------------------------oops----------------------------------------------------*/
// JavaScript does have classes and it was introduce with ES6. and it is a prototype-based language. it's not a object oriented programming.
const user = {
    username: "saurabh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);            // directly didn't understand which username so .this will refers to the user object
        console.log(this);                                    // this will refers to current context means current object
    }

}
console.log(user.username)            // saurabh
console.log(user.getUserDetails());   // will access all the values inside the function
console.log(this);                    /* it's refers to the globel context or object then output will be {} empty object. and if we check this line of code
                                         on browser console then it will refers to the window object which is globel object */


/*-------------------------------------------constructor function-------------------------------------------
=> special type of function used to create objects. It is used with the new keyword to instantiate new objects, 
   giving them a specific structure or set of properties and methods.
=> it will give you a copy in which chages will be yours and do not override */
function User(username, loginCount, isLoggedIn){                    // This is a constructor function called User.
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

/* Without the new keyword, this inside the function refers to the global object (window in browsers), not to a newly created object. 
the properties (username, loginCount, etc.) are set on the global object, and both userOne and userTwo will be undefined. Additionally, 
calling userOne after this will not hold the correct values.*/
const userOne =  User("hitesh", 12, true)             
const userTwo =  User("ChaiAurCode", 11, false)
//console.log(userOne);     => if we execute over two line then userOne will update with userTwo because of override

const userOne = new User("hitesh", 12, true)           // new User(...) creates a new object from the User constructor function.
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);                      /* When userOne is created using new User(), it is an instance of the User constructor function.
                                                          The constructor property refers to the function that created the object, which in this case is User.*/
