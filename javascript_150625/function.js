// TOPIC: TO ANALYZE THE BEHAVIOR IN NAMED FUNCTION IN EXPRESSION

  
// Case 1:functions with return value---------------------------

function sumOfTwo(a,b){
        let ans = a+b;
        return ans;
    }

let sumOfTwoBy = sumOfTwo(2,3);
console.log(sumOfTwoBy);

// Case 2: functions with no return value---------------------------

function sum(a,b){
    console.log(a+b);
}

sum(2,3);

// Case 3: Arrow function---------------------------

var name = () =>{
        console.log("anurag")
    }
    
console.log(names);     // it shows the function  [Function: name]
    
console.log(names());   // it shows the return value of the function  anurag,undefined
    
names();    //anurag