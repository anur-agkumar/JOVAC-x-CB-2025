// constructor function
// use pascal notation 
// function Rec(len,bre){
//     this.length=len;
//     this.breath=bre;
//     this.draw= function() {
//         console.log("i amin fuction")
//     }
// }
// let rectangle=new Rec(4,5);
// // Dynamic nature of object ...

// // adding new element 
// rectangle.color='yellow';
// console.log(rectangle);
// // remove element
// delete rectangle.color;
// console.log(rectangle);

// what Funtion(in-build constructor) do?

let Rec1=new Function(
    'len','bre',
    ` this.length=len;
     this.breath=bre;
       this.draw= function() { 
       console.log("i amin fuction")}`
    );
 let rect=new Rec1(1,2);
console.log(rect.length);