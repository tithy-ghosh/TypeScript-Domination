"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    _name;
    age;
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    // getName(): string{
    //     return this._name
    // }
    get name() {
        return this._name; //Get properties must return a value. This is a property but act like getName method
    }
    //    setName(value: string){
    //     this._name = value
    //    }
    set name(value) {
        this._name = value; //This act like setName method
    }
}
const user1 = new User('Tithy', 21);
user1.name = 'Shrabony';
//# sourceMappingURL=Getter&Setter.js.map