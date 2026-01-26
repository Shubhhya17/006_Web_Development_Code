//What is Palindrome ?

// mam <---

function palindromeString(str){
    let rev = "";

    for(let i = str.length -1; i>= 0 ; i--){
        rev = rev + str[i]
    }//String REverse 

    if(str === rev ){
        return true
    }else{
        return false
    }
}
// console.log(palindromeString("Hello"))
console.log(palindromeString("Madam"))

