//* 1 Reverse The Given String ("Hello")

//olleH

function reserseString(str){

    let result = ""; 

    for(let i = str.length - 1; i>=0; i--){
        result = result + str[i];
        // result += str[i] ;

    }
    return result;
}
console.log(reserseString("Hello"))
