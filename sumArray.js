//? find the Sum of Array ?

//! [1, 5, 4, 9] = 19

function sumArray(arr){
    let sum = 0;

    for(let i = 0; i <arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
let arr = [1, 5, 4, 9]
// console.log(sumArray(arr));
// 




const sumArray2 = (arr3)=>{

    let sum = 0;

    for(i = 0; i<arr3.length; i++){
        sum = sum + arr3[i];
    }
    return sum; 
}
let arr3 = [3,4,5,6,7,8]
console.log(sumArray(arr3))

