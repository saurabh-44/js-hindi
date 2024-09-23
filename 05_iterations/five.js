const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){         // callback function is an parameters
    console.log(val);
} )

coding.forEach( (item) => {
    console.log(item);
} )

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

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
