// Create a custom module (class)
module.exports = class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    descriptor() {
        return this.name + " " + this.age
    }
}