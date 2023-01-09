const numbers =[3,4,5,6,7,8];

const square = function(number){
    return number * number;
}
const squareNumber = numbers.map(square);
console.log(squareNumber);


const nums = [22,33,44,55,66,77]
// const add = function(num){
    // return num + num;
    
    const addNumber = nums.map((number,index)=>{
    // return`index: ${index},${number +  number}`;
    return index;
    });
// }
console.log(addNumber)