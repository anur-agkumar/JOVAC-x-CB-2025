
// let person ={
//     fname :'anurag',
//     lname :'kumar',
//     get fullname(){ 
//         return `${person.fname} ${person.lname}`;
//     },
//     set fullname(val){
//         if(typeof val!== String){
//             throw new Error("!!! error from setter property :(")
//         }
//         let part=val.split(' ');
//         this.fname=part[0];
//         this.lname=part[1];
//     }
// };
// try{
//     person.fullname=1 ;
// }
// catch(e){
//     alert(e)
//     // alert("!!! error from setter property :(");

// }
// console.log(person.fullname); 

// let vs var 

function sum(){
    var a=1;
    return a;
}

let a=9;
console.log(a);
console.log(sum());
// reduce array 
 