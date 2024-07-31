//as java is a sync single-threaded lang with the use of callback function we can do async things in js
//we are doing async things for the operations which take time
setTimeout(function(){ //callback function  
    console.log("timer");
},5000);
function a(b) {
    console.log("from a");
    b();
    
}
a(function b() {
    console.log("from b");
})