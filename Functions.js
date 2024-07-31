var x=1;    //will just initalize the variable 
a();        // prints 10 first
b();        // print 20 secondly 

console.log(x);     //will print 1
function a() {
    var x=10;
    console.log(x);
}
function b() {
    var x=20;
    console.log(x);
}
//--------------------------------------------------------------------------------------------------
x();//this won't give error as it will create a seprate memory space and execute a function
// y(); this line will give error as it is declared as variable and will store undefined in memory 

//Function Statement && function declaration
function x() {
    console.log("this is function stmt");    
}
//--------------------------------------------------------------------------------------------------
//Function Expression

var y=function () {
console.log("this is function expression")
}
//--------------------------------------------------------------------------------------------------
//anonymous functions(function without name)
/*
function(){

}

this is syntax of anonymous function it is used when we have to use function as a value or assign some value
the ability to use functions as values is called as first class functions
*/
//--------------------------------------------------------------------------------------------------

//named function
var y=function xyz () {
    console.log("this is function expression")
    }
// we cannot access this xyz() from outside but can be called inside the function