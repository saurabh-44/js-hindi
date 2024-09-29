/* 4---------------------------------------------------Call-----------------------------------------------------------
=> call() method is used to invoke a function with a specific value for this, and you can also pass arguments to the function individually. 
=> It allows you to call a method (or function) on an object that doesn't originally have it by explicitly setting the this context.*/

/*-----------------------------------------------------Example------------------------------------------------------
=> In this example, call() is used to invoke the SetUsername function inside createUser with the this context of the createUser instance. 
This way, the properties set by SetUsername will be applied to the newly created user object.*/
function SetUsername(username){ 
    //complex DB calls
    this.username = username            // it sets the username on the current object
    console.log("called");
}

function.call(thisArg, arg1, arg2, ...);
// thisArg: The value of this within the called function.
// arg1, arg2, ...: The arguments passed to the function when invoking it.

function createUser(username, email, password){ // constructor function that will create new user objects.
    SetUsername.call(this, username)            // This means we are calling the SetUsername function but using the this context of the current createUser instance.
                                                // The call() method allows SetUsername to assign the username property to the createUser object.
   // After the above line, the username is set on the current object (this)
    
    this.email = email                          // Setting email property on the same object
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")  // The new keyword creates a new object and binds this to the new instance of createUser.
console.log(chai);


/*Key Heiglights
=> call() is used to invoke a function with a specific this value. In this case, it’s used to run the SetUsername function within the context of the createUser object.
=> this binding: Using call(), the this in SetUsername refers to the object being created by createUser, so any changes made inside SetUsername affect that object.
=> The new keyword ensures that a new object is created, and this inside the createUser function refers to this new object..*/
