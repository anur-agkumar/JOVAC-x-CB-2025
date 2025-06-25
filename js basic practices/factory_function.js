// let rec={c:2
//     ,d:3,
//     e:4,

//     draw(){
//         console.log('drawing rec');
//     }
// };
// print when type  'a' in consol

/// factory function
// function createRectangle(){
//     let rec={c:2
//         ,d:3,
//         e:4,
    
//         draw : function(){
//             console.log('drawing rec');
//         }
//     };
//     return rec;
// }
// let rec2=createRectangle();
// let e={}; ///empty 

// use parameter 
function createRectangle(length,breath){
    let rec={
        //way 01 

        // l:length
        // ,b:breath,

        //way 02
        length,
        breath,
    
        draw : function(){
            console.log('drawing rec');
        }
    };
    return rec;
}
let rec2=createRectangle(0,3);