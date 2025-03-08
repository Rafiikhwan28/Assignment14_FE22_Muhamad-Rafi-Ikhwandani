"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wrapInArray(item) {
    return Array.isArray(item) ? item : [item];
}
console.log(wrapInArray(15));
console.log(wrapInArray("Hello Bro"));
console.log(wrapInArray(true));
console.log(wrapInArray(false));
console.log(wrapInArray({ name: "Rafi", age: 20 }));
console.log(wrapInArray([20, 40, 80]));
