let a=100;
var b=200;
const c=300;

{
    let a=10;//this initialization will shadow the upper initalization
    var b=20;
    const c=30;
    console.log("From Block");
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log("From Outside Block");
console.log(a); 
console.log(b);
console.log(c); 