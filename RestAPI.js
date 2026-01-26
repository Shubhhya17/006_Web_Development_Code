
function largestOfThree(a, b, c){
    let largest = a;
    if(b> largest){

    
    largest = b;
    }
    if(c > largest){
        largest = c;
    }
    return largest
    
}
console.log(largestOfThree(2 , 24 , 6))



function isEven(num){
    if(num % 2 === 0){
        return "Even"
    }else{
        return "Odd"
    }
}
console.log(isEven(44))


function factorial(n){
    let result = 1;
    for(let i = 1; i<= n; i++){
        result = result * i;
    }
    return result
}
console.log(factorial)

