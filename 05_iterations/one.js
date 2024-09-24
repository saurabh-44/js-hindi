/*---------------------------------------for---------------------------------------------*/
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}


/*---------------------------------------Exmaple-1----------------------------------------*/
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i + '*' + j + ' = ' + i*j );
   }
}


/*---------------------------------------Exmaple-2----------------------------------------*/
let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


/*-----------------------------------break statement-----------------------------------*/
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);     
        break                       // if the statement is true then after execution it will terminate the loop 
    }
   console.log(`Value of i is ${index}`);
}


/*-----------------------------------continue statement-----------------------------------*/
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue                     // Skips the current iteration of a loop and moves to the next one.
    }
   console.log(`Value of i is ${index}`);
    
}
