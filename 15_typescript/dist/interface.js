"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    firstName: 'Mohd',
    lastName: 'Sameer',
    email: 'mohdsameer789736@gmail.com',
    age: 17
};
function isLegal(user) {
    if (user.age < 18) {
        return false;
    }
    else {
        return true;
    }
}
const result = isLegal(user);
console.log(result);
