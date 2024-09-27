// lecture is about object with new keyword
// 1st prototype => function can refer to object
// classes, new , this all comes from prototype and js have prototype behaviour means it will try to give methods which you are require.
function multipleBy5(num){
    return num*5
}
multipleBy5.power = 2

console.log(multipleBy5(5));          // 25
console.log(multipleBy5.power);       // 2 => that indicates functions also behve like an object in js.
console.log(multipleBy5.prototype);   // {} => it is methods and provide as well as some properties also


/*---------------------------------------------------Example-2------------------------------------------------------*/
function createUser(username, score){
    this.username = username             // current context 
    this.score = score
}

createUser.prototype.increment = function(){          // injecting a function
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)     // if we not use new keyword then it will not known that there is additional property 
const tea = createUser("tea", 250)
chai.printMe()    // direct accessing prototype method
 

/* new keyword => 
1.Here's what happens behind the scenes when the new keyword is used:
2.A new object is created: The new keyword initiates the creation of a new JavaScript object.
3.A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

4.The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

5.The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), 
the newly created object is returned.
*/
