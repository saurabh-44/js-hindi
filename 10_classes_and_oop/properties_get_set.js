/* 11---------------------------------- old get set syntax => function based syntax-----------------------------------------*/
function User(email, password){                           // Private properties (denoted with an underscore for convention)
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {                // Defining getter and setter for 'email' property
        get: function(){
            return this._email.toUpperCase()              // Returns the email in uppercase
        }, 
        set: function(value){
            this._email = value                           // Updates '_email' with the new value
        }
    })
    
    Object.defineProperty(this, 'password', {             // Defining getter and setter for 'password' property
        get: function(){                                  // Getter for 'password'
            return this._password.toUpperCase()
        },
        set: function(value){                             // Setter for 'password'
            this._password = value
        }
    })
}

const chai = new User("chai@chai.com", "chai")            // Creating a new User object 
console.log(chai.email);                                  // Accessing the email property (calls the getter)

/*Why Use Object.defineProperty()?
Before ES6 introduced the get and set syntax inside classes, Object.defineProperty() was used to create custom getter and setter functions. 
This method is still useful when you need to define properties with special behavior on an existing object or want to control aspects like enumeration 
or configurability.*/
