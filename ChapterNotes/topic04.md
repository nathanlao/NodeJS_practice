# Server-Side Scripting (NodeJS)
### Client Side vs. server Side Scripting
- Client side: 
    - code is executed in a `user's browser`
    - JavaScript, HTML, and CSS
    - used to create `dynamic web pages` that respond to user interactions
- Server side:
    - code is executed on a `web server`
    - PHP, Python, Ruby, and Node.js
    - used to create web applications that `store` and `process data`

- Server side script resources
    - script input (PHP code) `interfaces` with:
        - Database
        - Web Service (APIs, dynamic data)
        - Files
        - Email
        - other software

### What Is Server-Side Development?
####  Server-Side Technologies
- Server-side language to support collecting data:
    - ASP (Active Server Pages) / ASP.NET
    - JSP (Java Server Pages)
    - Node.js (15-20% market share)
    - Perl (70-80% market share)
    - PHP (70-80% market share) -> framework: Laravel
    - Python -> framework: Flask / Django
    - Ruby on Rails

## NodeJS
- JavaScript Framework
- a development framework based on Google’s V8 JavaScript engine

### Why NodeJS?
- JavaScript end-to-end
    - adv: client / server side `code consistency`
- Event-driven scalability
    - run on `single process`
    - handle large numbers of concurrent connections without blocking
- Extensibility
    - `NPM`: node package manager -> community based pack manager
    - express package
- Reusability 
    - code reuse to apply to other problems

### How it works?
- Blocking web server:
    - aka `synchronous server`
    - handles each incoming request `one at a time`, and it waits for each request to be completed before moving on to the next one

- Non-blockiong web server:
    - aka `asynchronous server`
    - handles requests `concurrently`, without waiting for each one to be completed before moving on to the next

### Node.js's architecture
- By default, `Node.js` is an `asynchronous`, `event-driven`, `non-blocking` I/O platform
- designed to handle `multiple requests concurrently` without blocking
- unique architecture, which is based on an `event loop` and `callbacks`.

### Synchronous vs Asynchronous
- `Synchronous` – `blocking` command: all other operations must wait for that process to complete before executing
- `Asynchronous` – `non-blocking` command, other operations/processes can execute while we are waiting for that process to complete. 
    - When complete, a `callback function` will be called

## Global Object
- Its a `preloaded library` of objects in Node.js
    - namespace
- Common example: global `console` object

### Useful Console methods

| Method | Description | 
| ----------- | ----------- |
| assert() | Writes an error message to the console if the assertion is false |
| clear() | Clears the console |
| info() | Outputs an informational message to the console |
| error() | Outputs an error message to the console |
| log() | Outputs a message to the console |
| table() | Displays tabular data as a table |
| time() | Starts a timer (can track how long an operation takes) |
| timeEnd() | Stops a timer that was previously started by console.time() |
| trace() | Outputs a stack trace to the console |
| warn() | Outputs a warning message to the console |

### Timing Functions
Allow us to `control` the process `asynchronously`
- `setTimeout`
- `clearTimeout(timeoutObject)`
- `setInterval`
- `clearInterval(intervalObject)`

### Process Object
Global Process Object: when program run, the process that assoicated with each program

Allows us to work with information about the `current process instance`
- get `environment` information
- read `environment variables`
- Comminucate through `standard input` and `standard output`
- Kill the current process
- Etc

- **Examples**:
    - `process.argv`: start a process with PORT specified, when starts up a server, can specify node listen on PORT (How this file got executed?)
    - `process.stdout.write`: the function that called by `console.log`
    - `process.stdin.on`: creates a `listener` for a given event, (`data stream` comes in) push 'data' in the event loop if data comes in
    - ` process.exit`: exit the process

### Require Object
Allows us to `import` other `Node.js modules`
- Format (node syntax for importing modules): 

        global.require(module) 
        require(module)

## NodeJS Modules
`Node Modules` are `libraries` that provide `extra functionality`

- `core modules`: modules that are included in the installation of Node.js and can simply be `require`

- `non-core modules`: can be included by installing it `locally` through
the `NPM` registry

### Path module (core)
- Provides methods for working with files and directories on the file system

        var path = require('path')

- Some methods

        path.basename()
        path.dirname()
        path.extname()
        path.format()
        path.isAbsolute()
        path.join()
        path.normalize()
        path.parse() -> return path obj

### Create / export Modules (core)
Creating `custom modules` allows for `modularity` in programming
- `module` is a global object
- export a module:

        global.module.exports

- example:
    1. export an object that is a class
    2. then bring in functionality for public by `require()`

### Events (core)
The `events` module allows you can create, emit, and listen for your
own created events, `communicate between one class of object and the other`

- All event properties and methods are an `instance` of an
`EventEmitter` object

        var events = require('events').EventEmitter();

- Methods:

        eventEmitter.on()
        eventEmitter.emit() -> sents out a event

### Child Processes (core)
modules: `os` && `child_process` are OS level

The `child_process` module provides the ability to `spawn child processes`, be able to `execute command` in certain OS

- Methods:

        child_process.exec(command[, options][, callback])
        child_process.execFile(file[, args][, options][, callback])

    - Spawn is typically for `longer processes` with large amounts of data in which we have to wait for results to be processed: 
    - Communicates with child processes through `stdin` and `stdout`  
            
            child_process.spawn
            
## Node Package Manager (NPM)
The `Node Package Manager` is a set of `command line tools`, or `CLI's`, that keep track of small software applications called `packages`
- **NPM**: a quick way to share code with developers
    - can import functionalities:
        - For creating web servers
        - For testing
    - Better check credibility of a package in `npmjs.com` for a `craap test (evaluating sources with CRAAP)`
- **packages**: are folders reusable code (functionality / modularity)
    - can be installed `locally` to app or `globally` with Node.js

- **Installation and tools**:
    - `install globally`: add the package to the system path, example:

            $ npm install -g grunt-cli
    
    - `install a package locally`: NPM creates a node_modules folder if not exist

            $ npm install <package>

    - `package.json`: a default file in the root of the application that NPM creates

            $ npm init

        - To run / test the script defined in the `package.json` file:
                
                    $ npm run run
                    $ npm run test

    - To save a package to your project use the `--save` option `(as a dependency)`

            $ npm install --save <package>

    - For `developement` purpose:

            $ npm install --save-dev <package>
    
    - To list all the locally / globally installed packages

            $ npm list
            $ npm list -g

    - To uninstall a package:

            $ npm uninstall --save <package>
            $ npm uninstall --save-dev <package>

    - To make your application consistent with your package.json file (create a `package-lock.json` file):
                
            $ npm prune

- **Publishing**:
    - For creating and publishing a package to your account
    - To create an account:

            $ npm adduser
            $ npm login -> Repo for users to push packages
    - To publish a package:

            $ npm publish -> pushing the repo
            $ npm version -> increment the version number
            $ npm minor -> increment the minor version number (2nd .)
            $ npm patch -> increment the patch version number (3rd .)

- Goods:
    - Ensure consistency
    - No conflict
    - No malicious code

## Express.js
Express is a `minimal` and `flexible` web application `framework` run `on top of Node.js`, that provides a robust set of features for web and mobile applications
    - a package to `create a web server` that doesn't rely on scripting, as opposed to Apache / Nignex

- Express is a `middleware` web framework
    - typically used to describe functionality between the server and applications running on top of it
    - `middleware functions` have access to the `request and response objects` as well as the `next` middleware function
        - Middleware functions:
            - `execute` any code
            - `make changes` to the `request and response objects`
            - `end` the `request-response cycle` ***(Must call next() to pass control to next middleware IF current middleware does not end the request-response cycle)***
            - `call` the `next` middleware function in the stack

    - `middleware stack`: is an ordered list of middleware functions that are executed `sequentially` for `each incoming request`

        - `app.use()`: is used to `mount` middleware functions at a specified path, means adding `middleware functions` to the `middleware stack` **(Or you can say: gives a characteristic to the server, adds characteristics to middleware stack)**: 

                app.use([path], callback)
        
        - where `callback` is a `middleware` function(req,res,next)

- Install Express:
        
        npm install express

- Creates an Express application:

        var express = require('express')
        var app = express() -> Here the app variable is an HTTP requestListener function

- Express express() functions:

        express.static()
        express.json()
        express.urlencoded()

- Express app() methods:
    - `app()` is the request listerner object

            app.all() -> listening for all methods
            app.delete()
            app.disable() -> disable a certain feature(string) invisable
            app.disabled()
            app.enable() -> enable a certain feature(string) visiable
            app.enabled()
            app.engine()
            app.listen() -> listen to port #
            app.METHOD() -> app.get(), app.post(), app.put(), app.delete()
            app.param()
            app.render() -> render a page
            app.route()
