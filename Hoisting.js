getName();// prints hello world!!
console.log(x);// print undefined
console.log(getName);// return function

var x=7;
function getName() {
    console.log("hello world!!");
}

var getName2 = () => {
    console.log("hello world from arrow function!!");
}
getName(); // prints hello world!!
console.log(x);// return 7
console.log(getName);//return function
