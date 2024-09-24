/*------------------------------------forEach------------------------------------------
=> is an array method that allows you to execute a function for each element in an array.
=> simply iterates through the array and performs the action inside the callback. It does not create a new array or return any value.
=> cannot use break or continue inside forEach(). It will always run for every element.
=> If the callback modifies the elements of the array, those changes will be reflected in the original array.
=> If you want to create a new array with modified values, use map() instead. forEach() is primarily for iterating and performing actions, not transforming data. */
const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach( function (val){         // callback function is an parameters
    console.log(val);
} )

coding.forEach( (item) => {             // with arrow function
    console.log(item);
} )


/*--------------------------2nd method------------------------------*/
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)


/*--------------------forEach does not return any value------------*/
const values = coding.forEach( (item) => {                 
    console.log(item);
    return item
} )
console.log(values);           


/*------------------------------------forEach with index----------------------------------*/
const coding1 = ["js", "ruby", "java", "python", "cpp"]
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);        // here item, index and entire array will print
} )


/*------------------------------------forEach with object----------------------------------*/
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach( (item) => {       // item indicates the object within the array and all the object tends to item and we can access the object with it
    console.log(item.languageName);
} )
