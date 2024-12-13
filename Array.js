// let arr1 = [10,20,30,40];
// console.log(arr1);
// console.log(arr1[1]);

// let  arr2 = [100,20,30,400,50];
// let arr_new = arr2.map((element, index)=>{
//     return element*100;
// });
// console.log(arr_new);

//!filter 
// let arr6 = [10,20,30,40,50,60];
// let res1 = arr6.filter((element, index)=>{
//     return element>=30;
// });
// console.log(res1);

//! reduce
// let arr9 = [10,20,30,40,50];
// let arr3 = arr9.reduce((firstElement, nextElement)=>{
//     console.log(arr3.includes(30));

function shubh( a,b ){
    this.prop1 = a;
    this.prop2 = b;
}
const shubham = new shubh(10, 20);
console.log(shubham);
