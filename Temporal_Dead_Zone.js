// console.log(a); 
/*
it will give error because it is stored in seperate memory space and
untill any value isn't initalized it is in temporal dead zone also it will give reference error 
which means it does not find any refernce in particular scope
*/ 
console.log(b);     // it is stored in global space and will give undefined (Hoisted)
let a=10;           // any line for a before this line is temporal dead zone for a 

/*
let also does not allow redeclaration
if in any case we redeclare let variable it will give error and will not execute a single line of code
*/

console.log(a);

var b=100;


console.log(b)