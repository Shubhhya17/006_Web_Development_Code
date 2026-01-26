// Find the Largest value 
// ! [ 3, 5, 2, 7 ,1]

function findLargest(arr){
    let max = arr[0] // Winner 

    for(let i = 1; i<arr.length; i++){
       if(arr[i] < max){
        max = arr[i]
       } 
    }
return max
}
let arr =[3, 5, 2, 7 ,1]
console.log(findLargest(arr)) //7
