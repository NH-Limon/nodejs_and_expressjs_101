// Importing and exporting own created modules

const { person, country, Person } = require("./person");

const person1 = new Person("Nahid Hasan Limon", 21);
person1.showName();
person1.showAge();

console.log("--------");
console.log(person.name);
console.log(person.age);
console.log(person.profession);
console.log(country);
