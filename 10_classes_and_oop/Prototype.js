// javasript has prototype behaviour
// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);              // we want a method which removes white spaces and return the length of the string with one method.


/*-----------------------------we are injecting a method to object which fuction can also access*/
let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){                       // initializing prototype method adding new property to object
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// Now can access the new prototype method which we initialize previously
heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
heroPower.heyHitesh()   // we give power to array not an object.


// inheritance => old syntax
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport    // reference to TeachingSupport and it can access
}

Teacher.__proto__ = User          // teacher can access users by this property and it is old syntax


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)     // which protperty is going to injected to which property


/*-------------------------------------------------------------Problem -1st-----------------------------------------*/
let anotherUsername = "ChaiAurCode     "
String.prototype.trueLength = function(){
    console.log(`${this}`);                                            // chai aur code
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
