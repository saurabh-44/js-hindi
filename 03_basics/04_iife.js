// Immediately Invoked Function Expressions (IIFE) =>  a JavaScript function that runs as soon as it is defined.
//  If we have some initiation code that we don't need to use again, we could use the IIFE pattern.
//  () => anonymous function with lexical scope enclosed within the grouping operator (). This prevents accessing variables within the IIFE idiom and polluting the global scope.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();     // () => immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')  // hitesh will print after $ sign

