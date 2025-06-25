// let name=new String ("anurag "); // object 
// let name1='anurag';
// console.log(name1.indexOf('a'));

// console.log(name1.includes('a'));
// console.log(name1.startsWith('a'));
// console.log(name1.endsWith('a'));
// console.log(name1.toUpperCase());
// console.log(name1.trim());
// console.log(name1.replace('anur','x'));
// console.log(name1.split('a'));

// escape sequence

let messesge ="anunurag \nis \"good\" boy ."; 
//  \n use for nextline
//  \" use for "
//  \' use for '
console.log(messesge);

// templet literal :
//  use to print any string as you wand without using back tick
  
let messesges=`anurag 
kumar "is goodby" \`gm `;
console.log(messesges);

//date and time 

// let date=new Date();
// let date=new Date('june 20 2050 07:12');
let date=new Date(2000 ,11,20,7); //  month ki indexing 0 se start hai

date.setFullYear(1888); // overright the year date  ... 
date.getHours();        // to recive 
console.log(date); // current date 
