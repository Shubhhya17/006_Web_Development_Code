let x = 10;
let y = 20;

[x, y] = [y, x];

console.log(x);
console.log(y);
x = x + y ;
y = x - y;
x = x - y; 

console.log("****** swap********")
console.log(x)
console.log(y)


console.log("*******Second******")
let a = 30;
let b = 45;


console.log(a)
console.log(b)
console.log("##############")
let temp = a;
a = b;
b = temp;

console.log(a)
console.log(b)