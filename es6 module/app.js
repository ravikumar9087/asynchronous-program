import { firstName } from "./utils/firstName.js";

import { age } from "./utils/age.js";

import { Person } from "./utils/person.js";

console.log(firstName, age);

const person = new Person("ravi","kumar", 20)
console.log(person);
person.info();