// packages:
var path = require('path')
var serveIndex = require('serve-index')

// Create a new express app
var express = require('express')
var app = express()

// connection pool for postgre
const { Pool } = require('pg')

// Initialize the pool
var pool;
pool = new Pool({
    connectionString: 'postgres://nathan:123@localhost/cmpt372'
})

// Verify the database connection
pool.connect((err, client, done) => {
    if (err) {
        console.log('Error connecting to the database:', err.stack)
    } else {
        console.log('Connected to the database')
      }
    
})

// "process.env" is an object that contains all the Environment variables: 
// specify the port
var port = process.env.PORT || 8080

var usersArray = []

var testArrayForEJS = [
    {
        pid: 1,
        fname: "nathan",
        lname: "cool"
    },
    {
        pid: 12,
        fname: "juno",
        lname: "kong"
    },
]

// Options object to configure the behavior of the "express.static" middleware
var options = {
    // files and directories that start with a dot are hidden
    dotfiles: 'ignore',
    // list of file extensions
    extensions: ['htm', 'html', 'json']
}

// Parse incoming request bodies in JSON and URL-encoded data 
// into JS object
app.use(express.json())
app.use(express.urlencoded({extended: false}))

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

// 4. Set up EJS: template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/hello2', (req, res) => {
    // render the "hello.ejs" template with the "result" variable
    res.render('hello', {
            result: 'Hello World from EJS Template Engine!',
            users: testArrayForEJS
        })
})

// 5. Set up two route handlers 
// respond to GET and POST requests to the /users-api endpoint of URL
app.get('/users-api', (req, res) => {
    var getAllUsersQuery = `SELECT * FROM users`
    // Send in a query to connection pool
    pool.query(getAllUsersQuery, (err, result) => {
        // Error handling: err obj comes from DB
        if (err) {
            console.log(err)
            res.end(err) // display the error response
        }

        usersArray = result.rows
        // When you send a GET request to a server,
        // need to send back the objects (response) in JSON form and ends the request
        res.json(usersArray)
    })
})
app.post('/users-api', async (req, res) => {
    usersArray.push(req.body)

    var fname = req.body.fname
    var lname = req.body.lname
    var pid = req.body.pid
    try {
        var adduserquery = `insert into users (pid, fname, lname) values ($1, $2, $3)`
        const result = await pool.query(adduserquery,[pid,fname,lname])
        res.json(usersArray)
    } catch(err){
        res.end(err)
    }
})

// 6. Set up route handler for DELETE request
app.delete('/users-api/:id', async (req, res) => {
    // delete user:id
    // get the id of a path by accessing the "req.params" object
    var pid = req.params.id

    try {
        var deleteUserQuery = `delete from users where pid=$1`
        const result = await pool.query(deleteUserQuery, [pid])
        usersArray = usersArray.filter((user) => {
            return pid != user.pid
        })
        res.json(usersArray)
    } catch(err) {
        res.end(err)
    }
})

// respond to the GET request
app.get('/test', (req, res) => {
    // sends a response to the client and end the request
    res.send("Hello world from express!")
})

// respond to the POST request
app.post('/test2', (req,res) => {
    const {name, age} = req.body
    res.send(`Hello ${name}, you are ${age} years old!`)
})

// route handlers for POST request process-form
app.post('/process', (req, res) => {
    const {name, gender, hobbies} = req.body
    res.send(`Name: ${name}<br>Gender: ${gender}<br>Hobbies: ${hobbies}`)
})

// Port we are listening on
app.listen(port, function() {
    console.log(`app is running on port ${port}`)
})




