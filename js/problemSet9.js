class Person {
    fName = null
    lName = null
    age = null
    phoneNumber = null
    degree = null
    id = null

    constructor(firstName, lastName) {
        this.fName = firstName
        this.lName = lastName
        this.id = this.generateId()
    }

    generateId() {
        const dateString = Date.now().toString(36);
        const randomness = Math.random().toString(36).substring(2)
        return dateString + randomness;
    }
    set setAge(age) {
        this.age = age
    }

    set SetNumber(number) {
        this.phoneNumber = number
    }

    set setDegree(deg) {
        this.degree = deg
    }

    get info() {
        return `name: ${this.fName} ${this.lName} \nage: ${this.age} \ndegree: ${this.degree} \nphone number: ${this.phoneNumber}`
    }
}

const person = new Person("sahar" , "hallaji")
person.setDegree = "bachelor"
person.setAge = 21
person.SetNumber = "0913"
console.log(person.info)