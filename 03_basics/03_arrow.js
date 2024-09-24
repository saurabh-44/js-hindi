/*-------------------------------this keyword------------------------------*/
const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {   // can initialize function inside the object
        console.log(`${this.username} , welcome to website`);  // with this keyword we can access attribute within an object
        console.log(this);         // this will print entire object  
    }
}
user.welcomeMessage()       // call the function 
user.username = "sam"       // username will update here
user.welcomeMessage()       // updated username will call
console.log(this);          // updated object will print


/*-------------------------------Arrow Function------------------------------*/
// 1st method of decalaration function
function chai(){
    let username = "hitesh"
    console.log(this.username);
}
chai()


// 2nd method of decalaration function
const chai = function () {
    let username = "hitesh"
    console.log(this.username);
}
chai()

// 3rd method of decalaration function with arrow function which is the shortest way of writing any function
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
chai()


/*-------------------------------Arrow Function Exercises------------------------------*/
const addTwo = (num1, num2) => {
    return num1 + num2
}

// or inline method
const addTwo = (num1, num2) =>  num1 + num2
// or
const addTwo = (num1, num2) => ( num1 + num2 )
console.log(addTwo(3, 4))

// object creation
const addTwo = (num1, num2) => ({username: "hitesh"})
