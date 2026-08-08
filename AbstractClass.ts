abstract class Payment{
    constructor(protected amount: number, protected account: number){
        
    }
    getvalidatedAmount(amount:number){
        return this.amount > 0;
        }
}

// const paytm = new Payment(); As the class is abstract it cannot be instantiated. It only can be extended by another class

class paytm extends Payment{
     
}