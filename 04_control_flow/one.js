/*-----------------------------------if-else-------------------------------------------*/
const isUserloggedIn = true
const temperature = 41
if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}


/*-----------------------------------2nd Method----------------------------------------*/
const balance = 1000
if (balance > 500) console.log("test"),console.log("test2");  // can write with inline statement with separated by ,


/*-----------------------------------Exmaple-1----------------------------------------*/
const score = 200
if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}


/*-----------------------------------else-if----------------------------------------*/
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

}


/*-----------------------------------Exmaple-2----------------------------------------*/
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {      // and op => if any of the statement will false, it will not execute
    console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail) { // or op => if any of the staement will false it will execute 
    console.log("User logged in");
}
