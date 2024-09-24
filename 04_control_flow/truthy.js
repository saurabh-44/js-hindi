// falsy values => false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values => "0", 'false', " ", [], {}, function(){}


/*----------------------------Example-1-------------------------------*/
const userEmail = []
if (userEmail) {   // automatically detected true value as userEmail
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


/*----------------------------Example-2-------------------------------*/
if (userEmail.length === 0) {
    console.log("Array is empty");
}


/*----------------------------Example-3-------------------------------*/
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


/*-----------Nullish Coalescing Operator (??): null undefined----------*/
/*operator returns the right-hand side value if the left-hand side value is null or undefined. 
Otherwise, it returns the left-hand side value.*/
let val2 = 5 ?? 10          // it means val2 have 2 values 5 and 10 but 1st value will execute 
let val3 = null ?? 10       // here 10 will execute
let val4 = undefined ?? 15  // here 15 will execute


let val1 = null ?? 10 ?? 20
console.log(val1);           // here 10 ill execute


/*-------------------------Terniary Operator-----------------------------*/
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
