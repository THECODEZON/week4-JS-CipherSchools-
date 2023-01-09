// important array method

//foreach
// Map
// filter 
// reduce

// const numbers =[92,5,8];
// function multiplyBy2(number,index){
//     console.log("insdex is ",index);
//     console.log(`${number}*2 = ${number*2}`);

// }
// // multiplyBy2(numbers[0],0);
// // multiplyBy2(numbers[2],2);
// // multiplyBy2(numbers[3],3);
// for(let i = 0; i<numbers.length; i++){
// myFunc(numbers[i],i);
// }
// myFunc(myFunc2)

const users = [
    {firstName:"deepa",age:30},
    {firstName:"neha",age:60},
    {firstName:"meena",age:30},
    {firstName:"kaaju",age:30},
]
for (let user of users){
    console.log(user.firstName)
}