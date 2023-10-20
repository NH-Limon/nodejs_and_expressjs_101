const person = {
  name: "Limon",
  age: 21,
  profession: "Student",
};

const country = "Bangladesh";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName() {
    console.log(this.name);
  }
  showAge() {
    console.log(this.age);
  }
}

module.exports = { person, country, Person };
