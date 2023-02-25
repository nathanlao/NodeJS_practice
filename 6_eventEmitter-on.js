var EventEmitter = require("events")

class Person extends EventEmitter {
    constructor(name, age) {
        super() // calls the constructor of the parent class, EventEmitter
        this.name = name
        this.age = age
    }
}

var person1 = new Person ("Nathan", 25)

// registers an event listener for the "poke" event using .on()
person1.on("poke", function(name) {
    console.log(`${name}: wake up!`)
})

// emit() the "poke" event and called with argument "nathan", logs the msg
person1.emit("poke", "nathan")