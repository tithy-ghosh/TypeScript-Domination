"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Payment {
    amount;
    account;
    constructor(amount, account) {
        this.amount = amount;
        this.account = account;
    }
    getvalidatedAmount(amount) {
        return this.amount > 0;
    }
}
// const paytm = new Payment(); As the class is abstract it cannot be instantiated. It only can be extended by another class
class paytm extends Payment {
}
//# sourceMappingURL=AbstractClass.js.map