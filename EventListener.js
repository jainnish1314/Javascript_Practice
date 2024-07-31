//using closure with eventlistener 
function attachEventListener() {
    let count =0;
    document.getElementById("ClickMe").addEventListener("click" , function xyz(){//callback function
        console.log("Button Got Clicked",count++);
    });  
}
attachEventListener();
