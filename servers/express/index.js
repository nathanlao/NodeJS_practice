// packages:
var path = require('path')
var serveIndex = require('serve-index')

// Create a new express app
var express = require('express')
var app = express()

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
// 3.  Logs incoming requests to the console
app.use('/', function(req, res, next) {
    console.log(req.method, 'request for:', req.url, JSON.stringify(req.body))
    next() // pass control to the next middleware function
})

// Parse incoming request bodies in JSON and URL-encoded data 
// into JS object
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// 4. Set up EJS: template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/hello2', (req, res) => {
    res.render('hello', {result: 'Hello World from EJS Template Engine!'})
})

// Port we are listening on
app.listen(port, function() {
    console.log(`app is running on port ${port}`)
})




