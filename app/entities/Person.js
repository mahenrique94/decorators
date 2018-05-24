import { entity, log, readonly } from "../utils/decorators"

@log
@entity
class Person {

    constructor(name) {
        this.name = name
    }

    @readonly
    hi() {
        return `Hello dude, my name is ${this.name}!`
    }

}