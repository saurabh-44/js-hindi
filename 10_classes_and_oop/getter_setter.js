/* 9-----------------------------------------------getter setter----------------------------------------------
=> getters and setters are special methods that allow you to control how properties of an object are accessed and updated. 
=> They provide a more flexible way to define how properties behave without directly accessing them, allowing for extra logic to be executed during getting or setting.
=> Getters: Methods that retrieve (or "get") the value of a property. or returns a computed or processed value when accessing the property.
=> Setters: Methods that set the value of a property and can add validation or additional logic before storing the value.*/
class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){                               // if anyone wants to get the email then what we have to return
        return this._email.toUpperCase()
    }
    set email(value){                          // value should be give as parameter
        this._email = value                    // email is override
    }

    get password(){
        return `${this._password}saurabh`
    }

    set password(value){
        this._password = value                 // Stores the password in a private variable '_password'
    }
}

const saurabh = new User("s@aurabh.ai", "abc")  /* the constructor is invoked. It receives two arguments: email and password. instead of directly assigning 
this.email = email, it calls the setter method set email(value) because email has a getter and setter defined. The same process happens for password as well.*/
console.log(saurabh.email);
