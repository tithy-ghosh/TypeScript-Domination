function greetings(): string{
    return 'Hello' //It can return only string type
}

function Void () : void {
    //it returns nothing
}

//using callback

function abcd(name: string, callback:(value:string) => void){

}

//Trick for memorizing

// abcd('Tithy', (value: string) =>{
//     console.log (value);
// })

function abcdef(name:string, age: number, callback: ()=> void){

}

//Rest Parameters

function sum( a:number, b: number, c:number, d: number, e:number, f:number):number{
    return a + b + c + d + e + f;
}
sum(1, 2, 3, 4, 5, 6) //It will work but its a tiring process here comes the use of Rest parameters.

function sum1(...args: number[]){
    console.log (args);
}

//Function Overloading

function abcd (a: string): void;
function abcd (a: string, b: number): number;

function abcd (a: any , b?: any){
    if(typeof a === 'string' && typeof b === undefined){
        return 'hey'
    }
    else if(typeof a === 'string' && typeof b === "number"){
        return 124;
    }
}