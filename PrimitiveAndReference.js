"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** TS divides data into two main categories: Primitives and References
 * Primitives: Include number, String, and boolean. They are copied directly by
 * Reference: Include arrays, objects, and functions(identified by '[]', '{}', '()').These store a reference to the data. Changing a copied reference often affects the original parents
  */
var a = true; //primitive
var b = [1, 2, 3, 4]; //Reference
var c = b; //The value of c is not equal to the value of b. In the c goes a reference of b.
// Number
let x = 12;
let y = 12.232;
// x = 'tithy' // You cant assign a new types in same variable. It will show ts error
// String
let s = 'tithy';
//  Boolean
let t = true;
// Array
let arr = [1, 2, 3];
// Type declaration
//let arr1 : Number = [1, 2, 3, 'tithy'] //It will show error as there as already been declared that the type of array would be number it cannot contain a string
// Tupple: Arrays with a fixed size and predefined types for each position (e.g., [string, number])
let arr2 = ['tithy', 21]; //In the 0th index the member has to be string and in the 1th index the member has to be a number otherwise it will show a error
// Enumerations: Allow you to define a set of named constants (key-value pairs)
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
UserRoles.ADMIN;
// Any: A type that allows any value. It essentially turns off type checking and should be avoided to maintain the benefits of TS.
let A;
A = 12;
A = 'tithy';
A.toUpperCase(); //It basically a complicated
// Unknown:A safer alternative to any. It requires you to perform type checking before you can act on the variable
let B;
B = '12';
B = 'tithy';
// B.toUpperCase(); It will show error as it checks types before executing
if (typeof B === 'string') {
    B.toUpperCase();
}
// Void : Specifically used as a return type for functions that do not return a value.
function abcd() {
    console.log('hello');
}
// Must declare using type what things function will return
//# sourceMappingURL=PrimitiveAndReference.js.map