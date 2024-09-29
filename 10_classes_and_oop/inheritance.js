/* 6------------------------------------demonstrates inheritance in JavaScript using ES6 classes---------------------*/
class User {
    constructor(username){
        this.username = username                            // The constructor initializes the username property
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);        // This is a method of the User class
    }
}

class Teacher extends User{           // inherits from the User class using the extends keyword.  
    constructor(username, email, password){
        super(username)               // Calls the constructor of the parent class (User)
        this.email = email            // Initializes additional properties (email, password) for the Teacher class
        this.password = password
    }
    addCourse(){                      // This is a method specific to the Teacher class
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.logMe()                          // Output: USERNAME is chai

const masalaChai = new User("masalaChai")
masalaChai.logMe()                    // Output: USERNAME is masalaChai

console.log(chai instanceof User);    // The instanceof operator checks if the chai object is an instance of the User class (or its subclasses).
                                      // Output: true
/* Prototype Chain: When you extend a class in JavaScript, the subclass (e.g., Teacher) is linked to the parent class (e.g., User) through the prototype chain, 
allowing methods and properties to be inherited.*/
