//Public modifier

class BottleMaker{
    public name;
    constructor( name: string){
        this.name = name;
    }
}

let b1 = new BottleMaker('Riverview')
b1.name = 'Kinley' //This is fully correct and the name of bottle will be replaced to kinley from riverview. Cause the modifier is declared public and it can be accessed or modified from anywhere

class HumanMaker{
    private name;
    constructor(name: string){
        this.name = name;
    }
}

let h1 = new HumanMaker('Tithy')
//h1.name = "Shrabony"; This one will show error as the name is only accessible with in the class cause it is private. But according to ts it will work after showing error 

//protected: Accessible within the class and its subclasses.