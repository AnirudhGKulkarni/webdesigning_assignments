let nos=[1,2,3,4,5];
console.log("The initaial array is:",nos);
//shift method
let fno=nos.shift();
console.log("Array after shift:",nos);
console.log("The no. got shifted:",fno);
//unshift
nos.unshift(10);
console.log("Array after unshift:",nos);
let nums=[1,2,3,4,5];
//nums.splice(1,4);
//console.log("Array after splice deletion:",nums);
nums.splice(2,0,11,12,13);//indexno.,no. of elements to replace,elements to insert
console.log("Array after splice insertion:",nums);
nums.splice(2,3);
console.log("Array after splice deletion:",nums);
nums.splice(0,5,11,12,13,14);
console.log("Array after splice replacement:",nums);