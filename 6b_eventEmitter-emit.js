const EventEmitter = require("events")

class Poker extends EventEmitter {
    constructor(name) {
        super()
        this.name = name
    }
}

class PokerManager {
    listeners = []

    constructor() { }

    notify() {
        this.listeners.forEach(listerner => {
            // emits the 'poke' event to all the registered listeners
            listerner.emit("poke", "wake up!!!")
        })
    }

    register(user) {
        user.on("poke", (message) => {
            console.log(user.name + ": " + message)
        })
        this.listeners.push(user)
    }
}

var pm = new PokerManager()

// sim of 3 connected clients
var user1 = new Poker("nathan")
var user2 = new Poker("Juno")
var user3 = new Poker("Leon")


// register the instances of Poker class
pm.register(user1)
pm.register(user2)
pm.register(user3)

// sim of a broadcast message
pm.notify()
