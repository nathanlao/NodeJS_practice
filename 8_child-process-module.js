const cp = require("child_process")
const os = require("os")

var username = "nathan"

if (os.platform() === "darwin") {
    // make sure the file path is correct...
    cp.execFile("/Users/Nathan/Documents/GitHub/NodeJS_practice/8.1_hello.sh", [username], function(err, stdout, stderr) {
        // Error handling
        if (err) {
            console.log(err);
        }
        console.log(stdout)
    })
} else {
    console.log(`can't run on ${os.platform}, ${os.release}`)
}