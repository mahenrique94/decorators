import { mixin } from "./base"

const entity = mixin({
    save() {
        console.log("Saving a new record for your database")
    }
})

const log = target => console.log(`Creating a new class called: ${new target().constructor.name}`)

const readonly = (target, key, descriptor) => {
    descriptor.writable = false
    return descriptor
}

export {
    entity,
    log,
    readonly
}