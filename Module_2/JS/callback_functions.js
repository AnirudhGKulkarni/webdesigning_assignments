function greet(name){
    console.log("Hello,"+name+"!");
}
function
sayHelloWithDelay(callback){
    setTimeout(function(){
        callback("John");
    },2000);
}
sayHelloWithDelay(greet);