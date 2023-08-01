function findMaxNumber(numbers){
    var max=numbers[0];
    for (var i=1;i<numbers.length;i++){
        if(numbers[i]>max){
            max=numbers[i];
        }
    }
    return max;
}
var numbers=[10,5,8,15,3];
var maxNumber=findMaxNumber(numbers);
console.log("The maximum number is:"+ maxNumber);