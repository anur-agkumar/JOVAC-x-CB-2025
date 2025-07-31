console.log('helloworld');

let a=1;
let s='1';
console.log(s===a);
let age =-1;
// let statuS=(age>=18)?'i can vote':'canot vote';

// console.log(statuS);
// // not with boolean 
// console.log(4||false||1);
// console.log(true&&4&&0&&false&&1);
// if(age>18){
// console.log('ready to give vote');
// }
// else if(age==18){
//     console.log("apply to voter id :)");
// }
// else{
//     console.log("not yet ready for vote")
// }
//  * switch(true){
//     case age==18:console.log('apply first');
//     break;
//     case age>18:
//         console.log("ready to vote");
//         break;
//     case age<18 && age>0:
//         console.log("not yet ready for vote")
//         break;
//     default:
//         console.log("application rejected");    
//     }
    
//     for(let i=0;i<10;i++){
//         console.log(i); 
//     }
//      // from lec 2
// * for in loop
     let rectangle={
        length:2,
        breath:4
     };
//      for(let key in rectangle){
//         console.log(key,' : ',rectangle[key]); // rectangle[key] --> value
//      }

// for of loop 

    //  let x=[10,2,3,4];
    //  for(let i of x){
    //     console.log(i);
    // }


    console.log(Object.keys(rectangle)); // print array of key of object 

    for(let i of Object.keys(rectangle)){         // use enteties at place of keys for key value pair 
        console.log(rectangle[i]);// for value
        console.log(i); // for key
    }


// * in key word

if('color' in rectangle){
    console.log('present ');

}
else{
    console.log('absent');
}