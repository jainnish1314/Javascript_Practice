function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    a=100;
    return y();//return closure function + lexical scope
}
var z= x();
console.log(z);
x();