"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person1 = { firstName: "Rafi", lastName: "Dani" };
console.log(getFullName(person1));
