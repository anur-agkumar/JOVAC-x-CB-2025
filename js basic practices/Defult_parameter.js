// defult parameter
function interest (p,r=2,y=7){ // r is become defult parameter then parameter onward r all become defult parameter 
    return (p*r*y)/100;
}
console.log(interest(1000,6)); 

// getter and setter

// getter -> access properties
// setter -> change or mutate properties

let person ={
    fname :'anurag',
    lname :'kumar',
    get fullname(){ //  it not fuction it is properity
        return `${person.fname} ${person.lname}`;
    },
    set fullname(val){
        let part=val.split(' ');
        this.fname=part[0];
        this.lname=part[1];
    }
};
// person.fullname='anur kumar' // if use then  it act as setter
console.log(person.fullname); // getter