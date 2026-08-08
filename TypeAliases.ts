/**
 * Type Aliases: Used to create a custom name for any type, including primitives or unions.  Unlike interfaces, you cannot define two types with the same name in the same scope
 */

type value = string | number | null

let a:value; // It can be any type in between string, number or null. So here type aliases is useful

function abcd(obj: value){

}

//abcd(true); it will show error as the type is declared either number , string or null not booleam