// object based get set
const User = {
    _email: 'h@hc.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()         // if we write only email then it will be race situation of calls
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User) //factory function we can make object based on user and reger to tea
console.log(tea.email);
