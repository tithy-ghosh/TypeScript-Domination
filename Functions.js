"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greetings() {
    return 'Hello'; //It can return only string type
}
function Void() {
    //it returns nothing
}
//using callback
function abcd(name, callback) {
}
//Trick for memorizing
// abcd('Tithy', (value: string) =>{
//     console.log (value);
// })
function abcdef(name, age, callback) {
}
//Rest Parameters
function sum(a, b, c, d, e, f) {
    return a + b + c + d + e + f;
}
sum(1, 2, 3, 4, 5, 6); //It will work but its a tiring process here comes the use of Rest parameters.
function sum1(...args) {
    console.log(args);
}
//# sourceMappingURL=Functions.js.map