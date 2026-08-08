/** Explicitly telling TS what the type is using the colon syntax (e.g., let a: number | string) */ 

let a: number | string | boolean

a = 12
a = '12'
a = true

//All these are allowed just because user has defined that the type of the variable can be number or string or boolean. '|' referes to the union

// a = [1, 2, 3] //It will show error as the it violates the type annotations defined by the user

/* We can defined type annotation to the function by  defining which types of parameter the function is taking as input and what type of things function will return*/

function abcd(a:number, b:string):void {
    console.log(a + b);
}