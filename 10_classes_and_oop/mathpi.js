/* 9-----------------------------------------------Can we change the value of PI------------------------------------
=> use of Object.getOwnPropertyDescriptor() and Object.defineProperty() to manipulate properties of objects, especially focusing on their attributes 
such as writable, enumerable, and configurable.*/
console.log(Math.PI);   
Math.PI = 5                    // can't change directly the value of PI
console.log(Math.PI);

/* returns the descriptor object of the specified property. This includes details about whether the property is writable, enumerable, or configurable. */
const descripter = Object.getOwnPropertyDescriptor(Math, "PI") 
console.log(descripter);


/*-------------------------------------------------------------Example--------------------------------------------------------*/
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));       // 

Object.defineProperty(chai, 'name', {         // is used to modify the descriptor of the name property.
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {            // can't do loop directly so go with iterate entries
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
