/*----------------------------------------------objects-------------------------------------------------
=> Objects in JavaScript are fundamental data structures that represent a collection of key-value pairs.
=> There are two primary ways to create objects in JavaScript: 1.object literals, 2. new object */
// object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Saurabh",
    "full name": "Saurbh Yadav",          // key can be enter as double cot
    [mySym]: "mykey1",                    // symbol can be pass as an key
    age: 18,
    location: "Jaipur",
    email: "saurabh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)             // email will print
console.log(JsUser["email"])          // can we access email by double cot
console.log(JsUser["full name"])      
console.log(JsUser[mySym])

JsUser.email = "saurabh@chatgpt.com"   // email can change
Object.freeze(JsUser)                  // object will freez and now we can't change 
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);                   // no changes

JsUser.greeting = function(){          // function can be added to the object
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  // this will refer to the object
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
