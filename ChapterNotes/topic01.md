# Intro to Web Development

## The Client-Server Model
- The client server model consists of `constant communications` between two subsystems: the `client` and `server`
- The **server**: the provider of a service
- The **client**: the user of the services provided

#### Server types:
- Web servers
- Application servers
- Database servers
- Mail servers
- Media servers
- Authentication servers

## Web-based Apps
- `Traditional desktop applications` are installed and stored on the hard drive of your computer `(locally)` and `do not` require a connection` to a
server to use its features.

- `web-based applications` are software that reside on a
`server`. A `connection needs to be made` to the server to access its
features.
    - **adv**: 
        1. Accessible from any computers
        2. Independent of OS
        3. Easy to update
        4. Better security since it is now handled by server
    - **disadv**: 
        1. Needs internet (connection needed)
        2. `Government regulations` over `location` of server (government sanctions)
        3. Restrictions on OS resources

#### Static Websites vs. Dynamic Websites
- Static request:
    1. `client requests` resources from server thru `URL`
    2. `server responds` with some `HTML files` to client requests everytime 
- Dynamic request:
    1. client requests resources from server thru `URL`
    2. server side runs the resource thru a `script`
    3. `script` converts to `HTML files`
    4. server responds and sends back `HTML files` to the client

## Internet Protocols
A layered architecture (bottom-up)

1. **Link Layer**:
    - Responsible for:
        - `physical transmission` between 2 nodes of data `(bits)` across `media` (wired and wireless)
        - establishing logical links
    - It handles:
        - packet creation -> break down into packets (64K at most per packet)
        - transmission
        - reception
        - error detection
        - collisions
        - line sharing
        - etc...

2. **Network Layer**:
    - provides `switching` and `routing`
    - Calculates `logical paths` in the network (aka `virtual circuits`)
    - Gives `direction` to packets
    - Makes use of `IP addresses`:
        - `Internal` IP: A way in network to `identify` your machine
        - `External` IP: How does the Internet finds you
        - IPv4 is 32-bit and IPv6 is 128-bit:
            - Each use diff algo to `map` to the `MAC address` in `Link Layer`

3. **Transport Layer**:
    - Provide `service` for `upper layer (app layer)` to `ensure` transmissions `arrive in order` and `without error`
    - TCP:
        - Break down into packets: `0-64k`, usually about `1KB`
        - Each packet has `header` that has a number so that `receiver` can put the `message` back together

4. **Application Layer**:
    - Application layer protocols:
        - **HTTP**: used for `web communication`
        - **SSH**: used for `remote` command-line connections to `servers`
        - **FTP**: used for `transferring files` between computers
        - **POP/IMAP/SMTP**: used for transferring and stroring `emails`
        - **DNS**: used for resolving `domain names` to `IP address`

## Domain Name System (DNS) 
ID for a domain of a resource

Example: `server1.www.funwebdev.com`
- Top-level domain: `com`
    - Generic TLD:
        - Sponsored TLD: .gov, .mil, .edu
        - Unrestricted TLD: .com, .net, .org, .info
    - Country code TLD:
        - .us, .ca, .uk, .au
        - Internationalized Domain Names

- Second-level domain: `funwebdev`
- Third-level domain: `www`
- Fourth-level domain: `server1`

#### Address Resolution
We want IP associated with DNS (www.test.org)
1. client sends query to `DNS resolver`
2. `DNS resolver` checks its IP that cache in browser and then OS
3. DNS resolver ask `root server resides on ISP` for the location of `.org`
4. `Root name server` responds back with the location of `.org` to ISP
5. `Primary DNS server` in ISP ask `TLD server` about `.org`
6. `TLD server` respond IP address for the DNS server to Primary DNS server
7. The resolver sends a query to an authoritative name server and got response with IP addesss
8. The resolver caches the IP and return the IP to client

## Uniform Resource Locators (URL)
A typical `Uniform Resource Locator` / Identifier (URL / URI) has the
following parts:
- Example: `http://www.funwebdev.com/index.php?page=17#article`
    - Protocal: `http`
        - send an HTTP request on `port 80`
    - Domain: `www.funwebdev.com`
        - the domain `identifies` the server from which we are requesting resources
        - case insensitive
        -  `IP address` can be used for the domain
    - Port: 
        - `optional attribute` to `specify` connections to ports other than the defaults, also provides `different services`
        - `identify` a communication `endpoint` and often `defines a process` that runs on the server
        - e.g. `http://test.com:8000/`
        - common port #:
            - HTTPs -> 443
            - HTTP -> 80 
            - DNS -> 53
            - SMTP -> 25
            - TELNET -> 23
            - FTP -> 21
    - Path: `index.php`
        - Example: `root of a web server`
            - Linux: `/var/www/html/` 
            - Windows IIS: /inetpub/wwwroot

    - Query String: `page=17`
        - Supply extra info to the server
        - keys: `page`
        - values: `17`
        - Delimiters: `?`, `&`
    - Fragment: `article`
        - a way of requesting a `portion` of a page
        - Browsers will seek out the `tag anchor` in the HTML and `scroll` the website to it

## Hypertext Transfer Protocol (HTTP)
some components:
1. **headers**:
    - request headers: include data about the client machine
    - response headers: include info about the server answering the request and the data being sent
2. **Request methods**:
    - POST, GET, PUT, DELETE

3. **Response codes**:
    - range from 1XX to 5XX
    - 1XX codes are informational status communicators
    - 2XX codes are for `successful` responses
        - 200 OK
    - 3XX codes are for `redirection-related` responses
        - 301: Moved Permanently
        - 304: Not Modified
        - 307: Temporary redirect 
    - 4XX codes are `client errors`
        - 400: Bad Request
        - 401: Unauthorized
        - 404: Not found
        - 414: Request URI too long 
    - 5XX codes are `server errors`
        - 500: Internal server error

## Web Servers
A web server is nothing more than a computer that `responds to HTTP
requests`, actively listening for requests.

#### What is a web server?
- An entity that `receives` and `processes requests` via HTTP
- `Hosts` websites / web applications to serve www
- Provides a `service` via the web
- Could refer to a complete system or a piece of software that `supervises` the process
- Can be found `embedded in devices` like printers, routers, webcams to serve local network
- Able to `map URL` to a `local file system resource` (static requests) and to `internal or external program name` (dynamic requests)

#### Web Server Considerations:
1. **Performance**
    - the measure of the `time` and `resources` used to `complete a request` on a server
        - Two ways to measure:
            1. `Response time`: measure in `time per query` (process that take a particular time to complete) 
            2. `Throughput`: measure in `queries per second`

2. **Scalability**
    - a system can deal with `increased use` without significant performance `degradation`
    - Why scalability is important for web servers?
        - it enables them to handle `increasing amounts of traffic` and `users` as the application grows
    - How can scalability be achieved?
        - Add more servers to a server cluster
        - Upgrade CPU, RAM or storage
        - Load balancing: Distributing the incoming requests `across multiple servers`, ensuring that `no single server` becomes `overloaded`
        - Caching: Storing `frequently` accessed data in memory to `reduce the load` on the server
    
3. **Security**:
    - Components:
        - Confidentiality: info `not disclosed` to unauthorized users
        - Integrity: info is `not falsiflied` or `lost`
    - ways to increase security of web servers:
        - Using `encryption` during data transmission (https instead of http)
        - Using user account with `strong passwords` or `authentication`
        - Always keeping the OS, web servers `up-to-date` with all available `security patches`
        - Use of Firewalls, intrusion Detection System to `prevent` or `detect unauthorized accesses`
    - Systems should be built with `security` in mind
        - e.g. defensive programming of web applications that checks user input for validity to `prevent buffer overflow attacks`

4. **Availability**:
    - can be viewed as a part of security
    - availability is often expressed in `uptime`
    - What `percentage of the time` would you like your web site to be up?
        - `99.9% uptime`: the website is available 99.9% of the time, it can be down 8.7 hours per year
        - `99.99% uptime`: can be down 5 second per year
        - Pros of higher uptime:  
            - `reliable` and `available` web can improve user experience, increase revenue, and improve brand reputation
        - Trade-offs:
            - higher costs, more complex infrastructure, potential perfromance issues

#### Application stacks:
Web server needs an application stack to run a website, this includes:
1. **Operating system**:
    - software interacts with hardware
        - scheduling tasks
        - file manipulation
    - `Linux`
        - adv:
            - remote administration (SSH connection, text-based)
            - free
            - higher uptime on average
            - large open-source community
        - disadv: 
            - learning curve
    - `Windows`
        - belongs to Microsoft
        - money cost
        - constrained by MS ecosystem

2. **Web server software**:
    - `Apache`
        - open source
        - 65%-70% market share
        - platform independent
        - configure through text files
    - `Nginx`
        - open source
        - mostly for static content
        - C10K problem (How to process 10,000 connections from clients)
        - fast
        - lightweight
    - `IIS`
        - Microsoft ecosystem
        - good for scalability
        - good for large scale apps
        - the most efficient as compared to Apache and Nginx
        - money cost

3. **Database**:
    - SQL based (data keep in structure):
        - adv: efficiently finding `query` and retain `data integrity`
        - `MySQL`, `PostgreSQL`, `sqlite`, `Oracle`, `IBM DB2`, `Microsoft SQL Server (MS ecosystem, it could go with Windows since things are integrated)`
    - NoSQL (unstructured data):
        - adv: handle large volume data, scalable, flexible
        - `MongoDB`, `Apache Cassandra`, `CouchDB`, `Redis (but more like a programming language)`

4. **scripting** language for dynamic requests:
    - `server side language` used as a programming language to `respond` to `HTTP request`
    - `PHP`:
        - old
        - 70% market share
    - `ASP.NET: 
        - Microsoft ecosystem
    - `Python`
    - `Node.js`:
        - backend framework (take requests, respond, running logic, sending back response)
        - adv: written in JS

Examples: **L**inux **A**pache **M**ySQL **P**HP, WAMP, XAMPP, WISA, MEAN

## Virtualization
The creation of an `abstract version` of a subject. Typically, virtualization requires `creating an abstract or logical partition` of a computing resource. `Example: Google Cloud Platform`

Types of virtualization (each `differs` according to the environment):
1. **Hardware virtualization**
    - Allows `multiple OS` to run simultaneously on a `single physical machine` by `creating a layer of abstraction` between the `hardware` and the `OS`, that layer is called `virtual machine monitor` or `hypervisor` (the solution that enables virtualization)
    - Virtual Machines:
        - Type 1 (Google Cloud Platform):

            | Application | Application | ... |
            | ----------- | ----------- | --- |
            | OS1         | OS2         | ... |
            | Hypervisor |
            | Shared Hardware |

            ***adv: efficient***

        - Type 2 (Virtual box):

            | Application | Application | ... |
            | ----------- | ----------- | --- |
            | OS1         | OS2         | ... |
            | Hypervisor |
            | Host OS |
            | Hardware |

            ***adv: can make copies, platform independent, flexible***

2. **OS virtualization**
    - A `single operating system kernel` is shared among `multiple containers`, each `lightweight container` runs its own set of applications and services, but all containers share the same kernel and system resources
    - Example: Docker

        | Container: <br> App, libraries, file system | Container <br> App, libraries, file system | ... |
        | ----------- | ----------- | --- |
        | Docker Engine |
        | OS kernel |
        | Hardware |

3. **Application virtualization**
    - An application runs inside its own dedicated environment and interfaces translates to host OS `(translate a progarm from one platform to another)`
    - WINE: allows running window App on Linux emulator

## Cloud Computing
- The use of `remote computers`, connected via the `Internet`, to store,
process and share data
- Cloud computing services: Amazon, google, Microsoft
- Clients pay for the `use of data` (e.g. amount of time they have a VM on) not the hardware that they use
- Cloud computing services:
    1. PaaS (platform): 
        - infrastructure of deploying apps, have the access of controlling scrpting language and database
        - `Heroku`, `Google App engine`, `render.com`

    2. IaaS (infrastructure):
        - provide virtualized computing resources, have the access to OS
        - `Google compute engine in GCP`, `AWS`, `MS Azure`

    3. SaaS (software):
        - provides software applications over the internet, have the access to software
        - `google maps`, `google authentication`, `API (Amazon, Facebook)`

    4. CaaS (container):
        - Containerlization: provides a platform for managing and deploying containers 
        - `Docker images`, `clustering`, `Google Kubernetes Engine`

#### Benefits
- **Pay structure**: `pay-as-you-go`, pay for the resources needed
- **No install worries**: No need to worry about installing, maintaining, or updating hardware and software  
- **Compatibility**: cloud computing service is designed to be compatible with a `wide range of devices and platforms`
- **Co-authoring**: users can `share` the service
- **Upgrades**: services are `upgraded automatically` by the provider
- **Total cost of ownership (TCO)**: the `total cost` of owning and operating a system or service over its `lifetime`
- **Economy of Scale**: smaller businesses to access `enterprise-level` services and technology at a more `affordable price`

#### Issues
- **Data Security**: businesses not have `full control` over the `security`,
can lead to loss of data, financial losses
- **Control**: lose control over some applications
- **Risk**: downtime, data loss...
- **Technical Issues**: poor performance, compatibility issues, and software bugs...
- **Legal Issues**: data privacy, data ownership, and regulatory compliance...
