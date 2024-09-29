/* 5---------------------------------------------Comes after ES6-----------------------------------------
=> Cleaner and more readable.
=> Internally, they still work using prototypes, but the syntax is more intuitive for developers coming from class-based languages like Java or C++.*/
class User {
    constructor(username, email, password){   // The constructor is called when a new object is created from this class.
        this.username = username;             // Assign the username property
        this.email = email;
        this.password = password
    }

    encryptPassword(){                        // Method to "encrypt" the password by adding "abc" to the end
        return `${this.password}abc`
    }
    changeUsername(){                         // Method to change the username to uppercase
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com", "123")   // Create a new instance of the User class or This creates a new object chai based on the User
console.log(chai.encryptPassword());                     // Output: "123abc"
console.log(chai.changeUsername());                      // Output: "CHAI"


/*----------------------------------------------- behind the scene-----------------------------------------
=> This section shows how the same functionality can be implemented using traditional constructor functions and prototypes, 
   which was how JavaScript handled object-oriented patterns before ES6 classes were introduced.*/
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "123")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());

/*Key Points:
Constructor Function: Instead of using the class keyword, we define a function User to act as a constructor. It initializes username, email, and password 
when called with the new keyword.
Prototype Methods: We define methods (encryptPassword() and changeUsername()) on the User.prototype. This means all objects created using the User constructor 
can access these methods via prototypal inheritance.*/
