{
    let a=10;
    var b=20;
    const c=30;
    console.log("From Block");
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log("From Outside Block");
// console.log(a); ReferenceError: a is not defined
console.log(b);
// console.log(c); ReferenceError: c is not defined