const grandparent = document.getElementById('grandparent');
const parent =  document.getElementById('parent');
const child = document.getElementById("child");

grandparent.addEventListener('click',()=>{
    console.log("GRANDPARENT DIV CLICKED");
},true);

parent.addEventListener("click",()=>{
    console.log("PARENT DIV CLICKED");
},true)

child.addEventListener("click",()=>{
    console.log("CHILD DIV IS CLICKED")
},true)