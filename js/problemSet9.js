class Rectangle{
    height = 0
    width = 0
    constructor(height , width) {
        this.height = height
        this.width = width
    }
    area(){
        return (this.width * this.height)/2
    }
    environment(){
        return this.width * 3
    }
}

const area = new Rectangle(10 , 15).area()
console.log(area)
//////////////////////////////////////////////////////////////////////////////

class Person {
    fName = null
    lName = null
    age = null
    degree = null
    phoneNumber = null
    id = null
    constructor(firstName,lastName) {
        this.id = this.generateId()
        this.fName = firstName
        this.lName = lastName
    }
    generateId (){
        const dateString = Date.now().toString(36);
        const randomness = Math.random().toString(36).substring(2);
        return dateString + randomness;
    }
    set setAge(age){
        this.age = age
    }
    set setDegree(deg){
        this.degree = deg
    }
    set setPhoneNumber(phoneNumber){
        this.phoneNumber = phoneNumber
    }
    get info(){
        return `name  : ${this.fName} ${this.lName} \nage: ${this.age} \ndegree : ${this.degree} \nphone number : ${this.phoneNumber}`
    }

}

const person = new Person("Sahar" , "Hallaji")
person.setAge = 21
person.setDegree = "bachelor"
person.setPhoneNumber = "0913"
console.log(person.info)
