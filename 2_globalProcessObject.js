console.log(process.argv)

// Start a process listening on specified port or by default 8000
var port = process.argv[2] || 8000
console.log(typeof(port))
if (typeof(port) !== 'undefined') {
    console.log("success")
    console.log(`App is running on port ${port}`)
}
