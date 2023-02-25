// packages:
// Create a new express app
var express = require('express')
var app = express()

var serveIndex = require('serve-index')

// "process.env" is an object that contains all the Environment variables: 
// specify the port
var port = process.env.PORT || 8080

// Options object to configure the behavior of the "express.static" middleware
var options = {
    // files and directories that start with a dot are hidden
    dotfiles: 'ignore',
    // list of file extensions
    extensions: ['htm', 'html', 'json']
}

// Register middleware functions:
// 1. Serves static files from "./pub_html" when incoming requests are made to the root "/"
app.use('/', express.static('./pub_html', options))
// 2. Serves a directory listing of "./pub_html/static-files" directory for the path "/static-files"
app.use('/static-files', serveIndex('./pub_html/static-files', {'icons': true}))

// Port we are listening on
app.listen(port, function() {
    console.log(`app is running on port ${port}`)
})




