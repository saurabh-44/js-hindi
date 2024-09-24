/*-----------------------------------Reduce----------------------------------------
=> an array method that processes each element of the array and reduces it to a single value. 
=> iterates over the array, and for each element, it applies the callback function. 
=> The result from the callback is stored in an accumulator that is carried forward to the next iteration. Finally, the method returns the accumulated value.*/
const myNums = [1, 2, 3]
const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)    // 0 is the initial value of accumulator 

/*-----------------------------with arrow function----------------------*/
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);


/*--------------------------------Example------------------------------*/
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);
