var users = []

function nextUser() {
    process.stdout.write("\nNext user (exit to quit): ")
}

// listen for data stream event, receive data stream until exit
process.stdin.on('data', function(data) {
    if (data.toString().trim() !== "exit") {
        users.push(data.toString().trim())
        nextUser()
    } else {
        process.exit()
    }
}) 

// listen for exit event, exits the process and print users array
process.on('exit', function() {
    users.forEach((user) => {
        console.log(user)
    })
})

nextUser()