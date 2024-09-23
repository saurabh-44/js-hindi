const accountId = 144553
// accountId = 2 // not allowed we can't cahnge const
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;    // undefined


/*
Prefer not to use var
because of issue in block scope and functional scope
*/



accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

// will print in table formate
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
