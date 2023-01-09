// reduce//
const numbers = [1,2,3,4,66]

// sum of all numbers in array//
const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
},100);
console.log(sum);

//eg---
// accumulator   currentValue   return
//     1             2             3
//     3             3             6  
//     6             4             10
//     10            5             15

const userCart = [
      {productId: 1, productName:"mobile", price:12000},
      {productId: 2, productName:"laptop", price:22000},
      {productId: 3, productName:"tv", price:220300},
]
const totalAmount = userCart.reduce((totalPrice, currentProduce)=>{
    return totalPrice + currentProduce.price;
},00);
console.log(totalAmount);