## Cookies
- As a token for server to identify the client

- two types: 
    1. Session cookies: expires when turn off the browser
    2. Persistent cookies: will last even turn off the browser

- Set a cookie

        req.cookie(<name>,<value>,<options>)
- Read a cookie

        req.cookie.<name>


## Sessions
- A method of storing information about a user's interaction and activities during a single visit
- can be used with Express.js to add session information to requests
- Sessions are kept as `objects` on the `server side` and automatically generate `session ID` for each client

- In an Express application: 

        var session = require('express-session’)
        app.use(session({ 
            name: 'session', 
            secret: 'secret string’,
            maxAge: 30*60*1000
        })) 

- Set the session associated with a user
        
        req.session.user = loggedin_user;

- Check for the user session each time a request is made
        
        app.get('/session2', isLoggedIn, (req,res)=>{…})
    
- where `isLoggedIn` is a function that checks for a valid
        
        req.session.user

- When user logs out, delete the user session with
    
        req.session.regenerate()

## Serialization
- Save objects or state into a form we can save in a file

        const v8 = require('v8')

        serialized_data = v8.serialize({ "name": "bobby" })
        console.log("\n Serialized data is ")
        console.log(serialized_data)
        console.log("\n Deserialized data is ")
        console.log(v8.deserialize(serialized_data))


## HTML5 Web Storage
- `IndexedDB` is a `client-side storage` solution for `structured` data. It can store `large BLOBs` and `excels` in searches

-` Web SQL` is `client-side SQL implementation`. It’s an API that allows us to manipulate client-side tables in SQL

## Websockets
- clients can connect to the server and leave a `two way connection` open
    - clients can send data that are easily broadcasted to every open connection

#### What is websocket?
- A webSocket is a communication `protocol` that provides two-way communication channels over a `single TCP connection`
    - interaction between a web client and a web server with `lower overheads`, facilitating `real-time data transfer` from and to the server.
    - two-way `(bi-directional)` ongoing conversation can take place between the client and the server
    - by upgrading to websocket connection, mimick a 2-way communication

#### Adv
- Lightweight 2 way communication
- Lower latency
- Less Internet Traffic

### How it works?
- Client: initiate "chat" event
    - When to send out the event
    - What to do with server "message" event
- Server: initiate "message" event
    - When to send out the event
    - What to do with client "chat" event
