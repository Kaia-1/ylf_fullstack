const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];
const arr = [];
// const largeNumbers = numbers.forEach(function(e,i){
//     if(e > 70){
//         arr.push(e);
//     }
// })
// console.log(arr);
// forEach基础上
//filter过滤 ，是一个内置函数
// =>函数左边可以省略括号，function
// const cb = (number) => {
//     return number > 70
// }
const cb = number => number > 70
const largeNumbers = numbers.filter(cb);
console.log(largeNumbers);