//creating a nested object representing a person and
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main Steet",
        city: "New York",
        state: "NY",
        zipCode: "10001"
    },
    occupation: "Engineer"
};
//Accessing properties of the main object
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.occupation);

//Accessing properties of the nested object
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.state);
console.log(person.address.zipCode);
