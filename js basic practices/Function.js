function re(){
    //console.log("hellowo");
};
re();
// named fuction assignment
let s=function walk(){
    //console.log("asdfg");
};
s();
// but not call walk();
// s() canot access befor decleration 

let jump=s;
jump();

// anonymous fuction
let s2=function (){
    //console.log("asdfg");
}; 
let y=s2;
y();

// @@ 
function sun(a,b){
    // argument #
    console.log(arguments);

    return(a+b);
}
//case 1 : (a,b) if only one vale of variable intialise or assigne
console.log(sun(1));    // NaN
console.log(sun());    // NaN
//cas2 :multiple parameter 
console.log(sun(1,2,3,4));    // 3 =1+2 

// where multiple parameter stores => in Arguments
// Arguments is object in key value pair not an array 


//cas2 :multiple parameter  and extra parameter sum or acces it
function sun2(){
    // argument #
    let total=0;
    for(let val of arguments){
        total=total+val;}
         return total
        
}

console.log(sun2); // dynamicall and perform sum for any nuber of parameter 

// reset operator

function sums(a,...args){ // all input store in args name variable
                        //  in form of array
    console.log(args);
    console.log(a);
    // rest parameter should be last parameter 
}
sums(1,2,3,5,2,5,2);
