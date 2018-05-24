import Person from "./entities/Person"

const matheus = new Person("Matheus")
const helloPhrase = matheus.hi()
console.log(helloPhrase)

matheus.save()

// matheus.hi = () => "I'm a modified phrase"
// const anotherPhrase = matheus.hi()
// console.log(anotherPhrase)