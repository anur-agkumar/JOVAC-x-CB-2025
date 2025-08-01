const grandparent = document.getElementById('grandparent');
const parent =  document.getElementById('parent');
const child = document.getElementById("child");

grandparent.addEventListener('click', (e) => {
    e.stopPropagation();  // stop the event from bubbling up
    if (e.target === grandparent) {
        console.log("GRANDPARENT DIV CLICKED");
    }
});

parent.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target === parent) {
        console.log("PARENT DIV CLICKED");
    }
});

child.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target === child) {
        console.log("CHILD DIV IS CLICKED");
    }
});
