console.log("start");
setTimeout(function cbt() {
    console.log("cb timeout");
},5000);
fetch("https://www.example.com")
    .then(function cbF() {//promise
        console.log("CB Example");
    })
console.log("End");