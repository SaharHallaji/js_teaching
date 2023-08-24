class DateFormatter extends Date {
    getFormattedDate() {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
    }
}

console.log(new DateFormatter('August 19, 1975 23:15:30').getFormattedDate());
// Expected output: "19-Aug-1975"

///////////////////////////////////////////////////
class Square {
    constructor(width, height, color) {
        this.width = width
        this.height = height
        this.color = color
        this.count = 0
    }

    get area() {
        this.count++
        return this.width * this.height
    }

    set area(area) {
        this.width = Math.sqrt(area)
    }


    static equals(a, b) {
        return a.width * a.height === b.width * b.height
    }

    static isValid(width, height) {
        return width === height
    }
}

let square1 = new Square(10, 10, "blue")
let square2 = new Square(8, 8, "red")
console.log(square1.area)
square1.area = 16
console.log(Square.equals(square2, square1))
console.log(Square.isValid(15, 15))

////////////////////////////////////////////////////////////////////////

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    describe() {
        console.log(this.name + " " + this.age)
    }
}

class Programmer extends Person {
    constructor(name, age, yOfExp) {
        super(name, age);
        // custom behavior of the programmer

        this.yearOfExp = yOfExp
    }

    code() {
        console.log(`${this.name} is coding ...`)
    }
}

let person1 = new Person("sahar", 21)
let programmer1 = new Programmer("dany", 45, 10)
programmer1.code()
programmer1.describe()

const programmers = [
    new Programmer("dom", 54, 12),
    new Programmer("dany", 15, 2)
]

function showText(programmers) {
    for (const key of programmers) {
        programmer1.code()
    }
}

///////////////////////////////////////////////////////////////////////// polymorphism

class Animal {
    constructor(name) {
        this.name = name
    }
    makeSound(){
        console.log("Generic Anima Sound !!!!")
    }
}

class Dog extends Animal{
    constructor(name) {
        super(name);
    }

    makeSound() {
        console.log("hop hop :) ")
        super.makeSound()
    }

}
const animal1 = new Animal("monkey")
animal1.makeSound()
const dog = new Dog("chico")
dog.makeSound()






































































