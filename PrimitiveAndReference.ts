/** TS divides data into two main categories: Primitives and References
 * Primitives: Include number, String, and boolean. They are copied directly by 
 * Reference: Include arrays, objects, and functions(identified by '[]', '{}', '()').These store a reference to the data. Changing a copied reference often affects the original parents
  */ 
var a = true  //primitive
var b = [1, 2, 3, 4] //Reference

var c = b //The value of c is not equal to the value of b. In the c goes a reference of b.