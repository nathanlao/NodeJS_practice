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

### Path module
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