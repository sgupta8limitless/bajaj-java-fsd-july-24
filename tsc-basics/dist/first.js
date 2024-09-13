"use strict";
let firstname = "Saurabh";
let num = 23;
let state = true;
let idontknow = 23;
let names = ["Thor", "Ironman", "Hulk"];
let person = ["Saurabh", 23, "Mumbai"];
for (let i = 0; i < person.length; i++) {
    console.log(person[i]);
}
let student1 = {
    name: "Saurabh",
    age: 23,
};
class UserImpl {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displaydetails() {
        console.log(this.name, this.age);
    }
}
let user = new UserImpl("Laveen", 27);
user.displaydetails();
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Lion extends Animal {
    constructor(name) {
        super(name);
    }
    printName() {
        console.log(this.name);
    }
}
let lion = new Lion("Shera");
lion.printName();
