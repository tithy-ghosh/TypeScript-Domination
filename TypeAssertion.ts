 let a: any = '12';

(a as string).at(0); // All the methods regarding string appear
 (a as boolean).valueOf();//All the methods regarding boolean

 /**
  * Type assertion is mainly assuring the type of a variable to the ts. Means you know the types of the variable more than the ts
  */
 (<number>a).toExponential()