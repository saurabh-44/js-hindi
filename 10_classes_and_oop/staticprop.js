/* 7---------------inheritance, method overriding, and static methods in JavaScript.----------------*/
class User {
    constructor(username){
        this.username = username        // The constructor initializes the username property
    }
    logMe(){                            // Instance method that logs the username to the console
        console.log(`Username: ${this.username}`);
    }
    static createId(){                  // Static method => This is a static method, which means it belongs to the class itself and not to individual instances.
        return `123`                    // Returns a static ID
    }
}

const saurabh = new User("saurabh")     /* If you try to call saurabh.createId(), it will throw an error because createId is a static method 
and cannot be accessed through an instance (saurabh). The correct way to call a static method is User.createId(), directly from the class.*/
// console.log(hitesh.createId())

class Teacher extends User {            // Teacher class has access to all properties and methods of the User class.
    constructor(username, email){
        super(username)                 // Calls the parent class (User) constructor to initialize the username
        this.email = email              // Initializes an additional property (email) for Teacher
    }
}
const iphone = new Teacher("iphone", "i@phone.com")     // Teacher inherits from User, the iphone object can access methods from the User class.
console.log(iphone.createId());      /* This will throw an error because createId() is a static method of the User class and cannot be accessed via an instance 
of the class (iphone). Static methods can only be called directly on the class itself 
(e.g., User.createId() or Teacher.createId() if Teacher had its own static method or inherited one).*/

console.log(User.createId());     // Output: 123 => To correctly access the createId() static method, you should call it like this.
console.log(Teacher.createId());  // Output: 123 => If you want to add or use a static method in the Teacher class, you would do the same.


