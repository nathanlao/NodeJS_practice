console.log("hello")
console.warn("Don't do that!") // output a warning msg
console.info("I am running") // output a informational msg

// Display tabular data as a table
tableData = [
    {
        "name": "nathan",
        age: 25
    },
    {
        "name": "Juno",
        age: 26
    },
    {
        "name": "Leon",
        age: 27
    }
]
console.table(tableData)

console.assert("2 > 1" === "2 < 1") // output error msg if the assertion is false

// Start a timer and stop a timer that was previousy started by console.time()
console.time("Tracker") // -> a label

setTimeout(function() {
    console.timeEnd("Tracker")
}, 1000)

