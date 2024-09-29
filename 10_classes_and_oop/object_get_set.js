/* 12------------------------------------------- object based get set-------------------------------------------------*/
const User = {
    _email: 'h@hc.com',                          // Private-like property to store the email (underscore is a convention for "private" properties)
    _password: "abc",

    get email(){
        return this._email.toUpperCase()         // if we write only email then it will be race situation of calls
    },

    set email(value){ 
        this._email = value                      // Updates the '_email' field with the new value
    }
}

const tea = Object.create(User)                  // Creates a new object 'tea' that inherits from 'User'
//factory function we can make object based on user and refers to tea
console.log(tea.email);
