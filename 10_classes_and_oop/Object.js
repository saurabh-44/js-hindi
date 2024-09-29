/* 2-------------------------------------------------------------Prototype--------------------------------------------------
=> prototype is a property that allows you to add properties or methods to an object’s constructor function, which can then be shared across all instances 
of that object. 
=> Every function in JavaScript automatically has a prototype property, which is an object that holds methods and properties shared by all instances 
created by that constructor function.
=> function can refer to object and acts like object in javascript.
=> classes, new , this all comes from prototype and js have prototype behaviour means it will try to give methods which you have required.   */
function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2
console.log(multipleBy5.power);       // 2 => that indicates functions can behave like an object in js.

console.log(multipleBy5(5));          // 25
console.log(multipleBy5.prototype);   // {} => it is a method which provides some properties.


/*---------------------------------------------------Example-2------------------------------------------------------*/
function createUser(username, score){
    this.username = username                         // this.username and this.score refer to the properties of the newly created object
    this.score = score
}

createUser.prototype.increment = function(){          // injecting a function
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
/* Why use prototype?: By adding methods to the prototype, we ensure that these methods are shared by all instances of the object. If we were to define 
increment inside the constructor function itself, a new copy of the method would be created for each instance, leading to higher memory usage.*/

const chai = new createUser("chai", 25)     // if we not use new keyword then it will not known that there is additional property 
const tea = new createUser("tea", 250)      
chai.printMe()    // direct accessing prototype method

/* When you use the new keyword, JavaScript knows that it should create a new object from the createUser constructor. The this keyword inside the constructor 
refers to the newly created object.
new is important because it does the following and Here's what happens behind the scenes when the new keyword is used:: 
      1. Creates a new empty object.
      2. Sets the this context to that new object.
      3. Links the new object to the constructor's prototype. => This means that it has access to properties and methods defined on the constructor's prototype.
      4. Returns the newly created object. => After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), 
         the newly created object is returned.
      5. The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
         If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.
Without the new keyword, this would refer to the global object (in browsers, it would be window), and no new instance would be created.*/

const tea = createUser("tea", 250);
/* Without new, the constructor function will not create a new object. Instead, the properties (username and score) would be assigned to the global object 
(like window in browsers), which can cause unexpected results.
=> tea would be undefined, and the values of this.username and this.score would overwrite global properties rather than being assigned to a new instance.*/
