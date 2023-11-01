const number = (a, b) => {
    a = 5
    b = 4
    return a + b
}
console.log(number())

const person1 = {
    name: 'Abylay',
    age: 21
}
const ageS = 12
function increaseAge(people) {
    people++
    return people
}
const ageC = increaseAge(ageS)
console.log(ageC)

function printName() {
    console.log(person1.name)
}
setTimeout(printName, 5000)

const profile = {
    userName: 'Abylay',
    age: 21
}
const { userName, age } = profile
console.log(userName)
console.log(profile)

const fruits = ['apple', 'orange', 'banana']
const [fruit1, fruit2] = fruits
console.log(fruit2)
console.log(fruits)
console.log(fruit2 === fruits[0] ? fruit1 : 'not equal')

class Car {
    constructor(make, model) {
        this.make = make;    // Property
        this.model = model;  // Property
    }

    drive() {
        console.log(`Driving the ${this.make} ${this.model}`);  // Method
    }
}
const car1 = new Car('Lexus', 'Rx')
console.log(car1.drive())
//

