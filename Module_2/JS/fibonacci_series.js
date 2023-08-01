function generateFibonacciSeries(n){
    var fibSeries=[0,1];
    for(var i=2;i<n;i++){
        fibSeries[i]=fibSeries[i-1]+fibSeries[i-2];
    }
    return fibSeries;
}
var count=10;
var fibonacciSeries=generateFibonacciSeries(count);
console.log("Fibonacci Series:");
console.log(fibonacciSeries);