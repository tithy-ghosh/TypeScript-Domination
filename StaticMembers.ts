// If we declare any property by static it will belongs to only class not the instance. So there need not to be create extra instance for staticmembers.

class Founder{
    static name: string = 'Tithy'// It can be accessed directly without creating instance

}

class RandomNumber{
    static getRandomNumber(): number{
        return Math.random()
    }
}

RandomNumber.getRandomNumber()

const founder1 = new Founder() //It will not contain static members