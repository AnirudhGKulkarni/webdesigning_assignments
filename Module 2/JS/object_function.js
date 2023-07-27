//Creating an object using object literal notation
const person = {
    firstName: "Anirudh" ,
    lastName: "Kulkarni" ,
    age: "19" ,
    qualification: "Student" ,
    // Method inside the object
    sayHello: function() {
        console.log(`Hello, my name is ${this.firstName}
        ${this.lastName}. I am ${this.age}years old`);
    }
};
// Accessing object properties using dot notation
console.log(person.firstName); //Output: Karthik
console.log(person.lastName); //Output: K M
console.log(person.age); //Output: 19
console.log(person.qualification); //Output: Student
// Accessing object properties using bracket notation