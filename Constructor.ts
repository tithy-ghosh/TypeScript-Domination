/**
 * Constructor: Special methods that run automatically when a new instance of a class is created.  Basically the constructor is the creator of class. Like the human creator is the constructor and humans are the class.
 */


class BottleMaker{
    constructor(public name: string, public price: number){

    }
}
//When class is being run at first the constructor runs

const bottle = new BottleMaker('Riverview', 20)

class HumanMaker{
     age = 0
    constructor (public name: string, public gender: string,){

    }
}

let human = new HumanMaker('Tithy', 'Female')

class Music {
    constructor(public name: string, public artist: string, public thumbnail: string, public length: number, public free: boolean){

    }
}

const music1 = new Music('Amake amar moto thakte dao', 'Anupom Roy', 'something.jpg',300, true)