"use strict";
/**
 * Constructor: Special methods that run automatically when a new instance of a class is created.  Basically the constructor is the creator of class. Like the human creator is the constructor and humans are the class.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class BottleMaker {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
//When class is being run at first the constructor runs
const bottle = new BottleMaker('Riverview', 20);
class HumanMaker {
    name;
    gender;
    age = 0;
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}
let human = new HumanMaker('Tithy', 'Female');
class Music {
    name;
    artist;
    thumbnail;
    length;
    free;
    constructor(name, artist, thumbnail, length, free) {
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free;
    }
}
const music1 = new Music('Amake amar moto thakte dao', 'Anupom Roy', 'something.jpg', 300, true);
////------------------------------------------////
//This Keyword: Used within a class to refer to its own properties and methods
class Abcd {
    name = 'tithy';
    changeSomeStuff() {
        console.log(this.name);
    }
}
//# sourceMappingURL=Constructor.js.map