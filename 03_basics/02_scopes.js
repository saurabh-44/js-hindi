/*----------------------------- var, let & const--------------------------*/
let a = 300      // global scope
var c = 300
if (true) {
    let a = 10   // lexical scope  
    const b = 20
    var c = 40
    console.log("INNER: ", a);
    
}
console.log(a);   // we are using let so here we can't access the value of inside the scope so 300 will print 
console.log(b);   // b is not defined globally 
console.log(c);   // here 40 will print which creates the problem because of var and we can access the local value to the outside the scope which is not good


/*----------------------------- Example => Scope --------------------------*/
function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website);    // website is not defined globally so we can't access outside the scope
    two()                    // if we comment out upper line then it will execute and username will print   
}
one()


/*----------------------------- Example => Scope --------------------------*/
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    console.log(website);  // No access of website because of lexical scope
}
console.log(username);     // No access of username because of lexical scope


/*----------------------------- Interesting-1 --------------------------*/
console.log(addone(5))   // 6 will print no issue to call before declaration of function 
function addone(num){
    return num + 1
}

/*----------------------------- Interesting-2 --------------------------*/
console.log(addTwo(5))          // Here problem will create because addTwo is the variable and we can't access before initialization. 
const addTwo = function(num){   // 2nd method to declaration of function
    return num + 2
}
