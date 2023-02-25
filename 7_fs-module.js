const path = require("path")
const fs = require("fs")

// Create a file path by joining the file with the current dir
var filename = process.argv[2]
var filePath = path.join(__dirname, filename)
console.log(filePath)

/**
 * 
 * Reads the contents of the file (filePath) and logs it out
 * 
 * 
 * "fs.readFileSync()"
 * is a synchronous method that blocks the event loop 
 * until the file has been read completely.
 * 
 * 
 * For large files or in cases where performance is a concern, 
 * it's better to use the asynchronous fs.readFile() method 
 */
var contents = fs.readFileSync(filePath)
console.log(contents.toString())