//creating an object using object literal notation
const person =
{
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Engineer",

    //method inside the object
    sayHello: function ()
    {
        console.log('Hello, my name is ${this.firstName}${this.lastName}. I am ${this.age} years old.');
    },
};
//Accessing object properties
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.occupation);
person.sayHello();

//www.school certificate--HTML,css--complete