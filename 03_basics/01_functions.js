function sayMyName(){    // Declaration
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
sayMyName()             // Function Call

/*------------------------Example 1 => Add two numbers-------------------------------*/
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);        // Here Addition will perform inside the function but it will not return the value
}

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result                          // Here result will be return to the calling function.
    // return number1 + number2            => 2nd Method to return        
}
const result = addTwoNumbers(3, 5)
console.log("Result: ", result);

/*------------------------Example 2 => Check login-------------------------------*/
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh"))

/*------------------------Example 3 => Calculate Cart Price-------------------------------*/
function calculateCartPrice(val1, val2, ...num1){  // Here 200 and 400 will assign to val1 and val2 and rest of all will assign to ...num1 in array formate
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))


/*-----------------------Example 4 => Passing object to the function----------------------*/
const user = {                 // initializing user
    username: "hitesh",
    prices: 199
}   
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)       // 1st method to calling
handleObject({           // 2nd method in which we can directly call object by making it
    username: "sam",
    price: 399
})


/*-----------------------Example 5 => Passing object to the function----------------------*/
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));             // Passing array to the function which return the element
console.log(returnSecondValue([200, 400, 500, 1000]));  // Passing arrya by creating it
