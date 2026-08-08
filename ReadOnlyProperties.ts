class User{
    constructor(public  readonly name: string, public number: number, public email: string){
    }
    // changeName(){
    //     this.name = 'Caad'; As the name is only readonly it will show error. It can only be the value passed through parameter 

    // }
}

const user = new User('Tithy', 123456, 'tithy@email.com')