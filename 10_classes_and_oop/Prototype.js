// javasript has prototype behaviour
/*-----------------------------we are injecting a method to object which function can also access------------------------------*/
let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);     // this refers to current context 
    }
}

Object.prototype.saurabh = function(){                        // initializing prototype method adding new property to object
    console.log(`saurabh is present in all objects`);
}

Array.prototype.heySaurabh = function(){
    console.log(`Saurabh says hello`);
}

// Now can access the new prototype method which we initialize previously
heroPower.saurabh()
myHeros.sauraabh()
myHeros.heySaurabh()
heroPower.heySaurabh()   // we give power to array not an object. so it will give error


/*------------------------------------------------------Example ---------------------------------------------
=> we want a method which removes white spaces and return the length of the string with one method.*/
let anotherUsername = "ChaiAurCode     "
String.prototype.trueLength = function(){
    console.log(`${this}`);                                            // chai aur code
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()       // now we can easily find truelength with using the prototype method
"hitesh".trueLength()
"iceTea".trueLength()


/*--------------------------------------------inheritance => old syntax-------------------------------------
=> prototypal inheritance allows one object to inherit properties and methods from another object. This is achieved through the __proto__ property, 
which refers to the prototype of the object. 
=> When you try to access a property or method on an object and it’s not found, JavaScript will look up the prototype chain 
(i.e., the object’s prototype and its prototype, and so on) until it either finds the property or reaches null.*/
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
    __proto__: TeachingSupport         // reference to TeachingSupport means TASupport can access properties of TeachingSupport
}
console.log(TASupport.makeAssignment); // Outputs: 'JS assignment'
console.log(TASupport.isAvailable);    // Outputs: false (inherited from TeachingSupport)

Teacher.__proto__ = User               // teacher can access users by inherit property and it is an old syntax
console.log(Teacher.makeVideo);        // Outputs: true
console.log(Teacher.name);             // Outputs: "chai" (inherited from User)

/*--------------------------------------------inheritance => Modern Syntax-------------------------------------*/
Object.setPrototypeOf(targetObject, prototypeObject);
Object.setPrototypeOf(TeachingSupport, Teacher)     // TeachingSupport can now access properties of Teacher

console.log(TeachingSupport.isAvailable);  // Outputs: false (own property)
console.log(TeachingSupport.makeVideo);    // Outputs: true (inherited from Teacher)



