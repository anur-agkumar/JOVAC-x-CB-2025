let num=[1,2,3,4,5];

// end 
//num.push(6);
//begin
//num.unshift(0);
//middel
//num.splice(2,0,'a','b');

//console.log(num);

//search
//console.log(num.indexOf(3,0));



//@@  for object and refences  to find element present or not

//way 1: 

let courses=[
    {no:1 ,name1:'anurag'},
    {no:2,name1:'kumar'}
];
// let ans=courses.find(function(a){
//                 return  a.name1=='kumar';     // write logic 
// })

// console.log(ans);

// differnt logic 

// let ans2=courses.find(function(a){
//     if(a.name1=='kumar'&& a.no==1){
//         console.log(true);   
//     } 
//     else{
//         console.log(false);   
//     }
// })

// way 2:  using arrow fuction 

// let ans=courses.find((cou)=> cou.name1==='anurag');


let ans = courses.find(function(a) {
    console.log(a); // Print each element during iteration
    
});

// removing element : in notes primitive 

//combining and slicing arrays
 let mark=[1,2,3,4,5,6];
 let sliced=mark.slice(2,5);
//  let sliced=mark.slice(); it make its copy not point to adderres 
 console.log(sliced);
 console.log(mark); 






