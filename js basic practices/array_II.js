// let arr1=[{no:1,naame:'anurag'}];
// let arr2=[{no:2,naame:'kumar'}];
// let combine=arr1.concat(arr2);
// console.log(combine);

// let slice=combine.slice(1);
// console.log(slice);
// //for of
// let arr=[1,2,3,4,5,6];
// // for(let i of arr){
// //     console.log(i);
// // }

// //for -each
// // arr.forEach(function(a){
// //     console.log(a);
// // })

// arr.forEach(a => console.log(a));


// @@@ join 
//  let num=[1,2,3,4];
//  let join=num.join(';');
//  console.log(join);

// split 
let mess='i am anurag kumar';
let part =mess.split(' ');
console.log(part);
let join=part.join(' ');
// console.log(join);

let number =[10,5,4,40];
let sorts=number.toSorted((a,b)=>a-b);
// console.log(sorts);

// @@@  filtering arrays

// let x=[1,2,-1,-4];
// let filter=x.filter(function(val){return val>=0});
// let filter=x.filter((val)=> val>=0);
// console.log(filter);

// @@@ mapping with object

let y=[1,2,3,-6,-4];
// let f=y.filter((val)=> val>=0);

// let iteam=f.map(function(num){
//     return{val:num};
// });

//by chaining
let iteam=y.filter((val)=> val>=0).map((num)=> {return{ val:num}});

console.log(iteam);