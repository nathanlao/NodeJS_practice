/**
 * 
 * Unique architecture, which is based on an `event loop` and `callbacks`
 * 
 * Node.js is an asynchronous, event-driven, non-blocking I/O platform, 
 * it is designed to handle multiple requests concurrently without blocking
 * 
 */

console.log("hello")
var a = setTimeout(callback1, 2000)
var b = setTimeout(callback2, 1000)
console.log("world")

function callback1() {
    console.log("I am callback1")
}

function callback2() {
    console.log("I am callback2")
}