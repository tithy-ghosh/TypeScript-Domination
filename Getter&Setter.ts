class User {
    constructor(public _name: string, public age: number){

    }
    // getName(): string{
    //     return this._name
    // }
   get name(): string{
    return this._name //Get properties must return a value. This is a property but act like getName method
   }

//    setName(value: string){
//     this._name = value
//    }
   set name(value: string){
    this._name = value //This act like setName method
   }
}

const user1 =  new User('Tithy', 21)

user1.name = 'Shrabony'
