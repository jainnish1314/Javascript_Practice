function a() {
    var b=10;//b will be initalized with value 10
    c();// c function will be called
    function c() {
        console.log(b);// 10 will be printed
    }
}
a();//this will get executed 1st 