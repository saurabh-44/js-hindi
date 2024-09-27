/*-----------------------------------------------Can we change the value of PI------------------------------------*/
console.log(Math.PI);   
Math.PI = 5                    // can't change directly the value of PI
console.log(Math.PI);


const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));       // 

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {            // can't do loop directly so go with iterate entries
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
