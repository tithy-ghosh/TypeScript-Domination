"use strict";
// If we declare any property by static it will belongs to only class not the instance. So there need not to be create extra instance for staticmembers.
Object.defineProperty(exports, "__esModule", { value: true });
class Founder {
    static name = 'Tithy'; // It can be accessed directly without creating instance
}
class RandomNumber {
    static getRandomNumber() {
        return Math.random();
    }
}
RandomNumber.getRandomNumber();
const founder1 = new Founder(); //It will not contain static members
//# sourceMappingURL=StaticMembers.js.map