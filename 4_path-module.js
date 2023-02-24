var path = require('path') // import path object

// return the current path obj
var obj = path.parse(__filename) // __filename -> current dir / file
console.log(obj)

console.log(path.dirname(__filename))


// Join path together
console.log(path.join(obj.dir, "foo", "bar", "2"))



