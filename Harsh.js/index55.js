// filter method
//  const numbers = [1,2,3,4,66,88,5];

//  const isEven=function(number){
// return number%2==0;

//  }
//  const evenNumbers = numbers.filter(isEven);
//  console.log(evenNumbers)

 const numbers = [11,22,66,88,110,44];
 const isOdd=function(number){
    return number%2==0; 
 }
 const oddNumbers = numbers.filter(isOdd);
 console.log(oddNumbers);
