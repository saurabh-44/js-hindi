class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){  // if anyone wants to get the email then what we have to return
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value                    // email is override
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);
