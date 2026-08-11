//Generics allow you to create reusable components that work with various types while maintaining safety.
//Generic Function
function abcd<T>(a: T){} //The type of the function will be 'T';


abcd<string>('Tithy') //The T is being told to be treated as string

function abcde<H>(a: H, b:string, c:number){}

abcde<number>(12, 'Tithy', 4);

//Generic Interface

interface User<K>{
    name: string;
    age: number;
    key: K;
}

function user (obj: User<string>){
    obj.key.concat//All string method appears.
}

user({ name: 'tithy', age: 21, key:'askjhdkasjhd' })

//Genrics Class
class BottleMaker<T>{
    constructor(public key: T){

    }
}
 let bottle = new BottleMaker<string>('Hey')

 let bottle2 = new BottleMaker <number>(12)

 //Exception

 function Username<T>(a: T, b: T): T{
    // return 'Hey'; Though it is string but it will show error. Cause typescript consider a string is a string literal. But the return type is generics.
    return a; //It will work perfectly
    return 'Hey' as T;
 }

 Username<string>('Hey', 'Hello');